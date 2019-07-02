<template>
  <div>
    <vue-headful
        title="Informações de contato | Olxifres"
        description="Página disponível para visualização das informações de contato da Olxifres."
    />
    <div class="main_banner_300 banner_4">
        <div class="container height_100">
            <div class="main_banner_content_container height_100">
                <div class="main_banner_content">
                    <h4 class="sec_main_title">Leilão de gado online - temporada 2/2019</h4>
                    <div class="bread">
                        <span> <router-link tag="a" to="/">Início</router-link> <i class="fa fa-fw fa-arrow-right"></i> <a href="#">Contato</a> </span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container_page">
        <div class="container">
            <div class="row align-items-center">
                <div class="coluna-small-12 coluna-larg-12">
                    <h2 class="main_title_2"> Contate-nos </h2> 
                </div>
                <div class="content_page">
                    <div class="coluna-small-12 coluna-larg-6">
                        <p class="descritive_paragraph"> Se você teve algum problema ou dúvida em relação ao uso e/ou funcionalidades de nosso
                        web site, por favor nos ligue. Nós adorarimaos ajudar você à resolver todos
                        os seus problemas. Gostaria de anunciar uma grande quantidade de animais, e procura um facilitador para isso?
                         Envie um e-mail para nossa central através do endereço <a href="#" class="link">olxifres@email.com</a> e entraremos em contato o mais breve possível.</p> 
                        
                        <div class="row">
                            <div class="coluna-small-12 coluna-med-6 coluna-larg-6 p_z">
                                <span class="sub_title"> Redes Sociais </span>
                                <i class="fab fa-fw fa-instagram icon_st_1"> </i> <span class="social_desc">#olxifresoficial</span>
                                <i class="fab fa-fw fa-facebook-square icon_st_1"></i> <span class="social_desc">Olxifres Uberlândia</span>
                                <i class="fab fa-fw fa-twitter-square icon_st_1"></i> <span class="social_desc">@olxifres</span>
                            </div>
                            <div class="coluna-small-12 coluna-med-6 coluna-larg-6">
                                <span class="sub_title"> Contatos </span>
                                <i class="fab fa-fw fa-whatsapp icon_st_1"></i> <span class="contact_desc">(34) 9 9876-9584</span>
                                <i class="fas fa-fw fa-sms icon_st_1"></i> <span class="contact_desc">(34) 9 9562-2651</span>
                                <i class="fas fa-fw fa-phone-square icon_st_1"></i> <span class="contact_desc">(34) 3220-3400</span>
                            </div>
                            <div class="coluna-small-12 coluna-larg-12">
                                <span class="sub_title"> Onde estamos </span>
                                <div class="address_section">
                                    <i class="fas fa-fw fa-map-pin icon_st_1"></i> <span class="contact_desc">R. Blanche Galassi, 150 - Altamira, Uberlândia - MG</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="coluna-small-12 coluna-larg-6">
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe width="100%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=iftm%20uebrlandia%20centro&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
    }
  },
};
</script>

<style>
</style>
