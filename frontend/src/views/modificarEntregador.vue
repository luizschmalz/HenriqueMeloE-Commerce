<template>
  <Navegacao />
  <div class="modify-page">
    <div class="modify-form">
      <h1 class="page-title">Modifique seus dados</h1>
      <form @submit.prevent="modifying">
        <div class="form-group">
          <label for="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            v-model="formData.nome"
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div class="form-group">
          <label for="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            v-model="formData.cpf"
            placeholder="Digite seu cpf"
            required
          />
        </div>
        <div class="form-group">
          <label for="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            v-model="formData.telefone"
            placeholder="Digite seu numero de telefone"
            required
          />
        </div>
        <div class="form-group">
          <label for="veiculo">Veiculo:</label>
          <input
            type="text"
            id="veiculo"
            name="veiculo"
            v-model="formData.veiculo"
            placeholder="Digite o tipo do veiculo"
            required
          />
        </div>
        <div class="form-group">
          <label for="placa">Placa:</label>
          <input
            type="text"
            id="placa"
            name="placa"
            v-model="formData.placa"
            placeholder="Digite sua placa"
            required
          />
        </div>
        <div class="buttons-container">
          <button type="submit" class="alterar-button" @click="alterar()">Alterar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navegacao from '../components/navegacao.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    Navegacao,
  },
  data() {
    return {
      formData: {
        nome: '',
        cpf: '',
        telefone: '',
        veiculo: '',
        placa: '',
      },
    };
  },
  methods: {
    async alterar() {
      const email = this.getEmailFromRoute();
      try {
        const response = await fetch(`http://localhost:8000/entregadores/${email}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });

        if (!response.ok) {
          const responseData = await response.json();
          alert(`${responseData.detail}`);
        } else {
          alert(JSON.stringify(this.formData));
          this.$router.push({ name: 'paginaEntregador', params: { email } });
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
  computed: {
    getEmailFromRoute() {
      return this.$route.params.email;
    }
  },
};
</script>

<style scoped>
.modify-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.page-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.modify-form {
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 300px;
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

input[type='text'] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #ddd;
  background-color: #f0f0f0;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.alterar-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

.alterar-button:hover {
  background-color: #0056b3;
}
</style>
