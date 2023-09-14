<template>
  <navegacao/>
  <div class="coupon-form">
    <h1 class="page-title">Add Coupon</h1>
    <form @submit.prevent="addCoupon">
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          v-model="formData.nome"
          placeholder="Enter coupon name"
          required
          data-cy="input-nome"
        />
      </div>
      <div class="form-group">
        <label for="desconto">Desconto:</label>
        <input
          type="text"
          id="desconto"
          name="desconto"
          v-model="formData.desconto"
          placeholder="Enter discount amount"
          required
          data-cy="input-desconto" 
        />
      </div>
      <button type="submit" class="submit-button" data-cy="submit-button">Add Coupon</button>
    </form>
    <div v-if="successMessage" class="success-message" data-cy="success-message">
      {{ successMessage }}
    </div>
  </div>
</template>

<script setup>
import navegacao from "../components/navegacao.vue"
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const formData = ref({
  nome: '',
  desconto: '',
});

const router = useRouter();
const successMessage = ref('');

const addCoupon = async () => {
  const response = await fetch('http://localhost:8000/cupom', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData.value),
  })

  if (!response.ok) {
    alert("Erro ao adicionar cupom");
  } else {
    const responseData = await response.json();
    successMessage.value = responseData.message;
    // Redirect to another page or perform other actions as needed
    router.push('/parcerias');
  }
};
</script>


<style scoped>
.page-title {
  text-align: center;
  font-size: 30px;
  margin-bottom: 30px;
}
/* Improved styles for the coupon form and success message */
.coupon-form {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  font-size: 18px;
  display: block;
  margin-bottom: 5px;
  color: #333;
}

input[type='text'] {
  width: 100%;
  padding: 12px;
  font-size: 18px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #ddd;
}

.submit-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px;
  font-size: 20px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

.success-message {
  margin-top: 20px;
  background-color: #4caf50;
  color: white;
  padding: 12px;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
}
</style>
