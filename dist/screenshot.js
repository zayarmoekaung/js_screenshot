// Define the element you want to take a screenshot of
const element = document.body;

// Create a canvas element and set its dimensions to match the element
const canvas = document.createElement('canvas');
canvas.width = element.offsetWidth;
canvas.height = element.offsetHeight;

// Get the canvas context and draw the element onto the canvas
const context = canvas.getContext('2d');
context.drawImage(element, 0, 0);

// Add event listeners to track the mouse movements and clicks
let startX, startY, endX, endY;
element.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mouseup', handleMouseUp);

function handleMouseDown(e) {
  // Store the starting coordinates of the selection rectangle
  startX = e.clientX - element.offsetLeft;
  startY = e.clientY - element.offsetTop;

  // Add event listeners to track the mouse movements
  element.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mousemove', handleMouseMove);
}

function handleMouseMove(e) {
  // Update the ending coordinates of the selection rectangle
  endX = e.clientX - element.offsetLeft;
  endY = e.clientY - element.offsetTop;
}

function handleMouseUp() {
  // Remove the event listeners for mouse movements
  element.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mousemove', handleMouseMove);

  // Get the dimensions and position of the selection rectangle
  const width = Math.abs(endX - startX);
  const height = Math.abs(endY - startY);
  const x = Math.min(startX, endX);
  const y = Math.min(startY, endY);

  // Create a new canvas element with the dimensions of the selection rectangle
  const selectionCanvas = document.createElement('canvas');
  selectionCanvas.width = width;
  selectionCanvas.height = height;

  // Get the canvas context and draw the selected area onto the new canvas
  const selectionContext = selectionCanvas.getContext('2d');
  selectionContext.drawImage(canvas, x, y, width, height, 0, 0, width, height);

  // Convert the canvas to a data URL and create an image element
  const dataUrl = selectionCanvas.toDataURL();
  const image = new Image();
  image.src = dataUrl;

  // Add the image to the page or do something else with it
  document.body.appendChild(image);
}