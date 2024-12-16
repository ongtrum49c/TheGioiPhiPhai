// Function to simulate adding to cart
function addToCart(productName, productPrice) {
    alert(`${productName} đã được thêm vào giỏ hàng!\nGiá: ${productPrice}`);
}

// Assign event listeners to all "Mua Ngay" buttons
document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll('.cta-button');
    
    buyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const productCard = event.target.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;

            addToCart(productName, productPrice);
        });
    });
});
