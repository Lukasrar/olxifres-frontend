<template>
  <div class="login">
    <div class="login-screen">
      <div class="app-title">
        <h1 class="app-title">LOGIN</h1>
      </div>
      <form class="login-form" @submit.prevent="validaForm">
        <div v-if="errouLogin" class="login_mensagem-erro">
          <h3 class="login_mensagem-erro_title">Usuário ou senha incorreto!</h3>
          <p>Houve um erro ao realizar seu login, por gentileza confirme suas informações e tente novamente</p>
        </div>
        <div class="control-group">
          <label class="label-form">E-mail</label>
          <input v-model="email" type="email" class="login-field" placeholder="Informe seu e-mail">
          <transition name="slide-fade">
            <p class="help-log" v-if="emailInvalido">Favor, insira um e-mail válido.</p>
          </transition>
        </div>
        <div class="control-group">
          <label for="login-pass" class="label-form">Senha</label>
          <input
            v-model="senha"
            type="password"
            class="login-field"
            placeholder="Informe sua senha"
          >
          <transition name="slide-fade">
            <p class="help-log" v-if="senhaInvalida">Favor, insira uma senha válida.</p>
          </transition>
        </div>
        <!-- <input type="submit" class="btn" value="Login"> -->
        <input type="submit" class="btn" value="Login">
        <div class="links">
          <button class="login-link" @click="$router.push({ name: 'cadastrar' })">Não possui conta?</button>
          <button
            class="login-link"
            @click="$router.push({ name: 'esqueci-senha' })"
          >Esqueci minha senha</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { setTimeout } from 'timers';

export default {
  name: 'Login',
  data() {
    return {
      email: 'luiz.fernando@hotmail.com',
      senha: 'luiz123',
      errouLogin: false,
      emailInvalido: false,
      senhaInvalida: false,
    };
  },
  methods: {
    validaForm() {
      if (this.email.trim() == '') {
        this.emailInvalido = true;

        setTimeout(() => {
          this.emailInvalido = false;
        }, 2000);
      } else if (this.senha.trim() == '') {
        this.senhaInvalida = true;

        setTimeout(() => {
          this.senhaInvalida = false;
        }, 2000);
      } else {
        this.fazerLogin();
      }
    },

    ...mapActions(['setUsuario']),
    async fazerLogin() {
      const { email, senha } = this;
      this.errouLogin = false;
      try {
        const usuario = (await this.$api.post('/login', { email, senha })).data.data[0];
        this.setUsuario(usuario);
        this.$router.push({name : 'leiloes'})
      } catch (err) {
        const informacoesIncorretas = !!err.response.data.error;
        this.errouLogin = true;
      }
    },
  },
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
  color: #333333;
}

.login_mensagem-erro_title {
  color: #c40000;
}
</style>
