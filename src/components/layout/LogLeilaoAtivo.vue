<template>
  <div class="log">
    <div class="info">
      <img src="../../assets/img/banner_1.jpg" class="foto-log">
    </div>
    <div class="container-info">
      <p class="info">Raça:</p>
      <p class="info">seila</p>
    </div>
    <div class="container-info">
      <p class="info">Idade:</p>
      <p class="info">seila</p>
    </div>
    <div class="container-info">
      <p class="info">Cor:</p>
      <p class="info">seila</p>
    </div>
    <div class="container-info">
      <p class="info">Lance:</p>
      <p class="info">seila</p>
    </div>
    <div class="container-info">
      <p class="info">Inicial:</p>
      <p class="info">seila</p>
    </div>
    <div class="container-info">
      <p class="info">Ativo até:</p>
      <p class="info">seila</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogLeilaoAtivo',
};
</script>

<style scoped>
.log {
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
.info{
    color: white;
}

.foto-log {
  width: 100px;
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
