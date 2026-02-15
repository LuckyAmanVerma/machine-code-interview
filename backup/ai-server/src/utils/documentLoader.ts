import fs from "fs";
import path from "path";

export function loadDocuments() {
  const dataPath = path.join(__dirname, "../data");

  const files = fs.readdirSync(dataPath);

  let combinedText = "";

  files.forEach((file) => {
    if (file.endsWith(".txt")) {
      const filePath = path.join(dataPath, file);
      const content = fs.readFileSync(filePath, "utf-8");

      combinedText += `\n\nSOURCE: ${file}\n\n`;
      combinedText += content;
    }
  });

  return combinedText;
}
