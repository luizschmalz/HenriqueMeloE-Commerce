<template>
    <Navegacao></Navegacao>
    <div class="screen">
      <div class="coupon-list">
        <h1 class="page-title">Discount Coupons</h1>
        <ul>
          <li v-for="(coupon, index) in discountCoupons" :key="index">
            <div class="coupon-item">
              <div class="coupon-info">
                <span class="coupon-name">{{ coupon.nome }}</span>
                <span class="coupon-desconto">{{ coupon.desconto }}% de desconto</span>
              </div>
              <div class="coupon-actions">
                <button class="edit-button" @click="editCoupon(coupon)">Edit</button>
                <button class="delete-button" @click="deleteCoupon(coupon.nome)">Delete</button>
              </div>
            </div>
            <!-- Edit form for each coupon -->
            <div v-if="coupon.editing" class="edit-form">
              <h2>Edit Coupon</h2>
              <form @submit.prevent="updateCoupon(coupon)">
                <div class="form-group">
                  <label for="edit-nome">Nome:</label>
                  <input type="text" id="edit-nome" v-model="coupon.editedNome" required />
                </div>
                <div class="form-group">
                  <label for="edit-desconto">Desconto:</label>
                  <input type="text" id="edit-desconto" v-model="coupon.editedDesconto" required />
                </div>
                <button type="submit" class="update-button">Update Coupon</button>
              </form>
            </div>
          </li>
        </ul>
        <div class="add">
          <button class="botao" @click="toPayment">Add Coupon</button>
        </div>
      </div>
      <div class="business-text">
        <h2 class="tituloempresa">Parcerias</h2>
        <h1 class="textoempresa">
          "Henrique Melo E-Commerce: O lugar onde até as parcerias se encontram nas esquinas virtuais, trocando likes, compartilhando memes de negócios e fazendo networking enquanto os carrinhos de compra se divertem em um 'rolezinho' digital. Venha para o nosso mundo, onde até os produtos formam amizades inesperadas, como a sapatilha que fez amizade com a cafeteira e agora dança na sua xícara de café. 😄✨"
        </h1>
      </div>
    </div>
  </template>
  
  <script setup>
  import Navegacao from '../components/navegacao.vue';
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const toPayment = () => {
    router.push('/admparcerias');
  };
  
  const discountCoupons = ref([]);
  
  const fetchDiscountCoupons = async () => {
    try {
      const response = await fetch('http://localhost:8000/cupom', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        discountCoupons.value = await response.json();
        // Add 'editing' property to each coupon
        discountCoupons.value.forEach((coupon) => {
          coupon.editing = false;
          coupon.editedNome = coupon.nome;
          coupon.editedDesconto = coupon.desconto;
        });
      } else {
        console.error('Failed to fetch discount coupons.');
      }
    } catch (error) {
      console.error('Error while fetching discount coupons:', error);
    }
  };
  
  const deleteCoupon = async (nomeCupom) => {
    try {
      const response = await fetch(`http://localhost:8000/cupom/${nomeCupom}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        // Remove the deleted coupon from the list
        discountCoupons.value = discountCoupons.value.filter((coupon) => coupon.nome !== nomeCupom);
      } else {
        console.error('Failed to delete coupon.');
      }
    } catch (error) {
      console.error('Error while deleting coupon:', error);
    }
  };
  
  const editCoupon = (coupon) => {
    // Set the 'editing' property to true for the selected coupon
    coupon.editing = true;
  };
  
  const updateCoupon = async (coupon) => {
    // Update the coupon information on the server
    try {
      const response = await fetch(`http://localhost:8000/cupom/${coupon.nome}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: coupon.editedNome,
          desconto: coupon.editedDesconto,
        }),
      });
      if (response.ok) {
        // Update the local coupon data and reset 'editing' property
        coupon.nome = coupon.editedNome;
        coupon.desconto = coupon.editedDesconto;
        coupon.editing = false;
      } else {
        console.error('Failed to update coupon.');
      }
    } catch (error) {
      console.error('Error while updating coupon:', error);
    }
  };
  
  onMounted(() => {
    fetchDiscountCoupons();
  });
  </script>
  
  <style scoped>
  /* Add some styles for the edit form */
  .edit-button{
    margin-right: 10px;
  }
  .edit-form {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f5f5f5;
    text-align: center;
  }
  
  .edit-form h2 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #333;
  }
  
  .update-button {
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
  
  .update-button:hover {
    background-color: #0056b3;
  }
  
  /* Adjust the styles for the coupon name and discount */
  .coupon-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 10px;
  }
  
  .coupon-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #333;
  }
  
  .coupon-desconto {
    font-size: 16px;
    color: #555;
  }
  </style>
  
  
  <style scoped>
  .tituloempresa {
  font-size: 60px;
  font-weight: 700;
  text-align: center !important;
  display: flex;
  justify-content: center;
}

.textoempresa {
  font-size: 24px; /* Adjust font size as needed */
  font-weight: 700;
  text-align: center !important;
  display: flex;
  justify-content: center;
}
  .business-text{
    margin: 0px 30px;
    padding: 0;
    font-family: 'ZZYZX', sans-serif;
    box-sizing: border-box;
    flex-direction: column;

    }
    @font-face {
    font-family: ZZYZX;
    src: url(../components/fonts/ZZYZX.TTF);
    }
    .screen {
        display: flex;
        justify-content: space-between;
        align-items: flex-start; /* Align items to the top */
        position: relative;
        position: absolute; /* Make it a positioning context for pseudo-element */
    }

/* Add a pseudo-element to create the background layer */
    .screen::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1080px;
        background: url('../components/imagens/cool-background.png'); /* Adjust background color and opacity */
        z-index: -1; /* Place it below other content */
        }
  
  .page-title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }
  
  .add {
    display: flex;
    text-align: center;
    justify-content: center;
  }
  
  .botao {
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 8px 20px;
    background: linear-gradient(315deg, #00ccff, #d400d4);
    border-radius: 20px;
    margin-top: 30px;
    text-decoration: none;
    color: #fff;
    width: 200px;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: 0.5s;
  }
  
  .botao:hover {
    background: linear-gradient(315deg, #00ccff, #d400d4);
    transform: scale(1.05);
    transition: 0.5s;
  }
  
  .coupon-list {
    max-width: 70%; /* Adjust this value to your preference */
    width: 30%; /* Make the coupon list take full width */
    height: 100%;
    padding: px;
    margin-left: 90px;
  }
  
  .coupon-item {
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.2s;
  }
  
  .coupon-item:hover {
    background-color: #e0e0e0;
  }
  
  .coupon-info {
    display: flex;
    flex-direction: column;
  }
  
  .coupon-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .business-text {
    max-width: 40%; /* Adjust this value to your preference */
    width: 100%; /* Make the business text take full width */
    padding: 20px;
    font-weight: 700;
    text-align: center !important;
    display: flex;
    justify-content: center;
    margin-right: 40px;
  }
  
  .business-text p {
    font-size: 16px;
    line-height: 1.5;
    text-align: justify;
  }
  </style>
  