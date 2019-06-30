<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="coluna-larg-4">
          <h3 class="footer_links_title">Sobre nós</h3>
          <p class="footer_links_about">
            OLXifres é uma plataforma de comércio de gados constrúida apartir do sistema de leilões
            online.
            Na plataforma, o comerciante rural consegue adquirir novos animais para sua fazenda e também
            consegue anunciar
            animais que deseja negociar por taxa mínima da prestação de serviço.
          </p>

          <p class="footer_links_about">
            OLXifres é uma inovação para o mercado rural e têm como foco alcançar o mercado nacional em
            meados de 2020.
          </p>
        </div>
        <div class="coluna-larg-3">
          <h3 class="footer_links_title">Menu</h3>
          <ul class="footer_links">
            <li>
              <router-link tag="a" to="/">Início</router-link>
            </li>
            <li>
              <router-link tag="a" to="/leiloes">Leilões</router-link>
            </li>
            <li>
              <router-link tag="a" to="/about">Sobre nós</router-link>
            </li>
            <li>
              <router-link tag="a" to="/contato">Contato</router-link>
            </li>
            <li>
              <router-link tag="a" to="/editar-conta">Editar Conta</router-link>
            </li>
            <li>
              <router-link tag="a" to="/cadastrar">Registro</router-link>
            </li>
            <li>
              <router-link tag="a" to="/login">Login</router-link>
            </li>
          </ul>
        </div>
        <div class="coluna-larg-5">
          <h3 class="footer_links_title">Redes Sociais</h3>
          <ul class="footer_links_grid">
            <li>
              <a href="#">
                <i class="fab fa-fw fa-facebook-f"/> Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-fw fa-instagram"/>Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-fw fa-twitter"/> Twitter
              </a>
            </li>
          </ul>
          <h3 class="footer_links_title">Contatos</h3>
          <ul class="footer_links_grid">
            <li>
              <router-link tag="a" to="/contato">
                <i class="fas fa-fw fa-mobile-alt"/> (34) 3220-0000
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/contato">
                <i class="fab fa-fw fa-whatsapp"/> (11) 99000-0000
              </router-link>
            </li>
            <li>
              <router-link tag="a" to="/contato">
                <i class="fas fa-fw fa-map-marker-alt"/> Av. Central, n° 500 -Centro
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style>
</style>
