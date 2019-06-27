<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="content_page">
        <div class="coluna-small-12 coluna-larg-6">
          <form>
            <h2
              class="title_section"
            >Olá {{usuario.nome}}, aqui você pode editar algumas informações da sua conta.</h2>
            <p
              class="help bolder"
              v-if="!editar"
            >Clique no botão abaixo para editar suas informações.</p>
            <p class="alert bolder" v-if="editar">Somente os campos com borda verde são editáveis!</p>
            <button @click="editar = !editar" v-if="!editar" class="btn">Editar informações</button>
            <div class="input-group">
              <label for="saldo" class="label-info">Saldo:</label>
              <span>{{saldo}}</span>
            </div>
            <div class="input-group">
              <label for="email" class="label-info">Email:</label>
              <input
                class="input-info"
                type="text"
                id="email"
                :value="usuario.email"
                :disabled="!editar"
                :class="{'editavel': editar}"
              >
            </div>
            <div class="input-group">
              <label for="senha" class="label-info">Senha:</label>
              <input
                class="input-info"
                type="text"
                id="senha"
                :value="senha"
                :disabled="!editar"
                :class="{'editavel': editar}"
              >
            </div>
            <div class="input-group">
              <label for="cpf" class="label-info">CPF:</label>
              <span>{{usuario.cpf}}</span>
            </div>
            <div class="input-group">
              <label for="telefone" class="label-info">Telefone:</label>
              <input
                class="input-info"
                type="text"
                id="telefone"
                :value="usuario.telefone"
                :disabled="!editar"
                :class="{'editavel': editar}"
              >
            </div>
            <div class="input-group">
              <label for="cidade" class="label-info">Cidade:</label>
              <input
                class="input-info"
                type="text"
                id="cidade"
                :value="usuario.cidade"
                :disabled="!editar"
                :class="{'editavel': editar}"
              >
            </div>
            <div class="input-group">
              <label for="estado" class="label-info">Estado:</label>
              <input
                class="input-info"
                type="text"
                id="estado"
                :value="usuario.estado"
                :disabled="!editar"
                :class="{'editavel': editar}"
              >
            </div>
            <div class="input-group">
              <label for="logradouro" class="label-info">Logradouro:</label>
              <input
                class="input-info"
                type="text"
                id="logradouro"
                :value="usuario.logradouro"
                :disabled="!editar"
                :class="{'editavel': editar}"
              >
            </div>
            <div class="input-group">
              <label for="bairro" class="label-info">Bairro:</label>
              <input
                class="input-info"
                type="text"
                id="bairro"
                :value="usuario.bairro"
                :disabled="!editar"
                :class="{'editavel': editar}"
              >
            </div>
            <div class="input-group">
              <label for="numero" class="label-info">Numero:</label>
              <input
                class="input-info"
                type="text"
                id="numero"
                :value="usuario.numero"
                :disabled="!editar"
                :class="{'editavel': editar}"
              >
            </div>
            <div class="input-group">
              <label for="cep" class="label-info">CEP:</label>
              <input
                class="input-info"
                type="text"
                id="cep"
                :value="usuario.cep"
                :disabled="!editar"
                :class="{'editavel': editar}"
              >
            </div>
            <div class="links" v-if="editar">
              <button class="btn cancel" @click="editar = false">Cancelar</button>
              <button class="btn" @click="salvar">Salvar</button>
            </div>
          </form>
        </div>
        <div class="coluna-small-12 coluna-larg-6">
          <div>
            <h2 class="title_section">Seus leilões ativos</h2>
            <p v-if="animais.length == 0">Você não tem nenhum leilão registrado</p>
            <div v-if="animais.length > 0">
              <LogLeilaoAtivo
                v-for="animal in animais"
                :raca="animal.raca"
                :cor="animal.cor"
                :data="animal.data"
                :lance_minimo="animal.lance_minimo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogLeilaoAtivo from '../components/layout/LogLeilaoAtivo';
import { mapGetters } from 'vuex';

export default {
  name: 'MinhaConta',
  components: {
    LogLeilaoAtivo,
  },
  data() {
    return {
      editar: false,
      temLeilao: false,
      saldo: 9999,
      animais: [],
    };
  },
  computed: {
    ...mapGetters({ usuario: 'getUsuario' }),
  },
  methods: {
    salvar() {
      //faz algo
      this.editar = !this.editar;
    },
  },
  async mounted() {
    this.animais = (await this.$api.get(`/leiloes/${this.usuario.id_usuario}`)).data.data;
    console.log(this.usuario.id_usuario);
    console.log(this.animais);
  },
};
</script>

<style scoped>
.btn {
  width: 100%;
  background-color: green;
  color: white;
}

.btn:hover {
  transform: scale(1.05);
}

.cancel {
  background-color: darkred;
}
</style>
