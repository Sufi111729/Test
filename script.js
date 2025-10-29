// Get elements
var cards = document.querySelectorAll('.card');
var totalEl = document.querySelector('.total');
var addBtn = document.querySelector('.btn');

// Add click events to cards
for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', function() {
    // Remove active from all
    for (var j = 0; j < cards.length; j++) {
      cards[j].classList.remove('active');
    }
    // Add active to clicked
    this.classList.add('active');

    // Update total
    var price = this.getAttribute('data-price');
    totalEl.textContent = 'Total : $' + price + '.00 USD';
  });
}

// Add to cart button
addBtn.addEventListener('click', function() {
  var activeCard = document.querySelector('.card.active');
  if (activeCard) {
    var price = activeCard.getAttribute('data-price');
    var unit = activeCard.querySelector('.unit').textContent;
    alert('Added to cart!\n\n' + unit + '\nPrice: $' + price + '.00 USD');
  }
});