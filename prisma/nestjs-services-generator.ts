import {
  readFileSync,
  writeFileSync,
  readdirSync,
  mkdirSync,
  existsSync,
  statSync,
} from 'fs';
import { join, basename } from 'path';

// Extract model names from the Prisma schema
const extractModelsFromSchema = (schemaPath: string): string[] => {
  try {
    const schemaContent = readFileSync(schemaPath, 'utf-8');
    return Array.from(
      schemaContent.matchAll(/model (\w+)/g),
      (match) => match[1],
    );
  } catch (error) {
    console.error('Error parsing Prisma schema:', error.message);
    return [];
  }
};

// Convert string to lowercase with hyphens
const toKebabCase = (input: string): string =>
  input
    .replace(/\s+/g, '-')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();

// Replace words in a string while preserving case
const replacePreservingCase = (
  input: string,
  target: string,
  replacement: string,
): string =>
  input.replace(
    new RegExp(target, 'ig'),
    (match) =>
      (match.charAt(0).toUpperCase() === match.charAt(0)
        ? replacement.charAt(0).toUpperCase()
        : replacement.charAt(0).toLowerCase()) + replacement.slice(1),
  );

// Replace paths with hyphens in import statements
const replacePathsWithHyphens = (input: string): string =>
  input.replace(
    /(['"])((?:[^'"]|\\.)+)(['"])/g,
    (match, startQuote, path, endQuote) =>
      startQuote + toKebabCase(path) + endQuote,
  );

// Duplicate a folder recursively
const duplicateFolder = (
  sourceDir: string,
  targetDir: string,
  modelName: string,
): void => {
  if (!existsSync(targetDir)) mkdirSync(targetDir);

  const files = readdirSync(sourceDir);
  files.forEach((file) => {
    const sourceFilePath = join(sourceDir, file);
    const targetFilePath = join(
      targetDir,
      `${toKebabCase(modelName)}.${file.split('.').slice(1).join('.')}`,
    );

    if (statSync(sourceFilePath).isDirectory()) {
      duplicateFolder(sourceFilePath, targetDir, modelName);
    } else {
      if (!existsSync(targetFilePath)) {
        try {
          const content = readFileSync(sourceFilePath, 'utf8');
          const newContent = replacePathsWithHyphens(
            replacePreservingCase(
              content,
              basename(sourceDir).toLowerCase(),
              modelName,
            ),
          );
          writeFileSync(targetFilePath, newContent);
        } catch (error) {
          console.error(
            `Error duplicating file ${sourceFilePath}:`,
            error.message,
          );
        }
      }
    }
  });
};

// Main execution
const main = (): void => {
  const schemaPath = './prisma/schema.prisma';
  const sourceFolder = './prisma/template/file';
  const outputBaseFolder = './src/services';

  if (!existsSync(outputBaseFolder))
    mkdirSync(outputBaseFolder, { recursive: true });

  const prismaModels = extractModelsFromSchema(schemaPath);
  console.log(
    `${prismaModels.length} Models found in Prisma schema:`,
    prismaModels,
  );

  prismaModels.forEach((modelName) => {
    const targetFolder = join(outputBaseFolder, toKebabCase(modelName));
    duplicateFolder(sourceFolder, targetFolder, modelName);
  });

  console.log(`${prismaModels.length} Models Duplication completed.`);
};

try {
  main();
} catch (error) {
  console.error('Error:', error.message);
}
