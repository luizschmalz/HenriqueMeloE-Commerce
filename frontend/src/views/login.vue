<template>
    <div class="Login">
        <p id="textoprim">Login</p>
        <form id ="login" @submit.prevent="addLogin">
            <div class = "divdeinputs">
                <label for = 'emailLoja'>Email da Loja:</label>
                <input type="text" id="Emailoja" name ="EmailLoja" v-model="formData.email" placeholder="Digite o email da loja">
            </div>
            <div class = "divdeinputs">
                <label for = 'senha'>Senha da Loja:</label>
                <input type="text" name="senha" id="senha" v-model="formData.senha" placeholder="Digite a senha da loja">
            </div>
            <div class = "divdeinputs">
                <input type="submit" class="submit-btn" value="Login"> 
            </div>
            <div class = "divdeinputs">
                <button class="botaohome" @click="toHome" type="button">Voltar para home</button> 
            </div>
        </form>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const toHome = () =>{
    router.push('/')
}

const formData = ref({
  email: '',
  senha: '',
});

const addLogin = async () => {
  const response = await fetch('http://localhost:8000/loginlojas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData.value),
  })
  
  if (!response.ok) {
    alert("Error");
  }
  else {
    alert(JSON.stringify(formData.value));
    router.push('/loginlojas');
    window.location.href = '/minhaloja'
  }
};

</script>


<style scoped>
    .Login{
        margin: 0 auto;
        background-color: transparent(68, 45, 45);
        width: 100%;
        height: 1080px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;     
    }

    #textoprim{
        text-align: center;
        font-size: xx-large;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
    }
    #login{
        background-image: url("C:\Users\luize\.vscode\luize\HenriqueMeloE-Commerce\frontend\src\components\imagens\background image reverse.jpg");
        width: 800px;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center; 
        margin-bottom: 50px;
        margin-top: 50px;
        border: antiquewhite;
        border-radius: 30px;
    }

    .divdeinputs{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
        margin-top: 30px;
    } 

    label{
        font-weight: bold;
        margin-bottom: 15px;
        color: white;
        padding: 5px 10px;
        
    }

    input{
        padding: 5px 10px;
        width: 300px;
    }


    .submit-btn{
        background-color: grey;
        color: white;
        font-weight: bold;
        border: 2px solid #222;
        border-radius: 10px;
        padding:10px;
        font-size: 16px;
        cursor: pointer;
        transition: 0.5s;
    }

    .submit-btn:hover{
        background-color: transparent;
        color: white;
    }

    .botaohome{
        background-color: grey;
        color: white;
        font-weight: bold;
        border: 2px solid #222;
        border-radius: 10px;
        width: 300px;
        padding:10px;
        font-size: 16px;
        cursor: pointer;
        transition: 0.5s;  
    }

    .botaohome:hover{
        background-color: transparent;
        color: white; 
    }
</style>