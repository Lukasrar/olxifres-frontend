<template>
  <div>
    <HeaderInterno v-bind:view="view" v-bind:rota="rota"/>
    <div class="container">
      <div class="row align-items-center">
        <div class="content_page">
          <div class="coluna-small-12 coluna-larg-6">
            <form @submit.prevent="criarLeilao">
              <div class="input-group">
                <h2 class="title_section">Criar leilão</h2>
                <label for="raca" class="label-info">Raça:</label>
                <input type="text" id="raca" v-model="raca" class="input-info">
              </div>
              <div class="input-group">
                <label for="nascimento" class="label-info">Data de nascimento do animal:</label>
                <p class="help">Informe os dados da seguinte forma: mes/dia/ano</p>
                <input type="date" id="nascimento" v-model="nascimento" class="input-info">
              </div>
              <div class="input-group">
                <label for="cor" class="label-info">Cor:</label>
                <p class="help">Informe a cor predominante do animal.</p>
                <input type="text" id="cor" v-model="cor" class="input-info">
              </div>
              <div class="input-group">
                <label for="peso" class="label-info">Peso:</label>
                <p class="help">Informe o peso em kg.</p>
                <input type="number" id="peso" v-model="peso" class="input-info">
              </div>
              <div class="input-group">
                <label for="lance" class="label-info">Lance Inicial:</label>
                <p class="help">Informe o valor inicial do leilão.</p>
                <input type="number" id="lance" v-model="lance" class="input-info">
              </div>
              <div class="input-group">
                <label for="tempo" class="label-info">Tempo de duração do leilão:</label>
                <p class="help">Informe o tempo de duração do leilão em minutos. Ex 120.</p>
                <input type="number" id="lance" v-model="tempo" class="input-info">
              </div>
              <div class="input-group">
                <label for="fotos" class="label-info">Escolha as fotos do animal:</label>
                <p class="help">Clique no botão abaixo e selecione as fotos do animal.</p>
                <picture-input
                  ref="pictureInput"
                  @change="onChanged"
                  @remove="onRemoved"
                  :width="300"
                  :removable="true"
                  removeButtonClass="ui red button"
                  :height="300"
                  accept="image/jpeg, image/png, image/gif"
                  buttonClass="ui button primary"
                  :customStrings="{
                  upload: '<h1>Upload it!</h1>',
                  drag: 'Drag and drop your image here'}"
                />
              </div>
              <input type="submit" value="Iniciar leilão" class="btn">
            </form>
          </div>

          <div class="coluna-small-12 coluna-larg-6">
            <div class="container-logs-leiloes">
              <h2 class="title_section">Leilões ativos</h2>
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
import HeaderInterno from '../components/layout/HeaderInterno';
import LogLeilaoAtivo from '../components/layout/LogLeilaoAtivo';
import PictureInput from 'vue-picture-input';
import { mapGetters } from 'vuex';

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
      raca: '',
      nascimento: '',
      cor: '',
      peso: '',
      comprimento: '',
      largura: '',
      altura: '',
      lance: '',
      tempo: '',
      foto: '',
    };
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
      const formData = new FormData();
      formData.append('foto', this.foto);
      formData.append('raca', this.raca);
      formData.append('dataNascimento', this.nascimento);
      formData.append('cor', this.cor);
      formData.append('peso', this.peso);
      formData.append('lanceMinimo', this.lance);
      formData.append('dataFim', this.tempo);
      formData.append('idUsuario', this.usuario.id_usuario);

      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };

      await this.$api.post('/leilao', formData, config);

      console.log('Criando leilao....');
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
</style>
