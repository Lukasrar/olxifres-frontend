<template>
  <div
    class="coluna-small-12 coluna-med-4"
    @click="$router.push({name:'leilao', params: { idLeilao}})"
  >
    <div
      class="ultimos_leiloes_item align-items-center"
      style="background-image:url(../../assets/img/banner_1.jpg)"
    >
      <div class="ultimos_leiloes_estado">
        <a>MG</a>
      </div>
      <div class="ultimos_leiloes_nome">
        <a href="#">Tostão negro</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Leilao',
  image: './banner_1.jpg',
  props: {
    idLeilao: {
      type: Number,
      default() {
        return null;
      },
    },
  },
};
</script>

<style>
</style>
