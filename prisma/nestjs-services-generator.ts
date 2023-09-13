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
  return input.toLowerCase().replace(/\s+/g, '-');
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

// Function to duplicate a folder recursively
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
    const fileName =
      convertToLowerCaseWithHyphens(modelName) + path.extname(file);
    const targetFilePath = path.join(targetDir, fileName);

    if (fs.statSync(sourceFilePath).isDirectory()) {
      duplicateFolder(sourceFilePath, targetFilePath, modelName);
    } else {
      const fileContent = fs.readFileSync(sourceFilePath, 'utf8');
      const replacedContent = replaceWords(fileContent, modelName);
      fs.writeFileSync(targetFilePath, replacedContent);
    }
  }
}

// Example usage
const schemaPath = '/path/to/prisma/schema.prisma'; // Replace with your Prisma schema path
const sourceFolder = '/path/to/source/folder'; // Replace with your source folder path
const outputBaseFolder = '/path/to/output/folders'; // Replace with your output base folder path

const prismaModels = extractModelsFromSchema(schemaPath);

for (const modelName of prismaModels) {
  const targetFolder = path.join(
    outputBaseFolder,
    convertToLowerCaseWithHyphens(modelName),
  );
  duplicateFolder(sourceFolder, targetFolder, modelName);
  console.log(`Duplicated folder for model ${modelName}`);
}

console.log('Duplication completed.');
