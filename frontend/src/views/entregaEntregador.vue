<template>
    <Navegacao />
    <div class="pagina-entrega">
      <div class="entrega-box">
        <h1 class="page-title">Detalhes das Entregas</h1>
        <li v-for="(entrega, index) in entregas" :key="index">
        <div class="entregador-details" v-if="entrega.emailEntregador">
          <p><strong>Email do Entregador:</strong> {{ entrega.emailEntregador }}</p>
          <p><strong>Nome do Produto:</strong> {{ entrega.nomeProduto }}</p>
          <p><strong>Quantidade:</strong> {{ entrega.quantidade }}</p>
          <p><strong>Marca:</strong> {{ entrega.marca }}</p>
          <p><strong>Tipo do Produto:</strong> {{ entrega.tipoDoProduto }}</p>
          <p><strong>Endereço de Entrega:</strong> {{ entrega.enderecoDeEntrega }}</p>
          <p><strong>Preço:</strong> {{ entrega.preco }}</p>
          <p><strong>Status:</strong> {{ entrega.status }}</p>
          <p><strong>Email do Entregador:</strong> {{ entrega.emailEntregador }}</p>
        </div>
        </li>
      </div>
    </div>
  </template>
  
  <script>
import Navegacao from '../components/navegacaoEntregador.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    Navegacao,
  },
  data() {
    return {
      entregas: [],
    };
  },
  mounted() {
    const router = useRouter();
    const emailEntregador = router.currentRoute.value.params.emailEntregador;
    if (emailEntregador) {
      try {
        fetch(`http://localhost:8000/entregas/${emailEntregador}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            this.entregas = data;
          })
          .catch((error) => {
            console.error('Erro ao tentar recuperar dados da entrega:', error);
          });
      } catch (error) {
        console.error('Erro na tentativa de recuperar dados da entrega:', error);
      }
    }
  },
};
</script>

<style scoped>
.pagina-entrega {
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

.entrega-box {
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 300px;
}
</style>
 