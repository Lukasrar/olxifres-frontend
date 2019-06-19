<template>
  <section>
    <article>
      <HeaderInterno/>
      <div class="container">
        <div class="row">
          <div class="coluna-larg-10 section_title_container">
            <h2 class="title_section">Leilões Ativos</h2>
          </div>
          <div class="coluna-larg-2" style="margin-top: 25px;padding-left: 130px">
            <input type="radio" name="filtrar_cat" id="filtro">
            <label for="filtro_cat" class="filtro">Filtrar</label>
            <!--
                        <ul>
                            <li>Raça</li>
                            <li>Cor</li>
                            <li>Preço</li>
                            <li>Idade</li>
                        </ul>
            -->

            <!--
                        <select name="" id="">
                            <option value="raca">Raça</option>
                            <option value="preco">Preço</option>
                            <option value="peso">Peso</option>
                            <option value="idade">Idade</option>
                        </select>
            -->
          </div>
        </div>
        <div class="container">
          <div class="row container-lista-leilao">
            <Leilao v-for="leilao in leiloes" :key="leilao.id_leilao" :racaAnimal="leilao.raca" :lanceMinimo="leilao.lance_minimo" :idLeilao="leilao.id_leilao"/>
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
      leiloes: []
    };
  },
  async mounted() {
    this.leiloes = (await this.$api.get('/leiloes')).data.data;
    console.log(this.leiloes);
  },
};
</script>

<style>
</style>
