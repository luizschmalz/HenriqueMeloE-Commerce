<template>
  <Navegacao />
  <div class="entrega-page">
    <div class="entrega-form">
      <h1 class="page-title">Criação de Entregas</h1>
      <form @submit.prevent="Criar">
        <div class="form-group">
          <label for="id"></label>
          <input
            type="text"
            id="id"
            name="id"
            v-model="formData.id"
            placeholder="Digite o ID"
            required
          />
        </div>
        <div class="form-group">
          <label for="nomeProduto"></label>
          <input
            type="text"
            id="nomeProduto"
            name="nomeProduto"
            v-model="formData.nomeProduto"
            placeholder="Digite o nome do produto"
            required
          />
        </div>
        <div class="form-group">
          <label for="quantidade"></label>
          <input
            type="text"
            id="quantidade"
            name="quantidade"
            v-model="formData.quantidade"
            placeholder="Digite a quantidade"
            required
          />
        </div>
        <div class="form-group">
          <label for="marca"></label>
          <input
            type="text"
            id="marca"
            name="marca"
            v-model="formData.marca"
            placeholder="Digite a marca"
            required
          />
        </div>
        <div class="form-group">
          <label for="tipoDoProduto"></label>
          <input
            type="text"
            id="tipoDoProduto"
            name="tipoDoProduto"
            v-model="formData.tipoDoProduto"
            placeholder="Digite o tipo do produto"
            required
          />
        </div>
        <div class="form-group">
          <label for="enderecoDeEntrega"></label>
          <input
            type="text"
            id="enderecoDeEntrega"
            name="enderecoDeEntrega"
            v-model="formData.enderecoDeEntrega"
            placeholder="Digite o endereço de entrega"
            required
          />
        </div>
        <div class="form-group">
          <label for="preco"></label>
          <input
            type="text"
            id="preco"
            name="preco"
            v-model="formData.preco"
            placeholder="Digite o preço"
            required
          />
        </div>
        <div class="form-group">
          <label for="status"></label>
          <input
            type="text"
            id="status"
            name="status"
            v-model="formData.status"
            placeholder="Digite o status"
            required
          />
        </div>
        <div class="form-group">
          <label for="emailEntregador"></label>
          <input
            type="email"
            id="emailEntregador"
            name="emailEntregador"
            v-model="formData.emailEntregador"
            placeholder="Digite o email do entregador"
            required
          />
        </div>
        <button type="submit" class="submit-button">Criar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import Navegacao from '../components/navegacao.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const formData = ref({
  id: '',
  nomeProduto: '',
  quantidade: '',
  marca: '',
  tipoDoProduto: '',
  enderecoDeEntrega: '',
  preco: '',
  status: '',
  emailEntregador: '',
});

const emailEntregador = formData.value.emailEntregador;

const Criar = async () => {
  const response = await fetch('http://localhost:8000/entregas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData.value),
  });
  
  if (!response.ok) {
    const responseData = await response.json();
    alert(`${responseData.detail}`);
  }
  else {
    alert(JSON.stringify(formData.value));
    this.$router.push({ name: 'paginaEntregador', params: { emailEntregador } });
  }
};
</script>


<style scoped>
.entrega-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.entrega-form {
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 300px;
}

.page-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 16px;
  display: block;
  margin-bottom: 5px;
  color: #555;
}

input[type='text'], input[type='email'] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #ddd;
  background-color: #f0f0f0;
}

.submit-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

.signin-link {
  text-align: center;
  margin-top: 10px;
}

.signin-link a {
  text-decoration: underline;
  cursor: pointer;
}
</style>