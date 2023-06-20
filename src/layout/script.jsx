// Add your JavaScript code to handle any interactivity or dynamic behavior
// For example, you can add event listeners for leaf interactions

const leaves = document.querySelectorAll('.leaf');

leaves.forEach((leaf) => {
  leaf.addEventListener('mouseenter', () => {
    // Display additional information or provide links for the specific programming language
    // You can modify this part according to your requirements
    leaf.style.backgroundColor = 'green';
  });

  leaf.addEventListener('mouseleave', () => {
    // Reset the styling when the mouse leaves the leaf
    leaf.style.backgroundColor = '';
  });
});
