const fs = require('fs');
const path = require('path');

// Directory containing the images
const directory = './images';

// Read the files in the directory
fs.readdir(directory, (err, files) => {
  if (err) {
    return console.error('Unable to scan directory:', err);
  }

  // Filter out only the PNG files and sort them to maintain order
  const pngFiles = files.filter(file => path.extname(file).toLowerCase() === '.png').sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  // Rename each file sequentially
  pngFiles.forEach((file, index) => {
    const oldPath = path.join(directory, file);
    const newPath = path.join(directory, `${index + 1}.png`);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        return console.error('Error renaming file:', err);
      }
      console.log(`Renamed: ${oldPath} -> ${newPath}`);
    });
  });
});
