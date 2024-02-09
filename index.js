const fs = require('fs'); // For file system operations
const readlineSync = require('readline-sync');  // For user input

function getUserInput(prompt) { // Function to get user input
  return readlineSync.question(`${prompt}: `);  // Display the prompt and return the user's input
}

function createLogo() { // Function to create the logo
  const text = getUserInput('Enter up to three characters for the text'); // Get the text for the logo
  const textColor = getUserInput('Enter text color (keyword or hex)');  // Get the text color
  const shapeOptions = ['circle', 'triangle', 'square'];  // Define the shape options
  const shapeIndex = readlineSync.keyInSelect(shapeOptions, 'Choose a shape:'); // Get the shape selection
  const shapeColor = getUserInput('Enter shape color (keyword or hex)');  // Get the shape color

  let svgString = ''; // Initialize the SVG string

  switch (shapeOptions[shapeIndex]) { // Generate the SVG string based on the shape selection
    case 'circle':  // Circle SVG string
      svgString = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="50" fill="${shapeColor}" />
          <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}">${text}</text>
        </svg>
      `;
      break;
    case 'triangle':  // Triangle SVG string
      svgString = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="150,18 244,182 56,182" fill="${shapeColor}" />
          <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}">${text}</text>
        </svg>
      `;
      break;
    case 'square':  // Square SVG string
      svgString = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect x="75" y="25" width="150" height="150" fill="${shapeColor}" />
          <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}">${text}</text>
        </svg>
      `;
      break;
    default:
      console.log('Invalid shape selection.');  // Log an error message if the shape selection is invalid
      return;
  }

  
  fs.writeFileSync('logo.svg', svgString); // Save the SVG string to a file (e.g., 'logo.svg')

  console.log('Generated logo.svg'); // Log a message to indicate that the logo was generated
}

createLogo(); // Call the function to generate the logo
