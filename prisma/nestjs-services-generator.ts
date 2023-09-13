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
function replaceWords(input: string, modelName: string) {
  // Define a regular expression to match words (letters and digits)
  const wordRegex = /\b\w+\b/g;

  // Replace matched words with the model name while maintaining original casing
  const replacedInput = input.replace(wordRegex, (match) => {
    // Determine the casing of the match (lowercase, uppercase, or mixed case)
    if (match === match.toLowerCase()) {
      // Match is in lowercase, maintain lowercase in the replacement
      return modelName.toLowerCase();
    } else if (match === match.toUpperCase()) {
      // Match is in uppercase, maintain uppercase in the replacement
      return modelName.toUpperCase();
    } else {
      // Match is in mixed case, maintain original casing in the replacement
      return modelName;
    }
  });
  return replacedInput;
}

// Updated function to duplicate a folder recursively
function duplicateFile(
  sourceFilePath: string,
  targetFilePath: string,
  modelName: string,
) {
  const fileContent = fs.readFileSync(sourceFilePath, 'utf8');
  const replacedContent = replaceWords(fileContent, modelName);
  fs.writeFileSync(targetFilePath, replacedContent);
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

  const lastFolderName = path.basename(sourceDir);

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
      const replacedContent = replaceWords(fileContent, modelName);
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
