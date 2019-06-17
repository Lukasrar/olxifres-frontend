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
        <a>R${{lanceMinimo}}</a>
      </div>
      <div class="ultimos_leiloes_nome">
        <a href="#" :title="racaAnimal">{{ racaAnimal }}</a>
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
    racaAnimal: {
      type: String,
      default() {
        return '';
      },
    },
    lanceMinimo:{
      type: Number,
      default(){
        return null
      }
    }
  },
};
</script>

<style>
</style>
