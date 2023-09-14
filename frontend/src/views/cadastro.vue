
<template>
    <navegacao/>
    <div class="Cadastro">
        <p id="textoprim">Cadastro de Lojas</p>
        <div class="title-container">
            <form id ="cadastro" @submit.prevent="addLoja">
                <div class = "divdeinputs">
                    <label for = 'emailLoja'>Email da Loja:</label>
                    <input type="text" name="emailLoja" id="emailLoja" v-model="formData.email" placeholder="Digite o email da loja">
                </div>
                <div class = "divdeinputs">
                    <label for = 'NomeLoja'>Nome da Loja:</label>
                    <input type="text" id="NomeLoja" name ="NomeLoja" v-model="formData.nome" placeholder="Digite o nome da loja">
                </div>
                <div class = "divdeinputs">
                    <label for = 'CNPJ'>CNPJ da Loja:</label>
                    <input type="text" name="CNPJ" id="CNPJ" v-model="formData.cnpj" placeholder="Digite o CNPJ da loja">
                </div>
                <div class = "divdeinputs">
                    <label for = 'Localizacao'>Endereço da Loja:</label>
                    <input type="text" name="Localizacao" id="Localizacao" v-model="formData.endereco" placeholder="Digite o endereço da loja">
                </div>
                <div class = "divdeinputs">
                    <label for = 'senha'>Senha da Loja:</label>
                    <input type="text" name="senha" id="senha" v-model="formData.senha" placeholder="Digite a senha da loja">
                </div>
                <div class = "divdeinputs">
                    <input type="submit" class="submit-btn" value="Enviar"> 
                </div>
                <div class = "divdeinputs">
                    <button class="botaologin" @click="deleteLoja" type="button">Deletar Loja</button>
                </div>
                <div class = "divdeinputs">
                    <button class="botaologin" @click="toLogin" type="button">Ir para Login</button>
                </div>
                <div class = "divdeinputs">
                    <button class="botaologin" @click="toHome" type="button">Voltar para home</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import navegacao from '../components/navegacao.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const toLogin = () => {
  router.push('/loginlojas');
};

const toHome = () =>{
    router.push('/')
}
const formData = ref({
  email: '',
  nome: '',
  cnpj: '',
  endereco: '',
  senha: '',
});

const addLoja = async () => {
  const response = await fetch('http://localhost:8000/lojas', {
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
    router.push('/lojas');
  }
};

const deleteLoja = async () => {
  const { email } = formData.value;
  console.log(formData.value);
  const response = await fetch(`http://localhost:8000/lojas/${email}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    alert("Erro");
  } else {
    alert("Loja excluída com sucesso");
  }
};


</script>



<style scoped>   
    .Cadastro{
        margin: 0 auto;
        background-color: transparent;
        width: 100%;
        height: 1200px;
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
        margin-top: 50px;
    }
    #cadastro{
        background-image: url("C:\Users\luize\.vscode\luize\HenriqueMeloE-Commerce\frontend\src\components\imagens\background image reverse.jpg");
        width: 800px;
        height: 1100px;
        display: flex;
        flex-direction: column;
        align-items: center; 
        margin-bottom: 30px;
        margin-top: 30px;
        border: antiquewhite;
        border-radius: 30px;
    }

    .divdeinputs{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;
        margin-top: 20px;
    } 

    label{
        font-weight: bold;
        margin-bottom: 15px;
        color: white;
        padding: 5px 10px;
        
    }

    input, select{
        padding: 5px 10px;
        width: 300px;
    }


    .submit-btn{
        background-color: grey;
        color: white;
        font-weight: bold;
        border: 2px solid #222;
        padding:10px;
        font-size: 16px;
        cursor: pointer;
        transition: 0.5s;
        border-radius: 10px;
    }

    .submit-btn:hover{
        background-color: transparent;
        color: white;
    }

    .botaologin{
        padding: 5px 10px;
        width: 300px;
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

    .botaologin:hover{
        background-color: transparent;
        color: white;
    }
</style>
