<template>
  <div class="ultimos_leiloes">
    <div class="container">
      <div class="row">
        <div class="coluna-small-12 coluna-med-12 section_title_container">
          <h2 class="title_section">Últimos leilões</h2>
        </div>
      </div>
      <div class="row">
        <Leilao
          v-for="leilao in leiloes"
          :key="leilao.id_leilao"
          :foto="leilao.foto"
          :idLeilao="leilao.id_leilao"
          :racaAnimal="leilao.raca"
          :lanceMinimo='leilao.lance_minimo'
        />
      </div>
    </div>
  </div>
</template>

<script>
import Leilao from './Leilao';

export default {
  name: 'UltimosLeiloes',
  components: {
    Leilao,
  },
  data() {
    return {
      leiloes: [],
    };
  },
  methods: {
    async buscarLeiloes() {
      const params = {
        limit: 3,
      };

      this.leiloes = (await this.$api.get('/leiloes', { params })).data.data;
    },
  },
  async mounted() {
    await this.buscarLeiloes();
  },
};
</script>

<style>
</style>
