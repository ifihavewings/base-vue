const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Function to download a single image
const downloadImage = async (url, filePath) => {
  try {
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
    });

    response.data.pipe(fs.createWriteStream(filePath));

    console.log(`Downloaded: ${filePath}`);
  } catch (error) {
    console.error(`Failed to download ${url}: ${error.message}`);
  }
};

// Function to download multiple images
const downloadImages = async (baseUrl, start, end, extension, saveDir) => {
  if (!fs.existsSync(saveDir)) {
    fs.mkdirSync(saveDir, { recursive: true });
  }

  for (let i = start; i <= end; i++) {
    const url = `${baseUrl}/${i}.${extension}`;
    const filePath = path.join(saveDir, `${i}.${extension}`);
    await downloadImage(url, filePath);
  }
};

// Configuration
const baseUrl = 'http://1.15.26.177/avatar';
const start = 1; // Start number for the images
const end = 20; // End number for the images
const extension = 'png'; // File extension (e.g., png, jpg)
const saveDir = 'images'; // Directory to save images

// Start downloading images
downloadImages(baseUrl, start, end, extension, saveDir);
