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
  border: 2px solid tomato;
  border-radius: 4px;
  margin: 10px 0;
  padding: 5px;

}

.login_mensagem-erro * {
  color: #fff;
}

.login_mensagem-erro_title {
  color: tomato;
}
</style>
