<template>
  <div>
    <HeaderInterno v-bind:view="view"/>

    <div class="container-registro">
      <form class="form-registro-animal">
        <div class="input-group">
          <label for="raca" class="label-info">Raça:</label>
          <input type="text" id="raca" v-model="raca" class="input-info">
        </div>
        <div class="input-group">
          <label for="nascimento" class="label-info">Data de nascimento do animal:</label>
          <p class="help">Informe os dados da seguinte forma: mes/dia/ano</p>
          <input type="date" id="nascimento" v-model="nascimento" class="input-info">
        </div>
        <div class="input-group">
          <label for="cor" class="label-info">Cor:</label>
          <p class="help">Informe a cor predominante do animal.</p>
          <input type="text" id="cor" v-model="cor" class="input-info">
        </div>
        <div class="input-group">
          <label for="peso" class="label-info">Peso:</label>
          <p class="help">Informe o peso em kg.</p>
          <input type="number" id="peso" v-model="peso" class="input-info">
        </div>
        <div class="input-group">
          <label for="dimensoes" class="label-info">Dimensões:</label>
          <p class="help">Informe as dimensões do animal em centimentros.</p>
          <input
            type="number"
            id="dimensoes"
            v-model="comprimento"
            class="input-info"
            placeholder="Comprimento"
          >
          <input type="number" v-model="altura" class="input-info" placeholder="Altura">
          <input type="number" v-model="largura" class="input-info" placeholder="Largura">
        </div>
        <div class="input-group">
          <label for="lance" class="label-info">Lance Inicial:</label>
          <p class="help">Informe o valor inicial do leilão.</p>
          <input type="number" id="lance" v-model="lance" class="input-info">
        </div>
        <div class="input-group">
          <label for="tempo" class="label-info">Tempo de duração do leilão:</label>
          <p class="help">Informe o tempo de duração do leilão em minutos. Ex 120.</p>
          <input type="number" id="lance" v-model="tempo" class="input-info">
        </div>
      </form>

      <div class="container-logs-leiloes">a</div>
    </div>
  </div>
</template>

<script>
import HeaderInterno from '../components/layout/HeaderInterno';

export default {
  name: 'CriarLeilao',
  components: {
    HeaderInterno,
  },
  data() {
    return {
      view: 'Veja os leilões ativos',
      raca: '',
      nascimento: '',
      cor: '',
      peso: '',
      dimensoes: '',
      lance: '',
      tempo,
    };
  },
};
</script>

<style scoped>
.container-registro {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 50px 0 50px 0;
}

.form-registro-animal {
  width: 50vw;
  margin: 20px;
  flex-direction: column;
}

.container-logs-leiloes {
  width: 50vw;
  margin: 20px;
}

.input-group {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
}
.label-info {
  color: green;
  font-weight: bold;
}
.input-info {
  width: 100%;
  border: none;
  border-bottom: 2px solid green;
  margin-top: 5px;
}
</style>
