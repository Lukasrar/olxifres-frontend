<template>
  <section>
    <article>
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
            <LeilaoListagem/>
            <LeilaoListagem/>
            <LeilaoListagem/>
            <LeilaoListagem/>
            <LeilaoListagem/>
            <LeilaoListagem/>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import LeilaoListagem from '../components/layout/LeilaoListagem';

export default {
  name: 'Leiloes',
  components: {
    LeilaoListagem,
  },
  async mounted() {
    const leiloes = (await this.$api.get('/leiloes')).data.data;
    console.log(leiloes);
  },
};
</script>

<style>
</style>
