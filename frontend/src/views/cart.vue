<template>
  <navegacao />
  <div class="checkout-page">
    <!-- Display the QR code for PIX payment method outside of payment-container -->
    <div class="pix-qr-code-container">
      +55 (85) 98898-6876
      <img src="../components/imagens/pix.jpg" alt="PIX QR Code" class="pix-qr-code" width="400"  height="400"/>
    </div>
    <div class="payment-container">
      <h1 class="checkout-header">Checkout</h1>
      <div class="cart-items">
        <div class="cart-item" v-for="(item, index) in cartItems" :key="index">
          <img :src="item.imageUrl" :alt="`Product Image ${index + 1}`" class="product-image">
          <div class="product-details">
            <h2 class="product-name">{{ item.name }}</h2>
            <p class="product-price">${{ item.discountedPrice || item.price }}</p>
            <p class="product-quantity">Quantity: {{ item.quantity }}</p>
          </div>
          <button class="remove-button" @click="removeItem(index)">Remove</button>
        </div>
      </div>
      <div class="cart-total">
        <div class="coupon-container">
          <label for="coupon-input">Enter Coupon Name:</label>
          <input
            type="text"
            id="coupon-input"
            v-model="couponName"
            placeholder="Enter coupon name"
          />
          <button class="apply-button" @click="applyCoupon">Apply</button>
          <button class="reset-button" @click="resetCart">Reset</button>
        </div>
        <p class="total-text">Cart Total:</p>
        <p class="total-amount">${{ calculateCartTotal().toFixed(2) }}</p>
      </div>
      <!-- Display selected credit card information -->
      <div v-if="selectedCard">
        <h2>Selected Credit Card</h2>
        <p>Name: {{ selectedCard.nome }}</p>
        <p>Last 4 Digits: **** **** **** {{ selectedCard.numero_cartao.slice(-4) }}</p>
        <!-- Display other card details here -->
      </div>

      <button class="checkout-button" @click="toPayment">Payment options</button>
      <button class="checkout-button" @click="checkout">Proceed to Checkout</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

// Use a computed property to get the selected credit card from the store
const selectedCard = computed(() => store.state.creditCards.selectedCard);

// Use a computed property to get the selected credit card from the store
import navegacao from '../components/navegacaotranparent.vue';
import { ref } from 'vue';

const selectCreditCard = (card) => {
  // Pass the selected credit card as a query parameter
  router.push({ path: '/cart', query: { selectedCard: JSON.stringify(card) } });
};


const toPayment = () => {
  router.push('/meuscartoes');
};

const cartItems = ref([
  { 
    name: 'Camisa Brasil copa 2002',
    price: 19.99, 
    quantity: 1, 
    imageUrl: 'https://th.bing.com/th/id/R.5ac4dfbbd326d01e750ee8d9c5160937?rik=RLBzl9LRiqPPgA&riu=http%3a%2f%2fofficialpsds.com%2fimageview%2frw%2fnv%2frwnvly_large.png%3f1521316495&ehk=1eA5DI2kgAg%2fUWc0%2fbjV2n%2fFFB6%2bIw7fyFmQZHkHeSo%3d&risl=&pid=ImgRaw&r=0' // Placeholder image URL
  },
  { 
    name: 'Teclado Gamer abençoado', 
    price: 29.99, 
    quantity: 1, 
    imageUrl: 'https://www.pngmart.com/files/16/Keyboard-PNG-File.png' // Placeholder image URL
  },
  { 
    name: 'Chuteira autografada pelo Henrique Melo', 
    price: 14.99, 
    quantity: 1, 
    imageUrl: 'https://dw0jruhdg6fis.cloudfront.net/producao/29416114/G/chuteira_campo_penalty_speed_xxi_01.png' // Placeholder image URL
  },
]);


const couponName = ref(''); // Store the entered coupon name
const coupons = ref([]); // Coupons fetched from your database
const selectedCoupon = ref(null); // Store the selected coupon

const fetchCoupons = async () => {
  try {
    const response = await fetch('http://localhost:8000/cupom', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      coupons.value = await response.json();
    } else {
      console.error('Failed to fetch coupons.');
    }
  } catch (error) {
    console.error('Error while fetching coupons:', error);
  }
};

const applyCoupon = () => {
  selectedCoupon.value = coupons.value.find(coupon => coupon.nome === couponName.value);

  if (selectedCoupon.value) {
    const discount = selectedCoupon.value.desconto;
    const cartTotal = calculateCartTotal();
    const discountAmount = (cartTotal * discount) / 100;
    const newTotal = cartTotal - discountAmount;

    // Update the cart total with the coupon discount
    cartItems.value.forEach(item => {
      item.discountedPrice = item.price - (item.price * discount) / 100;
    });
  } else {
    alert('Coupon not found or invalid.');
  }
};

const calculateCartTotal = () => {
  let total = 0;
  for (const item of cartItems.value) {
    total += item.discountedPrice || item.price;
  }
  return total;
};

fetchCoupons(); // Fetch coupons from your database
const resetCart = () => {
  // Reset cart items to their original prices
  cartItems.value.forEach(item => {
    item.discountedPrice = null;
  });

  // Clear the coupon code input field
  couponName.value = '';

  // Show a message or perform any other desired actions
};
</script>



<style scoped>

.pix-qr-code-container {
  position: relative;
  top: 0;
  left: 0;
  width: 40%;
  height: 40%;
  /* Display the QR code behind the payment container */
  z-index: 0;
  border-radius: 30%;
  border: #f9f9f9;
}
.pix-qr-code {
  
  /* Make the QR code slightly transparent */
  opacity: 1;
  border-radius: 5%;
  border: #f9f9f9;
}
.coupon-container {
  margin-top: 20px;
  text-align: center;
}

label {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-right: 10px;
}

#coupon-input {
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 200px;
}

.apply-button {
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
}

.apply-button:hover {
  background-color: #45a049;
}
.checkout-page {
  width: 100%;
  height: 100vh;
  background: url('../components/imagens/cool-background.png');;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
}

.payment-container {
  background-color: white;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.checkout-header {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.product-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
}

.product-details {
  flex-grow: 1;
}

.product-name {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.product-price {
  font-size: 16px;
  color: #777;
}

.product-quantity {
  font-size: 14px;
  color: #888;
}

.remove-button {
  background-color: #ff3c3c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: 600;
}

.cart-total {
  margin-top: 20px;
  font-size: 18px;
}

.total-text {
  color: #333;
}

.total-amount {
  color: #ff5722;
  font-weight: 600;
  font-size: 20px;
  margin-top: 5px;
}

.checkout-button {
  background: linear-gradient(315deg, #00ccff, #d400d4);
  border: none;
  border-radius: 20px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  padding: 10px 20px;
  margin-top: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.checkout-button:hover {
  background: linear-gradient(315deg, #00ccff, #d400d4);
  transform: scale(1.05);
}
</style>
