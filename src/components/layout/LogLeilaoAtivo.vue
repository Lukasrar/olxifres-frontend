<template>
  <div :class="status === 0 ? 'log-ativo' : 'log-inativo'">
    <div class="info">
      <img src="../../assets/img/banner_1.jpg" class="foto-log">
    </div>
    <div class="container-info">
      <p class="info">Raça:</p>
      <p class="info">{{raca}}</p>
    </div>
    <div class="container-info">
      <p class="info">Cor:</p>
      <p class="info">{{cor}}</p>
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

export default {
  name: 'LogLeilaoAtivo',
  props: ['raca', 'cor', 'data', 'lance_minimo', 'status'],
  methods: {
    formatarData(data) {
      return moment(data).format('DD/MM/YYYY');
    },
  },
};
</script>

<style scoped>
.log-ativo {
  width: 100%;
  background-color: green;
  display: flex;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
}

.log-inativo {
  background-color: darkred;
  width: 100%;
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
}

.foto-log {
  width: 80px;
  border-radius: 5px;
}

.container-info {
  border-right: 1px solid gray;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
