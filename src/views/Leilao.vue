<template>
  <div class="container_page">
    <div class="container">
      <div class="row">
        <div class="coluna-small-12 coluna-larg-8">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" :src="getBase64Src(leilao.foto)" alt="First slide" />
              </div>
              <!-- <div class="carousel-item">
                <img class="d-block w-100" src="../assets/img/banner_2.jpg" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="../assets/img/banner_3.jpg" alt="Third slide">
              </div>-->
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

          <div class="container-tempo">
            <p class="label-timer-leilao">O leilão acaba em: 12:23:30</p>
          </div>
        </div>
        <div class="coluna-small-12 coluna-larg-4">
          <div class="desc-leilao">
            <div class="topico_leilao text-left">
              <h2>Descrição do leilão</h2>
            </div>
            <div class="detalhes-leilao">
              <span>Código do leilão</span>
              <span>{{leilao.id_leilao}}</span>
              <span>Lance mínimo</span>
              <span>{{leilao.lance_minimo}}</span>
              <span>Data do leilão</span>
              <span>{{formatarData(leilao.data)}}</span>
              <span>Raça</span>
              <span>{{leilao.raca}}</span>
              <span>Peso</span>
              <span>{{leilao.peso}}</span>
              <span>Cor</span>
              <span>{{leilao.cor}}</span>
            </div>
            <form action class="form-lance" @submit.prevent="darLance">
              <label for="valor">
                <strong>Valor:</strong>
              </label>
              <input
                v-model="valor"
                type="text"
                placeholder="Informe o valor do lance"
                class="input-valor input-100"
              />
              <input type="submit" value="Dar lance" class="animated infinite pulse btn-lance" />
            </form>
            <div class="log-leilao">
              <div class="log-title-container">
                <p class="log-title">Ultimos lances</p>
              </div>
              <ul class="log-ul">
                <li class="log" v-for="lance in lances" :key="lance.id_lance">{{lance.valor}}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- <div class="coluna-small-12">
          <div class="section_title_container">
            <h2 class="title_section"> Outros leilões </h2>
          </div>
          <div class="coluna-small-4">
          </div>
          <div class="coluna-small-4">
          </div>
          <div class="coluna-small-4">
          </div>
        </div>-->
      </div>
      <UltimosLeiloes />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
import UltimosLeiloes from '../components/layout/UltimosLeiloes';
import mixin from '../mixins';

export default {
  name: 'Leilao',
  components: {
    UltimosLeiloes,
  },
  mixins: [mixin],
  data() {
    return {
      leilao: {},
      valor: null,
    };
  },
  computed: {
    ...mapGetters({ usuario: 'getUsuario' }),
    lances() {
      return this.leilao.lances;
    },
    idLeilao() {
      return this.$route.params.idLeilao;
    },
  },
  async mounted() {
    await this.buscarLeilao();
  },
  methods: {
    async buscarLeilao() {
      this.leilao = (await this.$api.get(`/leilao/${this.idLeilao}`)).data;
    },
    async darLance() {
      try {
        const body = {
          valor: this.valor,
          idUsuario: this.usuario.id_usuario,
        };

        await this.$api.post(`/lance/${this.idLeilao}`, body);

        await this.buscarLeilao();
      } catch (err) {
        console.error(err);
      }
    },
    formatarData(data) {
      return moment(data).format('DD/MM/YYYY');
    },
  },
};
</script>

<style>
</style>
