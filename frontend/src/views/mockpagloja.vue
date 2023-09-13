<template>
    <div class ='tudo'>
        <h1 class="tittle">BEM VINDO A SUA LOJA</h1>
        <div class="infos">
            <div class="infos2">Renda Anual
                <img class ='fotos' src="../components/imagens/minha foto.jpg" alt="">
                <img class ='fotos' src="../components/imagens/minha foto.jpg" alt="">
            </div>
            <div class="infos2">Produtos vendidos
                <div class="fotos2">
                    <img class="moldura" src="../components/imagens/lmao.png" alt="" >
                    <img class="moldura" src="../components/imagens/whey.png" alt="" >
                    <img class="moldura2" src="../components/imagens/pc gamer.png" alt="">
                    <img class="moldura2" src="../components/imagens/karambit.png" alt="">
                    <img class='moldura3' src="../components/imagens/tbroq.webp" alt="">
                    <img class="moldura3" src="../components/imagens/tbroq.webp" alt="">
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
</script>

<style scoped>

.tudo{
    width: 100%;
    height: 1080px;
}

.tittle{
    text-align: center;
    font-weight: bold;
    font-size: xx-large;
}

.infos{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}

.infos2{
    width: 500px;
    background-color: aqua;
    margin-left: 100px;
    height: 800px;
    font-weight: bold;
    margin-bottom: 15px;
    font-size: x-large;
    color: #222;
    padding: 5px 10px;
    text-align: center;
}
.fotos{
    margin: auto;
    margin-top: 50px;
    align-items: center;
    border: transparent;
    border-radius: 10px;
    width: 300px;
}

.fotos2{
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    margin-top: 80px;
}

.moldura{
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 10px;
    width: 200px;
  
}

.moldura2{
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 10px;
    width: 200px;
 
}

.moldura3{
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 10px;
    width: 200px;
 
}
</style>