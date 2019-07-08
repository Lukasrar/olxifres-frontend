<template>
  <div class="container">
    <vue-headful
      title="Minha conta | Olxifres"
      description="Página disponível para visualização de dados do perfil."
    />
    <div class="row align-items-center">
      <div class="content_page">
        <div class="coluna-small-12 coluna-larg-6">
          <form @submit.prevent="salvar">
            <h2
              class="title_section"
            >Olá {{usuario.nome}}, aqui você pode editar algumas informações da sua conta.</h2>

            <p class="alert bolder">Somente os campos com borda verde são editáveis!</p>
            <div class="input-group">
              <label for="saldo" class="label-info">Saldo:</label>
              <span>{{saldo}}</span>
            </div>
            <div class="input-group">
              <label for="email" class="label-info">Email:</label>
              <span>{{usuario.email}}</span>
            </div>
            <div class="input-group">
              <label for="senha" class="label-info">Senha:</label>
              <input class="input-info editavel" :type="tipo" id="senha" v-model="usuario.senha" />
              <button class="btn" @click.prevent="mostrarSenha">{{textoBtn}}</button>
            </div>
            <div class="input-group">
              <label for="cpf" class="label-info">CPF:</label>
              <span>{{usuario.cpf}}</span>
            </div>
            <div class="input-group">
              <label for="telefone" class="label-info">Telefone:</label>
              <input
                class="input-info editavel"
                type="text"
                id="telefone"
                v-model="usuario.telefone"
              />
            </div>
            <div class="input-group">
              <label for="cidade" class="label-info">Cidade:</label>
              <input class="input-info editavel" type="text" id="cidade" v-model="usuario.cidade" />
            </div>
            <div class="input-group">
              <label for="estado" class="label-info">Estado:</label>
              <input class="input-info editavel" type="text" id="estado" v-model="usuario.estado" />
            </div>
            <div class="input-group">
              <label for="logradouro" class="label-info">Logradouro:</label>
              <input
                class="input-info editavel"
                type="text"
                id="logradouro"
                v-model="usuario.logradouro"
              />
            </div>
            <div class="input-group">
              <label for="bairro" class="label-info">Bairro:</label>
              <input class="input-info editavel" type="text" id="bairro" v-model="usuario.bairro" />
            </div>
            <div class="input-group">
              <label for="numero" class="label-info">Numero:</label>
              <input class="input-info editavel" type="text" id="numero" v-model="usuario.numero" />
            </div>
            <div class="input-group">
              <label for="cep" class="label-info">CEP:</label>
              <input class="input-info editavel" type="text" id="cep" v-model="usuario.cep" />
            </div>
            <div class="links">
              <button class="btn cancel" @click="preencherUsuario">Cancelar</button>
              <button class="btn" @click="salvar">Salvar</button>
            </div>
          </form>
        </div>
        <div class="coluna-small-12 coluna-larg-6">
          <div>
            <h2 class="title_section">Seus leilões ativos</h2>
            <p v-if="animais.length == 0">Você não tem nenhum leilão registrado</p>
            <div v-if="animais.length > 0" class="container-leiloes ativo">
              <LogLeilaoAtivo
                v-for="animal in animais"
                :raca="animal.raca"
                :cor="animal.cor"
                :data="animal.data"
                :status="animal.status"
                :lance_minimo="animal.lance_minimo"
                :key="animal.id_animal"
                :foto="animal.foto"
              />
            </div>
          </div>
          <div>
            <h2 class="title_section">Seus leilões inativos</h2>
            <p v-if="animais.length == 0">Você não tem nenhum leilão registrado</p>
            <div v-if="animais.length > 0" class="container-leiloes inativo">
              <LogLeilaoAtivo
                v-for="animal in animaisInativos"
                :raca="animal.raca"
                :cor="animal.cor"
                :data="animal.data"
                :lance_minimo="animal.lance_minimo"
                :status="animal.status"
                :key="animal.id_animal"
                :foto="animal.foto"
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
import { mapGetters, mapActions } from 'vuex';
import { cloneDeep } from 'lodash';

export default {
  name: 'MinhaConta',
  components: {
    LogLeilaoAtivo,
  },
  data() {
    return {
      temLeilao: false,
      saldo: 9999,
      animais: [],
      animaisInativos: [],
      usuario: {},
      mostrar: true,
      textoBtn: 'Mostrar Senha',
      tipo: 'password',
    };
  },
  computed: {
    ...mapGetters(['getUsuario']),
  },
  methods: {
    ...mapActions(['setUsuario']),
    async salvar() {
      await this.$api.put('/usuario', this.usuario);
      this.setUsuario(this.usuario);
      this.$noty.success('Perfil atualizado com sucesso!', {
        killer: true,
        timeout: 4000,
        layout: 'topRight',
      });
    },
    preencherUsuario() {
      this.usuario = cloneDeep(this.getUsuario);
    },
    mostrarSenha() {
      if (this.mostrar == true) {
        this.tipo = 'text';
        this.mostrar = !this.mostrar;
        this.textoBtn = 'Esconder Senha';
      } else {
        this.tipo = 'password';
        this.mostrar = !this.mostrar;
        this.textoBtn = 'Mostrar Senha';
      }
    },
  },
  async mounted() {
    this.preencherUsuario();
    const resp = (await this.$api.get(`/leiloes/${this.usuario.id_usuario}`)).data.data;
    this.animais = resp.filter(animal => animal.status === 0);
    this.animaisInativos = resp.filter(animal => animal.status === 1);
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
  transform: scale(0.97);
}

.cancel {
  background-color: darkred;
  margin-right: 5px;
}

.container-leiloes {
  border-radius: 5px;
  max-height: 200px;
  overflow: auto;
  padding: 10px;
}

.ativo {
  border: 2px solid green;
}

.inativo {
  border: 2px solid darkred;
}
</style>
