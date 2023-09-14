import * as fs from 'fs';
import * as path from 'path';

// Function to parse Prisma schema file and extract model names
function extractModelsFromSchema(schemaPath: string): string[] {
  try {
    const schemaContent = fs.readFileSync(schemaPath, 'utf-8');
    const modelRegex = /model (\w+)/g;
    const matches = [...schemaContent.matchAll(modelRegex)];
    return matches.map((match) => match[1]);
  } catch (error) {
    console.error('Error parsing Prisma schema:', error);
    return [];
  }
}

// Function to convert a string to lowercase with hyphens
function convertToLowerCaseWithHyphens(input: string) {
  return input
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Insert hyphen between lowercase and uppercase letters
    .toLowerCase(); // Convert the entire string to lowercase
}

// Function to replace words in a string while maintaining casing
function replaceWithCasePreservation(input, target, replacement) {
  let regex = new RegExp(target, 'ig'); // Case-insensitive global match
  return input.replace(regex, (match) => {
    let newStr = replacement;

    // Check if the match starts with a capital letter
    if (match[0] === match[0].toUpperCase()) {
      // Capitalize the first letter of the replacement string
      newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1);
    } else {
      // Make the first letter of the replacement string lowercase
      newStr = newStr.charAt(0).toLowerCase() + newStr.slice(1);
    }

    return newStr;
  });
}

function replacePathsWithHyphens(input) {
  // Match import statements with paths and replace the paths with the hyphenated version
  return input.replace(
    /(['"])((?:[^'"]|\\.)+)(['"])/g,
    (match, startQuote, path, endQuote) => {
      return startQuote + convertToLowerCaseWithHyphens(path) + endQuote;
    },
  );
}

// Updated function to duplicate a folder recursively
function duplicateFolder(
  sourceDir: string,
  targetDir: string,
  modelName: string,
) {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  const files = fs.readdirSync(sourceDir);

  for (const file of files) {
    const sourceFilePath = path.join(sourceDir, file);
    const targetFilePath = path.join(
      targetDir,
      convertToLowerCaseWithHyphens(modelName) +
        '.' +
        file.split('.').slice(1).join('.'),
    );

    if (fs.statSync(sourceFilePath).isDirectory()) {
      duplicateFolder(sourceFilePath, targetDir, modelName);
    } else {
      const fileContent = fs.readFileSync(sourceFilePath, 'utf8');
      const replacedContent = replacePathsWithHyphens(
        replaceWithCasePreservation(
          fileContent,
          path.basename(sourceDir).toLocaleLowerCase(),
          modelName,
        ),
      );

      fs.writeFileSync(targetFilePath, replacedContent);
    }
  }
}

// Example usage
const schemaPath = './prisma/schema.prisma'; // Replace with your Prisma schema path
const sourceFolder = './prisma/template/file'; // Replace with your source folder path
const outputBaseFolder = './src/services'; // Replace with your output base folder path
const prismaModels = extractModelsFromSchema(schemaPath);

// Check if the output base folder exists, and create it if it doesn't
if (!fs.existsSync(outputBaseFolder)) {
  fs.mkdirSync(outputBaseFolder, { recursive: true });
}

console.log(
  prismaModels.length + ' Models found in Prisma schema:',
  prismaModels,
);
for (const modelName of prismaModels) {
  const targetFolder = path.join(
    outputBaseFolder,
    convertToLowerCaseWithHyphens(modelName), // Use the updated function
  );
  duplicateFolder(sourceFolder, targetFolder, modelName);
  //   console.log(`Duplicated folder for model ${modelName}`);
}

console.log(prismaModels.length + ' Models Duplication completed.');
