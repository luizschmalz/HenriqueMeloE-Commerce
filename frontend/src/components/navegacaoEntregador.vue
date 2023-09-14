<template>
  <header class="header">
    <button @click="toHome" type="button" class="logo">Henrique Melo E-commerce</button>

    <div class="navbar">
      <div class="dropdown">
        <button @click="toggleDropdown" class="dropdown-btn">Entregas</button>
        <div v-show="showDropdown" class="dropdown-content">
          <router-link :to="`/entregaEntregador/${email}`">Detalhes das Entregas</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { useRouter } from 'vue-router';

const { email } = defineProps(['email']);
const router = useRouter();
const showDropdown = ref(false);

const toHome = () => {
  router.push('/');
};

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
</script>
 
  
  <style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    

}

body {
  min-height: 10vh;
  max-width: 100%;
  max-height: 100%; 
  background: url('../components/imagens/cool-background.png');
  
}

.header{
  height: 60px;
  position: sticky; /* fixa o elemento no topo da página, teste no scroll */
  top: 0;
  left: 0; 
  width: 100%; /* 100% da horizontal */
  display: flex; 
  color: #000000; /* cor do texto que foi inutilizada inclusive, tô definindo na navbar*/
  justify-content: space-between; /* espaço entre os elementos */
  align-items: center;
  background-color: transparent;
  padding: 20px 100px;
  z-index: 321312312; /* z-index é meio que a prioridade desse testo */
}

.logo{
  font-size: 20px;
  color: #000000;
  font-size: 32px;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.6s ease;
}


.logo:hover{
  font-size: 33px;
}

.navbar a{
  position: relative;
  color: #000000;
  text-decoration: none;
  font-size: 26.5px;
  font-weight: 500;
  margin-left: 30px;
  transition: all 0.3s ease;
}

.navbar button{
  position: relative;
  color: #000000;
  text-decoration: none;
  font-size: 26.5px;
  font-weight: 500;
  margin-left: 30px;
  transition: all 0.3s ease;
}


.navbar a::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 1px;
  background: rgb(7, 7, 7);
  transition: all 0.3s ease;
}

.navbar button::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 1px;
  background: rgb(7, 7, 7);
  transition: all 0.3s ease;
}

.navbar a:hover::before{
  width: 100%;
}

.navbar button:hover::before{
  width: 100%;
}
  
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 26.5px;
    font-weight: 500;
    margin-left: 30px;
    transition: all 0.3s ease;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    color: #000;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .dropdown-content a:hover {
    background-color: #ddd;
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  </style>
  
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

}

body {
  min-height: 10vh;
  max-width: 100%;
  max-height: 100%; 
  background: url('../components/imagens/cool-background.png');
  
  

}
*{
    margin: 0px 30px;
    padding: 0;
    font-family: 'ZZYZX', sans-serif;
    box-sizing: border-box;

}
@font-face {
    font-family: ZZYZX;
    src: url(../components/fonts/ZZYZX.TTF);
}
</style>