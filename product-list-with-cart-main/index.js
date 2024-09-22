const addToCartBtn = document.querySelectorAll(".add-to-cart");
const dessertImages = document.querySelectorAll(".dessert-img");
const cart = document.getElementById("cart");
let cartItems = 0; //for total number of items in cart
let orderTotal = 0; // for total cost of items

const desserts = JSON.parse();

// function for functionality of add to cart btn
function clickedAddToCart(button, index) {
    let dessertCounter = 1; //creates dessert counter for each dessert
    button.addEventListener("click", () => {
        button.classList.add("clicked-add-to-cart");//styling of the button
        button.innerHTML = `
            <button type="button" class="change-quantity-btn" value="decrement">
                <img src="assets/images/icon-decrement-quantity.svg" alt="decrement"> <!-- decrement button-->
            </button>
            <p>${dessertCounter}</p>
            <button type="button" class="change-quantity-btn" value="increment">
                <img src="assets/images/icon-increment-quantity.svg" alt="increment"> <!--increment btn-->
            </button>
        `;//when button is clicked new elements pop within it
        
        dessertImages[index].classList.add("dessert-img-border");//adds red border to image

        cart.innerHTML =``;//cart

        //functionality of increment and decrement button

    })
};


addToCartBtn.forEach(clickedAddToCart);