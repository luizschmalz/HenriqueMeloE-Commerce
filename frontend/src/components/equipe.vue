<script setup>
</script>

<template>
    <div class="posicao">
        <div class="title-container">
            <h1 class="title">Sobre nós</h1>
        </div>
        <div class="containerequipe">
            <!-- Team Member 1 -->
            <div class="integrante">
                <img src="../components/imagens/minha foto.jpg" alt="">
                <div class="info-container">
                    <h1>Ian Gabriel<br><span>Braga Trinta</span></h1>
                    <a href="https://www.instagram.com/ianbraga_/" target="_blank">Sobre mim</a>
                </div>
            </div>
        </div>
        <div class="containerequipe">
                    <!-- Team Member 1 -->
                    <div class="integrante">
                        <img src="../components/imagens/pepito.jpg" alt="">
                        <div class="info-container">
                        <h1>Pedro Calheiros</h1>
                        <a href="https://www.instagram.com/pedrocalheiross" target="_blank">Sobre mim</a>
                        </div>
                    </div>
                </div>
        <div class="containerequipe">
                    <!-- Team Member 1 -->
                    <div class="integrante">
                        <img src="../components/imagens/luiz.jpg" alt="">
                        <div class="info-container">
                        <h1>Luiz Eduardo<br><span>Schmalz</span></h1>
                        <a href="https://www.instagram.com/luizschmalz/" target="_blank">Sobre mim</a>
                    </div>
                    </div>
                </div>
        <div class="containerequipe">
                    <!-- Team Member 1 -->
                    <div class="integrante">
                        <img src="../components/imagens/mast.jpg" alt="">
                        <div class="info-container">
                        <h1>Matheus Braga</h1>
                        <a href="https://www.instagram.com/mastbraga/" target="_blank">Sobre mim</a>
                    </div>
                    </div>
                </div>
        <div class="containerequipe">
                    <!-- Team Member 1 -->
                    <div class="integrante">
                        <img src="../components/imagens/brenda.jpg" alt="">
                        <div class="info-container">
                        <h1>Brenda<br><span>Guerra</span></h1>
                        <a href="https://www.instagram.com/brenda.guerra_/" target="_blank">Sobre mim</a>
                    </div>
                    </div>
                </div>
        <div class="textoequipe">    
            <p>Essa é a nossa equipe, somos o grupo que se juntou para fazer esse site, espero que gostem!</p>
        </div>
    </div>
</template>

  
<style scoped>

.textoequipe{
    color: #000000;
    font-size: 32px;
    text-align: center;
    margin-top: 50px;
    padding-left: 30px;
}
.title-container {
  background: transparent; /* Background color of the black container */
  padding: 20px; /* Adjust padding as needed */
  text-align: center; /* Center the title horizontally */
}

.title {
  color: #000000;
  font-size: 80px; /* Adjust font size as needed */
}
.posicao {
  display: flex;
  flex-direction: column; /* Display children vertically */
  align-items: center; /* Center items horizontally */
  justify-content: center;
  min-height: 100vh;
  background: url('../components/imagens/cool-background.png');
  top: 500px;
  margin-top: 50px;
  position: static;
}
.integrante{
    flex: 1;
    position: absolute;
    inset: 4px;
    border: 10px transparent;
    z-index: 5;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.integrante h1{
    text-align: center;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
}
.integrante a span{
    font-size: 0.8em;
    font-weight: 400;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #fff;
}
.integrante a{
    
    display: inline-block;
    padding: 8px 20px;
    background: linear-gradient(315deg, #00ccff, #d400d4);
    border-radius: 20px;
    margin-top: 10px;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: 0.5s;
}

.integrante img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s;
    pointer-events: none;
}
.containerequipe:hover .integrante img{
    opacity: 0;
}
.containerequipe{
    display: flex;
    position: relative;
    width: 200px;
    height: 200px;
    background-color: transparent;
    border-radius: 50%;
    overflow: hidden;
}
.containerequipe::before{
    display: flex;
    content: '';
    position: absolute;
    inset: -5px 70px;
    background: linear-gradient(315deg, #00ccff, #d400d4);
    transition: 0.5s;
    animation: animate 4s linear infinite;
}
.containerequipe:hover::before{
    inset: -20px 0px;
    display: flex;
}
@keyframes animate{
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.containerequipe::after{
    display: flex;
    content: '';
    position: absolute;
    inset: 6px;
    background: transparent;
    border-radius: 50%;
    z-index: 1;
}
.integrante .info-container {
    display: none;
}

/* Show the info-container on hover */
.integrante:hover .info-container {
    display: block;
}
    


</style>
  
  