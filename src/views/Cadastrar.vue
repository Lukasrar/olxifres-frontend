<template>
  <form class="form login login-screen" @submit.prevent="registrar" novalidate>
    <vue-headful
      title="Cadastro de usuário | Olxifres"
      description="Página disponível para cadastro de um novo usuário no sistema de leilões."
    />
    <div class="animated fadeInLeft login-form" id="firstForm">
      <h1 class="app-title">Cadastrar</h1>

      <div class="control-group" :class="{ 'error' : !$v.nome.required && $v.$error}">
        <label for="name" class="label-form">Nome*</label>
        <input type="text" class="login-field" placeholder="Informe seu nome" v-model="nome" />
        <div class="error-message">Por favor, informe o seu nome completo no campo acima.</div>
      </div>

      <div class="control-group" :class="{ 'error' : !$v.email.required && $v.$error}">
        <label for="email" class="label-form">E-mail*</label>
        <input
          type="email"
          class="login-field"
          placeholder="Informe seu e-mail"
          v-model="email"
          oninvalid="this.setCustomValidity('Você deve informar um e-mail válido no formato: usuario@email.com')"
          oninput="this.setCustomValidity('')"
        />
        <div class="error-message">
          Por favor, informe um email válido no campo acima.
          <br />Formato: usuario@email.com
        </div>
      </div>

      <div class="control-group" :class="{ 'error' : !$v.senha.required && $v.$error}">
        <label for="senha" class="label-form">Senha*</label>
        <input type="password" class="login-field" placeholder="Informe sua senha" v-model="senha" />
        <div class="error-message">Por favor, informe sua senha no campo acima.</div>
      </div>

      <div class="control-group" :class="{ 'error' : !$v.confSenha.required && $v.$error}">
        <label for="conf-senha" class="label-form">Confirmar senha*</label>
        <input type="password" class="login-field" placeholder="Confirme senha" v-model="confSenha" />
        <div class="error-message">Por favor, informe sua senha no campo acima.</div>
      </div>

      <input type="submit" class="btn" value="Cadastrar" />
      <span class="legenda-form">
        <i class="fa fa-fw fa-asterisk"></i> Campos obrigatórios
      </span>
      <div class="links">
        <a class="login-link" @click="$router.push({ name: 'login' })">Já possui conta?</a>
      </div>
    </div>
  </form>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators';
import { get} from 'lodash'

export default {
  name: 'Cadastrar',
  components: {},
  data() {
    return {
      errouRegistro: false,
      nome: '',
      email: '',
      senha: '',
      confSenha: '',
    };
  },
  validations: {
    nome: {
      required,
    },
    email: {
      required,
    },
    senha: {
      required,
    },
    confSenha: {
      required,
    },
  },
  methods: {
    async registrar() {
      this.$v.$touch();

      if (this.$v.$error) return;

      try {
        const usuario = {
          nome: this.nome,
          email: this.email,
          senha: this.senha,
        };

        await this.$api.post('/usuario', usuario);
        this.$noty.success('Usuário cadastrado com sucesso!')

      } catch(err) {     
        const mensagem = get(err, 'response.data.error', 'Ocorreu um erro ao cadastrar o usuário.')
        this.$noty.error(mensagem)
      }
    },
  },
};
</script>
<style>
</style>
