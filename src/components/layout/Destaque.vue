<template>
  <div class="destaque_semanal">
    <div class="container">
      <div class="row">
        <div class="coluna-small-12 coluna-med-12 section_title_container">
          <h2 class="title_section">Oque você procura?</h2>
        </div>
      </div>
      <div class="row">
        <div class="coluna-small-12 coluna-med-4">
          <div class="card-home">
            <h3> Anunciar gados </h3>
            <p> Vender online nunca foi tão fácil! Na <b>OLXifres</b> milhares de animais são vendidos todos os dias. <b>Anuncie</b> e realize tudo o que quiser. Desapega, desapega! 
                Basta acessar a sua conta e seguir os próximos passos. Se ainda não tiver uma conta na OLXifres, basta <a href="">criar uma agora</a>! :) </p>
            <router-link to="/criar-leilao" class="btn-card"> Anunciar agora </router-link>
          </div>
        </div>
        <div class="coluna-small-12 coluna-med-4">
          <div class="card-home">
            <h3> Comprar gados </h3>
            <p> Comprar online nunca foi tão fácil! Na <b>OLXifres</b> milhares de animais são vendidos todos os dias. <b>Compre</b> e realize tudo o que quiser.
                Basta escolher o animal que mais te agrada e realizar a compra de maneira simples, fácil e rápida!</p>
            <router-link to="/criar-leilao" class="btn-card"> Comprar agora </router-link>
          </div>
        </div>
        <div class="coluna-small-12 coluna-med-4">
          <div class="card-home">
            <h3> Conhecer mais </h3>
            <p> <b>Conheça a história</b> por trás do mercado de gados inovado por parte da <b>OLXifres</b>, onde milhares de animais são vendidos todos os dias.
              Entre em contato para mais informações, estaremos a disposição para atendê-lo. </p>
            <router-link to="/about" class="btn-card"> Conhecer a Olxifres </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DestaqueDaSemana',
};
</script>

<style>
</style>
