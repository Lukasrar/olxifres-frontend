<template>
  <div class="main_banner" title="Banner principal">
    <div class="container height_100">
      <div class="main_banner_content_container height_100">
        <div class="main_banner_content">
          <h4 class="sec_main_title">Leilão de gado online - temporada 2/2019</h4>
          <h1 class="main_title">O comércio agropecuário a um clique de distância</h1>
          <div class="ver_mais_btn">
            <router-link to="/">Explorar</router-link>
            <router-link to="/criar-leilao" class="criar_leilao">Crie seu próprio leilão</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style>
</style>
