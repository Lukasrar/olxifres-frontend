<template>
  <div class="ultimos_leiloes">
    <div class="container">
      <div class="row">
        <div class="coluna-small-12 coluna-med-12 section_title_container">
          <h3 class="title_section">Leilões em progresso</h3>
        </div>
      </div>
      <div class="row" style="margin-top: 40px">
        <Leilao/>
        <Leilao/>
        <Leilao/>
        <Leilao/>
        <Leilao/>
        <Leilao/>
      </div>
    </div>
  </div>
</template>

<script>
import Leilao from "./Leilao";
export default {
  name: "LeiloesAtivo",
  components: {
    Leilao
  }
};
</script>

<style>
</style>
