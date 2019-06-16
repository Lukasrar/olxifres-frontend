<template>
  <div class="container-leilao">
    <div class="container">
      <div class="row">
        <div class="coluna-larg-8">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="../assets/img/banner_1.jpg" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="../assets/img/banner_2.jpg" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="../assets/img/banner_3.jpg" alt="Third slide">
              </div>
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
            <p class="timer-leilao">Leilão acaba em:</p>
            <p class="timer-leilao">12:23:30</p>
          </div>
        </div>
        <div class="coluna-larg-4">
          <div class="desc-leilao">
            <div class="section_title">
              <h2>Descrição do leilão</h2>
            </div>
            <div class="detalhamento">
              OLXifres é uma plataforma de comércio de gados constrúida apartir do sistema de leilões
              online. Na plataforma, o comerciante rural consegue adquirir novos animais para sua fazenda
              e também consegue anunciar animais que deseja negociar por taxa mínima da prestação de
              serviço.
              OLXifres é uma inovação para o mercado rural e têm como foco alcançar o mercado nacional em
              meados de 2020.
            </div>
            <form action class="form-lance">
              <label for="valor">
                <strong>Valor:</strong>
              </label>
              <input
                id="valor"
                type="text"
                placeholder="Informe o valor do lance"
                class="input-valor"
              >
              <input type="submit" value="Dar lance" class="animated infinite pulse btn-lance">
            </form>
            <div class="log-leilao">
              <div class="log-title-container">
                <p class="log-title">Ultimos lances</p>
              </div>
              <ul class="log-ul">
                <li class="log">10000</li>
                <li class="log">15000</li>
                <li class="log">16000</li>
                <li class="log">20000</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Leilao',
  mounted() {
    console.log(this.$route.params);
  },
};
</script>

<style>
</style>
