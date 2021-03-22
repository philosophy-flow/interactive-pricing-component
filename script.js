// Handle discount text for different viewport sizes
const discount = document.getElementById('discount');
function setDiscountText() {
  if (window.innerWidth <= '500') {
    discount.innerHTML = '-25%';
  } else {
    discount.innerHTML = '-25% discount';
  }
}

setDiscountText();
window.addEventListener('resize', setDiscountText);



// Handle range bar change
const views = document.getElementById('views');
const price = document.getElementById('price');

const rangeBar = document.getElementById('myRange');
const discountBtn = document.getElementById('discount-btn');

function setNoDiscount(val) {
  switch (val) {
    case 0:
      views.innerHTML = '10K PAGEVIEWS';
      price.innerHTML = '$8.00';
      break;

    case 25:
      views.innerHTML = '50K PAGEVIEWS';
      price.innerHTML = '$12.00';
      break;
    case 50:
      views.innerHTML = '100K PAGEVIEWS';
      price.innerHTML = '$16.00';
      break;
    case 75:
      views.innerHTML = '500K PAGEVIEWS';
      price.innerHTML = '$24.00';
      break;
    case 100:
      views.innerHTML = '1M PAGEVIEWS';
      price.innerHTML = '$36.00';
      break;
  }
}

function setWithDiscount(val) {
  switch (val) {
    case 0:
      views.innerHTML = '10K PAGEVIEWS';
      price.innerHTML = '$6.00';
      break;

    case 25:
      views.innerHTML = '50K PAGEVIEWS';
      price.innerHTML = '$9.00';
      break;
    case 50:
      views.innerHTML = '100K PAGEVIEWS';
      price.innerHTML = '$12.00';
      break;
    case 75:
      views.innerHTML = '500K PAGEVIEWS';
      price.innerHTML = '$18.00';
      break;
    case 100:
      views.innerHTML = '1M PAGEVIEWS';
      price.innerHTML = '$27.00';
      break;
  }
}


function handleRangeChange() {
  let value = (this.value - this.min) / (this.max - this.min) * 100;

  // Handle slider BG color
  this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0 0%, hsl(174, 77%, 80%) ' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)';

  if (!discountBtn.checked) {
    setNoDiscount(value)
  } else {
    setWithDiscount(value)
  }
}


rangeBar.addEventListener('input', handleRangeChange);
discountBtn.addEventListener('change', () => {
  let value =
    (rangeBar.value - rangeBar.min) / (rangeBar.max - rangeBar.min) * 100;

  if (!discountBtn.checked) {
    setNoDiscount(value)
  } else {
    setWithDiscount(value)
  }
});
