// Array of SVG file URLs
const svgFiles = [
    'SVG/palette_template.svg',
    'SVG/BLPhd01.svg',
    'SVG/BLPhd02.svg',
  ];
  
  // Function to load and inject an SVG inline
  async function loadRandomSVG() {
    try {
      // Select a random SVG file
      const randomIndex = Math.floor(Math.random() * svgFiles.length);
      const randomSVG = svgFiles[randomIndex];
  
      // Fetch the SVG file
      const response = await fetch(randomSVG);
  
      if (!response.ok) {
        throw new Error(`Failed to load SVG: ${response.statusText}`);
      }
  
      // Get the SVG content as text
      const svgContent = await response.text();
  
      // Inject the SVG into the HTML
      const container = document.getElementById('biglogo');
      container.innerHTML = svgContent;
    } catch (error) {
      console.error('Error loading SVG:', error);
    }
  }
  
  // Load a random SVG when the page loads
  window.addEventListener('DOMContentLoaded', loadRandomSVG);
  