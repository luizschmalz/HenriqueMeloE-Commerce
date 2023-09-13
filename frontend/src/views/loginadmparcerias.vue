<script setup>
import Navegacao from '../components/navegacao.vue';
import telainicialbox from '../components/telainicialbox.vue';
import equipeVue from '../components/equipe.vue';  
import produtosVue from '../components/produtos.vue';
import Footer from '../components/footer.vue';
</script>






<template>
    <Navegacao></Navegacao>
    <div class="tela">
      <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="login" class="login-form">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required />
          </div>
  
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
  
          <button type="submit" class="login-button">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script >
  import Navegacao from '../components/navegacao.vue';

  export default {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      login() {
        // For demonstration purposes, check if the username and password match
        if (this.username === "ianbraga_" && this.password === "familia72720305") {
          // If the login is correct, navigate to the "/parcerias" route
          this.$router.push("/parcerias");
        } else {
          // Handle incorrect login (show error message, etc.)
          alert("Incorrect username or password. Please try again.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .tela {
    background: url('../components/imagens/cool-background.png');
    min-height: 95vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .login-container {
    max-width: 400px;
    padding: 20px;
    text-align: center;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .form-group {
    margin: 10px 0;
    width: 100%;
    text-align: left;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .login-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .login-button:hover {
    background-color: #0056b3;
  }
  </style>
  
  