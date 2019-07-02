<template>
  <div class="login_mensagem-erro">
    <h3 class="login_mensagem-erro_title">{{tituloErro}}</h3>
    <p>{{sugestao}}</p>
  </div>
</template>

<script>
export default {
  name: 'ErrorBox',
  props: ['tituloErro', 'sugestao'],
};
</script>

<style scoped>
.login_mensagem-erro {
  box-sizing: border-box;
  width: 320px;
  border: 2px solid rgb(255, 38, 0);
  border-radius: 2px;
  margin: 15px 0px;
  padding: 10px;
  line-height: 12px;
  text-align: justify;
}

.login_mensagem-erro * {
  color: rgb(0, 0, 0);
  line-height: 17px;
}

.login_mensagem-erro_title {
  color: rgb(255, 38, 0);
  margin: 0px 0px 15px;
  text-align: center;
}
</style>
