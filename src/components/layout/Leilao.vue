<template>
  <div
    class="coluna-small-12 coluna-med-4"
    @click="$router.push({name:'leilao', params: { idLeilao}})"
  >
    <div
      class="ultimos_leiloes_item align-items-center"
      :style="{'background-image': `url(${getBase64Src(foto)})`}"
    >
      <span role="img" :aria-label="'Imagem de um animal da raça' + racaAnimal" style="display: none">  </span>
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
import mixin from '../../mixins'

export default {
  name: 'Leilao',
  image: './banner_1.jpg',
  mixins: [mixin],
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
    lanceMinimo: {
      type: Number,
      default() {
        return null;
      },
    },
    foto: {
      type: String,
      default() {
        return '';
      },
    },
  },
};
</script>

<style>
</style>
