<template>
  <div :class="status === 0 ? 'log-ativo' : 'log-inativo'" class="coluna-larg-12 coluna-small-6 col-6">
    <div class="foto-log" :style="{'background-image': `url(${getBase64Src(foto)})`}" />
    <div class="container-info">
      <p class="info">Raça:</p>
      <p class="info">{{raca}}</p>
    </div>
    <div class="container-info">
      <p class="info">Inicial:</p>
      <p class="info">{{lance_minimo}}</p>
    </div>
    <div class="container-info">
      <p class="info">Ativo até:</p>
      <p class="info">{{formatarData(data)}}</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import mixin from '../../mixins';

export default {
  name: 'LogLeilaoAtivo',
  props: ['raca', 'data', 'lance_minimo', 'status', 'foto'],
  mixins: [mixin],
  methods: {
    formatarData(data) {
      return moment(data).format('DD/MM/YYYY');
    },
  },
};
</script>

<style scoped>
.log-ativo {
  background-color: green;
  display: flex;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.log-inativo {
  background-color: darkred;
  display: flex;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}

.info {
  color: white;
  font-weight: bold;
  font-size: 80%;
}

.foto-log {
  background-origin: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 120px;
  height: 80px;
  border-radius: 5px;
}

.container-info {
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media only screen and (max-width: 600px) {
  .log-ativo,
  .log-inativo {
    flex-direction: column;
    margin: 5px auto;
  }
}
</style>
