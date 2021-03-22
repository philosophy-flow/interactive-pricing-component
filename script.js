// Handle custom slider BG color change
document.getElementById("myRange").oninput = function() {
  let value = (this.value - this.min) / (this.max - this.min) * 100;
  console.log(value);

  this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0 0%, hsl(174, 77%, 80%) ' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)'
};
