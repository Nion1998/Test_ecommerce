// use local storage to manage cart data
const addToDb = product => {
  console.log("ut", product);
  // Get the existing cart items from the local storage or initialize an empty array
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Check if the product already exists in the cart
  const isProductInCart = cartItems.some(item => item.id === product.id);

  // If the product is not already in the cart, add it
  if (!isProductInCart) {
    // Add the selected product to the cart items array
    cartItems.push(product);

    // Store the updated cart items in the local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Display a temporary alert message on the right side of the screen
    var msg = "The item has been successfully placed in your shopping cart ";
    var status = 1;
    alertMessage(msg, status);
  } else {
    var msg = "You already have this product in your shopping cart";
    alertMessage(msg, status);
  }
};

function alertMessage(msg, status) {
  const alertMessage = document.createElement("div");

  if (status == 1) {
    alertMessage.classList.add("alert-message");
  } else {
    alertMessage.classList.add("alert-message-error");
  }

  alertMessage.textContent = msg;
  document.body.appendChild(alertMessage);

  // Automatically remove the alert message after 5 seconds
  setTimeout(() => {
    alertMessage.classList.add("slide"); // Add the 'slide' class for animation
    setTimeout(() => {
      alertMessage.remove(); // Remove the element after the animation is complete
    }, 2500); // Wait for 500ms (matching the CSS transition duration)
  }, 500);
}

const getStoredCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("cartItems");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const removeFromDb = id => {
  console.log(id);
  const item = JSON.parse(localStorage.getItem("cartItems")) || [];
  const newItem = item.filter(record => record.id !== id);
  localStorage.setItem("cartItems", JSON.stringify(newItem));
};

const deleteShoppingCart = () => {
  localStorage.removeItem("cartItems");
};

export {addToDb, getStoredCart, removeFromDb, deleteShoppingCart};
