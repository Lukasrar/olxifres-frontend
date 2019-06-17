<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="content_page">
        <div class="coluna-small-12 coluna-larg-6">
          <form>
            <h2
              class="title_section"
            >Olá {{nome}}, aqui você pode editar algumas informações da sua conta.</h2>
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
                type="text"
                id="email"
                :value="email"
                :disabled="!editar"
                :class="{'editavel': editar}"
              >
            </div>
            <div class="input-group">
              <label for="senha" class="label-info">Senha:</label>
              <input
                type="text"
                id="senha"
                :value="senha"
                :disabled="!editar"
                :class="{'editavel': editar}"
              >
            </div>
            <div class="input-group">
              <label for="cpf" class="label-info">CPF:</label>
              <span>{{cpf}}</span>
            </div>
            <div class="input-group">
              <label for="telefone" class="label-info">Telefone:</label>
              <input
                type="text"
                id="telefone"
                :value="telefone"
                :disabled="!editar"
                :class="{'editavel': editar}"
              >
            </div>
            <div class="input-group">
              <label for="cidade" class="label-info">Cidade:</label>
              <input
                type="text"
                id="cidade"
                :value="cidade"
                :disabled="!editar"
                :class="{'editavel': editar}"
              >
            </div>
            <div class="input-group">
              <label for="estado" class="label-info">Estado:</label>
              <input
                type="text"
                id="estado"
                :value="estado"
                :disabled="!editar"
                :class="{'editavel': editar}"
              >
            </div>
            <div class="input-group">
              <label for="logradouro" class="label-info">Logradouro:</label>
              <input
                type="text"
                id="logradouro"
                :value="logradouro"
                :disabled="!editar"
                :class="{'editavel': editar}"
              >
            </div>
            <div class="input-group">
              <label for="bairro" class="label-info">Bairro:</label>
              <input
                type="text"
                id="bairro"
                :value="bairro"
                :disabled="!editar"
                :class="{'editavel': editar}"
              >
            </div>
            <div class="input-group">
              <label for="numero" class="label-info">Numero:</label>
              <input
                type="text"
                id="numero"
                :value="numero"
                :disabled="!editar"
                :class="{'editavel': editar}"
              >
            </div>
            <div class="input-group">
              <label for="cep" class="label-info">CEP:</label>
              <input
                type="text"
                id="cep"
                :value="cep"
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
            <p v-if="!temLeilao">Você não tem nenhum leilão registrado</p>
            <div v-if="temLeilao">
              <LogLeilaoAtivo/>
              <LogLeilaoAtivo/>
              <LogLeilaoAtivo/>
              <LogLeilaoAtivo/>
              <LogLeilaoAtivo/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogLeilaoAtivo from '../components/layout/LogLeilaoAtivo';

export default {
  name: 'EditarConta',
  components: {
    LogLeilaoAtivo,
  },
  data() {
    return {
      editar: false,
      temLeilao: false,
      saldo: 9999,
      nome: 'Jabriscreido',
      senha: 'Jabriscreido123',
      email: 'jabriscreido@hotmail.com',
      telefone: '99999-9999',
      cidade: 'Uberlândia',
      estado: 'MG',
      logradouro: 'Rua joaquim silva jhonson',
      bairro: 'Segismundo Pereira',
      numero: '666',
      cpf: '114000000-98',
      cep: '38408389',
    };
  },
  methods: {
    salvar() {
      //faz algo
      this.editar = !this.editar;
    },
  },
};
</script>

<style scoped>
.btn {
  width: 100%;
  background-color: green;
  color: white;
}

.btn:hover{
    transform: scale(1.05)
}

.cancel {
  background-color: darkred;
}
</style>
