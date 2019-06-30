<template>
  <section>
    <article>
      <HeaderInterno/>
      <div class="container">
        <div class="row">
          <div class="coluna-larg-10 section_title_container">
            <h2 class="title_section">Leilões Ativos</h2>
          </div>
        </div>
        <div class="container">
          <div class="row container-lista-leilao">
            <Leilao
              v-for="leilao in leiloes"
              :key="leilao.id_leilao"
              :racaAnimal="leilao.raca"
              :lanceMinimo="leilao.lance_minimo"
              :idLeilao="leilao.id_leilao"
              :foto="leilao.foto"
            />
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import Leilao from '../components/layout/Leilao';
import HeaderInterno from '../components/layout/HeaderInterno';

export default {
  name: 'Leiloes',
  components: {
    Leilao,
    HeaderInterno,
  },
  data() {
    return {
      view: 'Crie seu próprio leilão',
      leiloes: [],
    };
  },
  async mounted() {
    const params = {
      status : 0
    };

    this.leiloes = (await this.$api.get('/leiloes', { params})).data.data;
    console.log(this.leiloes);
  },
};
</script>

<style>
</style>
