<template>
  <div id="app">
    <nav-bar/>
    <Home />
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Home from './views/Home'
export default {
  name: "App",
  components: {
    NavBar,
    Home
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Hind");
@import url("https://fonts.googleapis.com/css?family=Fira+Sans+Condensed");
@import url(https://fonts.googleapis.com/css?family=Raleway);

* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

button,
input,
select,
textarea {
  margin: 0;
  font: inherit;
  color: inherit;
}

button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.text-center {
  text-align: center;
}

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

.row {
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
  flex-wrap: wrap;
}

.coluna-small-1,
.coluna-med-1,
.coluna-larg-1,
.coluna-small-2,
.coluna-med-2,
.coluna-larg-2,
.coluna-small-3,
.coluna-med-3,
.coluna-larg-3,
.coluna-small-4,
.coluna-med-4,
.coluna-larg-4,
.coluna-small-5,
.coluna-med-5,
.coluna-larg-5,
.coluna-small-6,
.coluna-med-6,
.coluna-larg-6,
.coluna-small-7,
.coluna-med-7,
.coluna-larg-7,
.coluna-small-8,
.coluna-med-8,
.coluna-larg-8,
.coluna-small-9,
.coluna-med-9,
.coluna-larg-9,
.coluna-small-10,
.coluna-med-10,
.coluna-larg-10,
.coluna-small-11,
.coluna-med-11,
.coluna-larg-11,
.coluna-small-12,
.coluna-med-12,
.coluna-larg-12 {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.coluna-small-1,
.coluna-small-2,
.coluna-small-3,
.coluna-small-4,
.coluna-small-5,
.coluna-small-6,
.coluna-small-7,
.coluna-small-8,
.coluna-small-9,
.coluna-small-10,
.coluna-small-11,
.coluna-small-12 {
  float: left;
}

.coluna-small-12 {
  width: 100%;
}

.coluna-small-11 {
  width: 91.66666667%;
}

.coluna-small-10 {
  width: 83.33333333%;
}

.coluna-small-9 {
  width: 75%;
}

.coluna-small-8 {
  width: 66.66666667%;
}

.coluna-small-7 {
  width: 58.33333333%;
}

.coluna-small-6 {
  width: 50%;
}

.coluna-small-5 {
  width: 41.66666667%;
}

.coluna-small-4 {
  width: 33.33333333%;
}

.coluna-small-3 {
  width: 25%;
}

.coluna-small-2 {
  width: 16.66666667%;
}

.coluna-small-1 {
  width: 8.33333333%;
}

.coluna-small-offset-12 {
  margin-left: 100%;
}

.coluna-small-offset-11 {
  margin-left: 91.66666667%;
}

.coluna-small-offset-10 {
  margin-left: 83.33333333%;
}

.coluna-small-offset-9 {
  margin-left: 75%;
}

.coluna-small-offset-8 {
  margin-left: 66.66666667%;
}

.coluna-small-offset-7 {
  margin-left: 58.33333333%;
}

.coluna-small-offset-6 {
  margin-left: 50%;
}

.coluna-small-offset-5 {
  margin-left: 41.66666667%;
}

.coluna-small-offset-4 {
  margin-left: 33.33333333%;
}

.coluna-small-offset-3 {
  margin-left: 25%;
}

.coluna-small-offset-2 {
  margin-left: 16.66666667%;
}

.coluna-small-offset-1 {
  margin-left: 8.33333333%;
}

@media (min-width: 992px) {
  .coluna-med-1,
  .coluna-med-2,
  .coluna-med-3,
  .coluna-med-4,
  .coluna-med-5,
  .coluna-med-6,
  .coluna-med-7,
  .coluna-med-8,
  .coluna-med-9,
  .coluna-med-10,
  .coluna-med-11,
  .coluna-med-12 {
    float: left;
  }

  .coluna-med-12 {
    width: 100%;
  }

  .coluna-med-11 {
    width: 91.66666667%;
  }

  .coluna-med-10 {
    width: 83.33333333%;
  }

  .coluna-med-9 {
    width: 75%;
  }

  .coluna-med-8 {
    width: 66.66666667%;
  }

  .coluna-med-7 {
    width: 58.33333333%;
  }

  .coluna-med-6 {
    width: 50%;
  }

  .coluna-med-5 {
    width: 41.66666667%;
  }

  .coluna-med-4 {
    width: 33.33333333%;
  }

  .coluna-med-3 {
    width: 25%;
  }

  .coluna-med-2 {
    width: 16.66666667%;
  }

  .coluna-med-1 {
    width: 8.33333333%;
  }

  .coluna-med-offset-12 {
    margin-left: 100%;
  }

  .coluna-med-offset-11 {
    margin-left: 91.66666667%;
  }

  .coluna-med-offset-10 {
    margin-left: 83.33333333%;
  }

  .coluna-med-offset-9 {
    margin-left: 75%;
  }

  .coluna-med-offset-8 {
    margin-left: 66.66666667%;
  }

  .coluna-med-offset-7 {
    margin-left: 58.33333333%;
  }

  .coluna-med-offset-6 {
    margin-left: 50%;
  }

  .coluna-med-offset-5 {
    margin-left: 41.66666667%;
  }

  .coluna-med-offset-4 {
    margin-left: 33.33333333%;
  }

  .coluna-med-offset-3 {
    margin-left: 25%;
  }

  .coluna-med-offset-2 {
    margin-left: 16.66666667%;
  }

  .coluna-med-offset-1 {
    margin-left: 8.33333333%;
  }
}

@media (min-width: 1200px) {
  .coluna-larg-1,
  .coluna-larg-2,
  .coluna-larg-3,
  .coluna-larg-4,
  .coluna-larg-5,
  .coluna-larg-6,
  .coluna-larg-7,
  .coluna-larg-8,
  .coluna-larg-9,
  .coluna-larg-10,
  .coluna-larg-11,
  .coluna-larg-12 {
    float: left;
  }

  .coluna-larg-12 {
    width: 100%;
  }

  .coluna-larg-11 {
    width: 91.66666667%;
  }

  .coluna-larg-10 {
    width: 83.33333333%;
  }

  .coluna-larg-9 {
    width: 75%;
  }

  .coluna-larg-8 {
    width: 66.66666667%;
  }

  .coluna-larg-7 {
    width: 58.33333333%;
  }

  .coluna-larg-6 {
    width: 50%;
  }

  .coluna-larg-5 {
    width: 41.66666667%;
  }

  .coluna-larg-4 {
    width: 33.33333333%;
  }

  .coluna-larg-3 {
    width: 25%;
  }

  .coluna-larg-2 {
    width: 16.66666667%;
  }

  .coluna-larg-1 {
    width: 8.33333333%;
  }

  .coluna-larg-offset-12 {
    margin-left: 100%;
  }

  .coluna-larg-offset-11 {
    margin-left: 91.66666667%;
  }

  .coluna-larg-offset-10 {
    margin-left: 83.33333333%;
  }

  .coluna-larg-offset-9 {
    margin-left: 75%;
  }

  .coluna-larg-offset-8 {
    margin-left: 66.66666667%;
  }

  .coluna-larg-offset-7 {
    margin-left: 58.33333333%;
  }

  .coluna-larg-offset-6 {
    margin-left: 50%;
  }

  .coluna-larg-offset-5 {
    margin-left: 41.66666667%;
  }

  .coluna-larg-offset-4 {
    margin-left: 33.33333333%;
  }

  .coluna-larg-offset-3 {
    margin-left: 25%;
  }

  .coluna-larg-offset-2 {
    margin-left: 16.66666667%;
  }

  .coluna-larg-offset-1 {
    margin-left: 8.33333333%;
  }
}

.overlay {
  z-index: -1;
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
}

.login-screen {
  z-index: 99999;
  width: 100vw;
  height: 100vh;
  margin-left: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.app-title {
  margin-top: 15px;
  text-align: center;
  color: white;
}

.login-form {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.label-form {
  text-align: left !important;
  color: #ffffff;
  margin-bottom: 5px;
}

.control-group {
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

input {
  text-align: left;
  background-color: #ecf0f1;
  border: 2px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 200;
  padding: 10px 5px;
  width: 320px;
  transition: border 0.5s;
}

input::placeholder {
  color: #078a06;
  font-weight: 500;
}

input:focus {
  border: 2px solid #078a06;
  box-shadow: none;
}

.btn {
  text-align: center;
  border: 2px solid transparent;
  background: transparent;
  border: 2px solid #f6fdf6;
  color: #ffffff;
  font-size: 16px;
  line-height: 25px;
  padding: 10px 0;
  text-decoration: none;
  text-shadow: none;
  border-radius: 3px;
  box-shadow: none;
  transition: 0.25s;
  display: block;
  width: 320px;
  margin: 2px auto;
}

.btn:hover {
  background-color: #078a06;
}

.links {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login-link {
  font-size: 12px;
  color: #ffffff;
  display: block;
  margin: 12px;
}

div {
  display: block;
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

ul {
  list-style: none;
  margin-bottom: 0px;
}

p {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  line-height: 1.2;
  font-weight: 500;
  color: #989898;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
}

a,
a:hover,
a:visited,
a:active,
a:link {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #282828;
}

.height_100 {
  height: 100%;
}

.float_right {
  float: right;
}

.super_container {
  width: 100%;
  overflow: hidden;
}

.header {
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #078a06;
}

.container-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
}

.header li a {
  display: block;
  border-right: 1px solid #f4f4f4;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  color: #ffffff !important;
  background: #078a06;
}

.header .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
}

.menu li a {
  color: black;
  font-weight: bold;
}
.active {
  color: #ffffff !important;
  background: #024e02;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 25px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 320px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (min-width: 48em) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
}

.notificacoes a {
  background: #fff;
  border-radius: 50%;
}

.logo {
  font-size: 32px;
  color: #201f1d;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: rgba(0, 0, 0, 0.2) 0px 0px 1px;
}

.logo span {
  color: #078a06;
}

.main_banner {
  height: 650px;
  background-image: url("./assets/img/banner_4.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  align-items: center;
  background-attachment: fixed;
}

.desc-leilao {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  flex-direction: column;
}

.log-leilao {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #078a06;
  width: 100%;
  margin-top: 10px;
}
.log-title-container {
  width: 100%;
  height: 40px;
  background-color: #078a06;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.log-ul {
  margin-top: 10px;
}

.log-title {
  color: #fff;
  margin: auto;
}

.log {
  list-style: disc;
  color: #000;
}

.container-tempo {
  padding-top: 10px;
  background-color: #078a06;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.timer-leilao {
  color: #ffffff;
  font-weight: bold;
  text-align: center;
}

.form-lance {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  margin: auto;
}
.input-valor {
  width: 100%;
  background-color: transparent;
  color: #078a06;
  border: 1px solid #078a06;
  padding: 5px;
  margin-bottom: 10px;
}

.btn-lance {
  text-align: center;
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #078a06;
  color: white;
}

.sobre-banner {
  height: 450px;
  background-color: #078a06;
  background-size: cover;
  background-position: center center;
  align-items: center;
  justify-content: center;
}

.container-leilao {
  padding-top: 100px;
  background-color: #ffffff;
  background-size: cover;
  background-position: center center;
  align-items: center;
  justify-content: center;
}

.foto {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  border-radius: 50%;
}

.perfil {
  margin-top: 10px;
  border-bottom: #078a06 2px solid;
}

.nome {
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  border-bottom: #078a06 2px solid;
}

.main_banner_content_container {
  display: flex;
  align-items: center;
}

.sobre-banner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sobre-title {
  color: white !important;
  text-align: center;
}

.main_banner_content {
  width: 65%;
}

.main_banner_content .sec_main_title {
  font-size: 25px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
  font-family: "Fira Sans Condensed", sans-serif;
  margin-bottom: 5px;
  text-shadow: 1px 1px 4px rgb(224, 205, 205);
}

@media (max-width: 600px) {
  .main_banner_content .main_title {
    font-size: 45px !important;
  }
  .container-lista-leilao {
    flex-direction: column !important;
  }
}

.main_banner_content .main_title {
  font-size: 65px;
  font-weight: 400;
  line-height: 1;
  font-family: "Fira Sans Condensed", sans-serif;
  text-shadow: 1px 2px 4px rgb(224, 205, 205);
}

.ver_mais_btn a {
  display: block;
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  line-height: 40px;
  width: 100%;
  font-family: "Hind", sans-serif;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 3px #201f1d;
}

.center_block {
  display: block !important;
  margin: auto;
}

.ver_mais_btn {
  width: 200px;
  margin-top: 35px;
  box-shadow: 0px 0px 0px 0px #9acc85;
  background: linear-gradient(to bottom, #78c754 5%, #397a18 100%);
  background-color: #78c754;
  border: 1px solid #3b6e22;
  display: inline-block;
  cursor: pointer;
  color: #fff;
  font-size: 13px;
  font-weight: bold;
  border: none;
}

.ver_mais_btn:hover {
  box-shadow: 0px 0px 0px 0px #9acc85;
  background: linear-gradient(to bottom, #64a745 5%, #336d16 100%);
  background-color: #67a849;
}

.ver_mais_btn:active {
  position: relative;
  top: 1px;
}

.ultimos_leiloes {
  width: 100%;
  margin-top: 40px;
}

.ultimos_leiloes_item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  height: 260px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin: 10px 0px;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.5s all;
}

.ultimos_leiloes_item:hover {
  opacity: 0.7;
}

.ultimos_leiloes_estado,
.ultimos_leiloes_nome {
  height: 35px;
  padding-left: 25px;
  padding-right: 25px;
}

.ultimos_leiloes_estado {
  min-width: 5%;
  background: rgb(24, 75, 18);
}

.ultimos_leiloes_nome {
  min-width: 50%;
  background: #fff;
}

.ultimos_leiloes_estado a {
  color: #fff;
}

.ultimos_leiloes_nome a {
  color: rgb(24, 75, 18);
}

.ultimos_leiloes_estado a,
.ultimos_leiloes_nome a {
  display: block;
  text-align: center;
  line-height: 40px;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  transition: all 0.3s;
  cursor: pointer;
}

/*********************************
6. Deal of the week
*********************************/

.destaque_semanal {
  width: 100%;
  margin-top: 41px;
}

.destaque_semanal_img {
  height: 540px;
}

.destaque_semanal_img .main_image {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: contain;
  z-index: 11;
}

.destaque_semanal_img .bk_image {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 10;
  filter: blur(3px);
  filter: brightness(80%);
}

.container-lista-leilao {
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}

.destaque_semanal_content {
  height: 100%;
}

.section_title {
  text-align: center;
  margin-top: 20px;
}

.section_title h2 {
  display: inline-block;
}

.section_title::after {
  display: block;
  position: absolute;
  top: calc(100% + 13px);
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 5px;
  background: #078a06;
  content: "";
}

.detalhamento {
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: justify;
  font-size: 14px;
}

.link-social:link,
.link-social:visited {
  text-decoration: none;
  color: #024e02;
}

.fab {
  font-size: 25px !important;
  margin: 8px;
}

.descricao {
  text-align: justify;
  font-size: 14px;
}

.social {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
}

.timer {
  text-align: center;
  font-size: 25px;
  color: #fff;
  width: 50%;
  padding: 15px;
  margin: auto;
  font-weight: 600;
  margin-bottom: 10px;
  text-shadow: rgb(167, 28, 28) 1px 0 10px;
}

.ver_detalhes {
  text-align: center;
  font-size: 25px;
  color: #fff;
  background-color: #024e02;
  width: 50%;
  padding: 15px;
  margin: auto;
  font-weight: 600;
  margin-bottom: 10px;
}

.destaque_semanal_button {
  width: 140px;
  background: #201f1d;
  margin-top: 52px;
}

.destaque_semanal_button:hover {
  background: #2b2b34 !important;
}

.info_olx {
  margin-top: 50px;
}

.info_olx_item {
  height: 100px;
  background: #f5f5f5;
  padding-left: 20px;
  align-items: center;
  flex-direction: row;
  display: flex;
}

.info_olx_icon {
  font-size: 40px;
  color: #024e02;
}

.info_olx_content {
  margin-bottom: 0px;
  color: #313a31;
  padding-left: 15px;
}

.info_olx_content .main_text {
  font-weight: 600;
  line-height: 1.1;
  font-size: 16px;
  color: #1d3119;
}

.title_section {
  font-family: "Hind", sans-serif;
  font-size: 25px;
  font-weight: 600;
  color: #1d3119;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
}

.section_title_container::after {
  display: block;
  position: absolute;
  top: calc(100% + 13px);
  width: 40%;
  height: 3px;
  background: #34aa10;
  content: "";
}

/*********************************
Lista leilões
*********************************/

.container-leilao-single {
  width: 250px;
  border: 2px solid #078a06;
  margin: 10px;
}

.dar_lance {
  text-align: center;
  padding: 10px;
  margin: auto;
  width: 100%;
  margin-top: 125px;
  box-shadow: 0px 0px 0px 0px #9acc85;
  background: linear-gradient(to bottom, #78c754 5%, #397a18 100%);
  background-color: #78c754;
  border: 1px solid #3b6e22;
  display: inline-block;
  cursor: pointer;
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  border: none;
}

.descricao {
  padding: 5px;
  margin-top: 7px;
  color: #000;
}

.filtro {
  padding-left: 35px;
  font-weight: 600;
  font-size: 23px;
  font-family: "Hind", sans-serif;
  color: #1d3119;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  background-image: url(./assets/img/filter_icon.png);
  background-repeat: no-repeat;
  background-position: 3px -5px;
  background-size: 30px;
  cursor: pointer;
  display: block;
}

input[type="radio"] {
  display: none;
  position: absolute;
}

input[type="radio"]:checked ~ ul li {
  color: yellow;
  transform: translateY(0);
}

/***********************************
************************************/

footer {
  background: #071d0d;
  color: #fff;
  padding: 60px 0px;
  min-height: 270px;
  margin-top: 80px;
}

.sub_footer {
  background: rgb(38, 87, 52);
}

.sub_footer p {
  padding: 20px 0px 20px;
  color: #fff;
}

.footer_links_title {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  color: #fff;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  margin-bottom: 25px;
}

.footer_links_about {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #acaab3;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  text-align: justify;
  line-height: 1.4;
  margin: 10px 15px 15px 0px;
}

.footer_links_title::after {
  display: block;
  position: relative;
  top: 7px;
  width: 20%;
  height: 1px;
  background: #c7ccc7;
  content: "";
}

.footer_links {
  margin: 10px 0px;
}

.footer_links i {
  width: 25px;
}

.footer_links a {
  color: #acaab3;
  display: block;
  font-size: 15px;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  transition: 0.3s all;
  margin: 5px 0px;
}

.footer_links a:hover {
  color: #fff;
  text-shadow: none;
}
</style>
