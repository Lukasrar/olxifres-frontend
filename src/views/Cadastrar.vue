<template>
  <form class="form login login-screen">
    <div v-if="etapa" class="animated fadeInLeft login-form" id="firstForm">
      <div class="app-title">
        <h1>REGISTRO</h1>
      </div>

      <div class="control-group">
        <label for="name" class="label-form">Nome</label>
        <input type="text" class="login-field" placeholder="Informe seu nome" v-model="nome">
      </div>

      <div class="control-group">
        <label for="senha" class="label-form">Senha</label>
        <input type="password" class="login-field" placeholder="Informe sua senha" v-model="senha">
      </div>

      <div class="control-group">
        <label for="conf-senha" class="label-form">Confirmar senha</label>
        <input type="password" class="login-field" placeholder="Confirme senha" v-model="confSenha">
      </div>

      <div class="control-group">
        <label for="email" class="label-form">E-mail</label>
        <input type="email" class="login-field" placeholder="Informe seu e-mail" v-model="email">
      </div>

      <div class="control-group">
        <label for="cpf" class="label-form">Cpf</label>
        <input type="text" class="login-field" placeholder="Informe seu cpf" v-model="cpf">
      </div>
      <div class="control-group">
        <label for="telefone" class="label-form">Telefone</label>
        <input
          type="text"
          class="login-field"
          placeholder="Informe seu numero de telefone"
          v-model="telefone"
        >
      </div>

      <input type="button" class="btn" value="Continuar registro" @click="etapa = !etapa">
      <div class="links">
        <a class="login-link" href="login.html">Já possui conta?</a>
      </div>
    </div>

    <div v-if="!etapa" class="animated fadeInLeft login-form" id="secondForm" action="/registrar">
      <div class="app-title">
        <h1>REGISTRO</h1>
      </div>
      <div class="control-group">
        <label for="cidade" class="label-form">Cidade</label>
        <input type="text" class="login-field" placeholder="Informe a cidade" v-model="cidade">
      </div>

      <div class="control-group">
        <label for="estado" class="label-form">Estado</label>
        <input type="text" class="login-field" placeholder="Informe o estado" v-model="estado">
      </div>

      <div class="control-group">
        <label for="Logradouro" class="label-form">Logradouro</label>
        <input type="text" class="login-field" placeholder="Logradouro" v-model="logradouro">
      </div>

      <div class="control-group">
        <label for="bairro" class="label-form">Bairro</label>
        <input type="text" class="login-field" placeholder="Informe seu bairro" v-model="bairro">
      </div>

      <div class="control-group">
        <label for="numero" class="label-form">Numero</label>
        <input type="number" class="login-field" placeholder="Informe o numero" v-model="numero">
      </div>

      <div class="control-group">
        <label for="cep" class="label-form">Cep</label>
        <input type="text" class="login-field" placeholder="Informe o cep" v-model="cep">
      </div>

      <input type="button" class="btn" value="Voltar" @click="etapa = !etapa">
      <input type="submit" class="btn" value="Completar registro">

      <div class="links">
        <a class="login-link" href="login.html">Já possui conta?</a>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Cadastrar",
  data() {
    return {
      etapa: true,
      nome: "",
      senha: "",
      confSenha: "",
      email: "",
      cpf: "",
      telefone: "",
      cidade: "",
      estado: "",
      logradouro: "",
      bairro: "",
      numero: "",
      cpf: "",
      cep: ""
    };
  }
};
</script>

<style scoped>
.form {
  background-image: url(../assets/img/bg.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  font-family: Arial;
}

.login-screen {
  margin-left: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.app-title {
  margin-top: 15px;
  text-align: center;
  color: white;
}

.login-form {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.label-form {
  text-align: left !important;
  color: #ffffff;
  margin-bottom: 5px;
}

.control-group {
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

input {
  text-align: left;
  background-color: #ecf0f1;
  border: 2px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 200;
  padding: 10px 5px;
  width: 320px;
  transition: border 0.5s;
}

input::placeholder {
  color: #078a06;
  font-weight: 500;
}

input:focus {
  border: 2px solid #078a06;
  box-shadow: none;
}

.btn {
  text-align: center;
  border: 2px solid transparent;
  background: transparent;
  border: 2px solid #f6fdf6;
  color: #ffffff;
  font-size: 16px;
  line-height: 25px;
  padding: 10px 0;
  text-decoration: none;
  text-shadow: none;
  border-radius: 3px;
  box-shadow: none;
  transition: 0.25s;
  display: block;
  width: 320px;
  margin: 2px auto;
}

.btn:hover {
  background-color: #078a06;
}

.links {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login-link {
  font-size: 12px;
  color: #ffffff;
  display: block;
  margin: 12px;
}

.overlay {
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
}
</style>
