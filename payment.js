// Get item and amount from URL query string
const params = new URLSearchParams(window.location.search);
const totalAmountParam = params.get('amount');
const totalAmount = totalAmountParam ? parseFloat(totalAmountParam) : 500;
const itemName = params.get('item') ? decodeURIComponent(params.get('item')) : 'Product';

// Elements
const paymentOptions = document.getElementsByName("payment");
const cardForm = document.getElementById("cardForm");
const upiForm = document.getElementById("upiForm");
const result = document.getElementById("result");
const displayAmount = document.getElementById('displayAmount');
const displayItem = document.getElementById('displayItem');

// Show passed item & amount
displayAmount.textContent = `₹${totalAmount.toFixed(2)}`;
displayItem.textContent = itemName;

// Listen for payment option changes
Array.from(paymentOptions).forEach(option => {
  option.addEventListener("change", () => {
    if (option.value === "card") {
      cardForm.classList.remove("hidden");
      upiForm.classList.add("hidden");
      result.innerHTML = "";
    } else if (option.value === "upi") {
      upiForm.classList.remove("hidden");
      cardForm.classList.add("hidden");
      result.innerHTML = "";
    } else if (option.value === "cod") {
      cardForm.classList.add("hidden");
      upiForm.classList.add("hidden");
      result.innerHTML = `Order Placed Successfully 🚚<br>Item: ${itemName}<br>Total Amount: ₹${totalAmount.toFixed(2)}`;
    }
  });
});

// Card Payment
function processCard() {
  const name = document.getElementById("cardName").value.trim();
  const number = document.getElementById("cardNumber").value.trim();
  const expiry = document.getElementById("expiry").value.trim();
  const cvv = document.getElementById("cvv").value.trim();

  if (name && number && expiry && cvv) {
    result.innerHTML = `✅ Payment Successful via Card!<br>Item: ${itemName}<br>Total Amount: ₹${totalAmount.toFixed(2)}`;
  } else {
    result.innerHTML = "⚠️ Please fill in all card details.";
  }
}

// UPI Payment
function processUPI() {
  const upiId = document.getElementById("upiId").value.trim();
  if (!upiId) {
    result.innerHTML = "⚠️ Please enter a valid UPI ID.";
    return;
  }

  // Simple mobile detection
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    const upiLink = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(itemName)}&am=${encodeURIComponent(totalAmount)}`;
    result.innerHTML = "Redirecting to your UPI app...";
    window.location.href = upiLink;
  } else {
    result.innerHTML = "⚠️ UPI payments work only on mobile devices. Please open this page on your phone.";
  }
}


