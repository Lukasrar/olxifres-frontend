<template>
  <div>
    <HeaderInterno v-bind:view="view" v-bind:rota="rota"/>
    <div class="container">
    <vue-headful
        title="Criar leilão | Olxifres"
        description="Página disponível para criação de um novo leilão."
    />
      <div class="row align-items-center">
        <div class="content_page">
          <div class="coluna-small-12 coluna-larg-6">
            <form @submit.prevent="criarLeilao">
              <h2 class="title_section">Criar leilão</h2>

              <div class="input-group" :class="{ 'error' : !$v.raca.required && $v.$error}">
                <label class="label-info">Raça: *</label>
                <input type="text" v-model="raca" class="input-info">
              </div>
              <div class="input-group" :class="{ 'error' : !$v.nascimento.required && $v.$error}">
                <label class="label-info">Data de nascimento do animal: *</label>
                <p class="help">Informe os dados da seguinte forma: mes/dia/ano</p>
                <input type="date" v-model="nascimento" class="input-info">
              </div>
              <div class="input-group">
                <label class="label-info">Cor:</label>
                <p class="help">Informe a cor predominante do animal.</p>
                <input type="text" v-model="cor" class="input-info">
              </div>
              <div class="input-group" :class="{ 'error' : !$v.peso.required && $v.$error}">
                <label class="label-info">Peso: *</label>
                <p class="help">Informe o peso em kg.</p>
                <input type="number" v-model="peso" class="input-info">
              </div>
              <div class="input-group" :class="{ 'error' : !$v.lance.required && $v.$error}">
                <label class="label-info">Lance Inicial: *</label>
                <p class="help">Informe o valor inicial do leilão.</p>
                <input type="number" v-model="lance" class="input-info">
              </div>
              <div class="input-group" :class="{ 'error' : !$v.dataFim.required && $v.$error}">
                <label class="label-info">Data fim do leilão: *</label>
                <p class="help">Informe a data de encerramento do leilão.</p>
                <input type="date" v-model="dataFim" class="input-info">
              </div>
              <div class="input-group">
                <label for="fotos" class="label-info">Escolha a foto do animal: *</label>
                <picture-input
                  ref="pictureInput"
                  @change="onChanged"
                  @remove="onRemoved"
                  :width="300"
                  :removable="true"
                  removeButtonClass="btn-picture red"
                  :height="300"
                  accept="image/jpeg, image/png, image/gif"
                  buttonClass="btn-picture"
                  :customStrings="{
                  upload: '<h1>Upload it!</h1>',
                  drag: 'Clique ou arraste para selecionar uma imagem!',
                  remove: 'Remover foto',
                  change: 'Trocar foto' 
                   }"
                />
              </div>
              <input type="submit" value="Iniciar leilão" class="btn">
            </form>
          </div>

          <div class="coluna-small-12 coluna-larg-6">
            <div class="container-logs-leiloes">
              <h2 class="title_section">Leilões ativos para comparação</h2>
              <LogLeilaoAtivo
                v-for="animal in animais"
                :raca="animal.raca"
                :cor="animal.cor"
                :data="animal.data"
                :status="animal.status"
                :lance_minimo="animal.lance_minimo"
                :foto="animal.foto"
                :key="animal.id_leilao"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderInterno from '../components/layout/HeaderInterno';
import LogLeilaoAtivo from '../components/layout/LogLeilaoAtivo';
import PictureInput from 'vue-picture-input';
import { mapGetters } from 'vuex';
import { required, minLength, between } from 'vuelidate/lib/validators';

export default {
  name: 'CriarLeilao',
  components: {
    HeaderInterno,
    LogLeilaoAtivo,
    PictureInput,
  },
  data() {
    return {
      view: 'Veja os leilões ativos',
      rota: '/leiloes',
      raca: null,
      nascimento: '',
      cor: '',
      peso: '',
      lance: '',
      dataFim: '',
      foto: '',
      animais: [],
    };
  },
  validations: {
    raca: {
      required,
    },
    nascimento: {
      required,
    },
    peso: {
      required,
    },
    lance: {
      required,
    },
    dataFim: {
      required,
    },

    foto: {
      required,
    },
  },
  computed: {
    ...mapGetters({ usuario: 'getUsuario' }),
  },
  methods: {
    onChanged() {
      console.log('New picture loaded');
      if (this.$refs.pictureInput.file) {
        this.foto = this.$refs.pictureInput.file;
      } else {
        console.log('Old browser. No support for Filereader API');
      }
    },
    onRemoved() {
      this.foto = '';
    },
    attemptUpload() {
      if (this.foto) {
        FormDataPost('http://localhost:8001/user/picture', this.foto)
          .then(response => {
            if (response.data.success) {
              this.foto = '';
              console.log('Image uploaded successfully ✨');
            }
          })
          .catch(err => {
            console.error(err);
          });
      }
    },
    async criarLeilao() {
      this.$v.$touch();

      if (this.$v.error) return;

      try {
        const formData = new FormData();
        formData.append('foto', this.foto);
        formData.append('raca', this.raca);
        formData.append('dataNascimento', this.nascimento);
        formData.append('cor', this.cor);
        formData.append('peso', this.peso);
        formData.append('lanceMinimo', this.lance);
        formData.append('dataFim', this.dataFim);
        formData.append('idUsuario', this.usuario.id_usuario);

        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };

        await this.$api.post('/leilao', formData, config);
        this.$noty.success('Leilão criado com sucesso!');
      } catch (err) {
        this.$noty.error('Não foi possível criar criar seu leilão :(');
      }
    },
  },
  async mounted() {
    const params = {
      limit: 10,
    };

    this.animais = (await this.$api.get('/leiloes', { params })).data.data;
  },
};
</script>

<style scoped>
</style>
