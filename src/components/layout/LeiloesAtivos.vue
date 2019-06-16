<template>
  <div class="ultimos_leiloes">
    <div class="container">
      <div class="row">
        <div class="coluna-small-12 coluna-med-12 section_title_container">
          <h3 class="title_section">Leilões em progresso</h3>
        </div>
      </div>
      <div class="row leiloes-ativos">
        <Leilao v-for="leilao in leiloes" :key="leilao.id_leilao" :idLeilao="leilao.id_leilao"/>
      </div>
    </div>
  </div>
</template>

<script>
import Leilao from './Leilao';
export default {
  name: 'LeiloesAtivo',
  components: {
    Leilao,
  },
  data() {
    return {
      leiloes: [],
    };
  },
  methods: {
    async buscarLeiloesAtivos() {
      const params = {
        status: 1,
        limit: 6,
      };
      this.leiloes = (await this.$api.get('/leiloes', { params })).data.data;
    },
  },
  async mounted() {
    await this.buscarLeiloesAtivos();
  },
};
</script>

<style>
.leiloes-ativos {
  margin-top: 40px;
  margin-bottom: 50px;
}
</style>
