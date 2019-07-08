<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Hind');
@import url('https://fonts.googleapis.com/css?family=Fira+Sans+Condensed');
@import url(https://fonts.googleapis.com/css?family=Raleway);

* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;
  outline: 0;
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
input[type='button'],
input[type='reset'],
input[type='submit'] {
  -webkit-appearance: button;
  cursor: pointer;
}

input[type='email']:focus,
input[type='password']:focus,
input[type='text']:focus {
  border: 2px solid #078a06;  
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
.login-screen {
  background-image: url('./assets/img/bg-overlay.jpg');
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.app-title {
  margin: 5px 0px 30px;
  text-align: center;
  color: rgb(20, 20, 20);
  text-transform: uppercase;
}

.login-form {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ecf0f1;
  border: 2px solid rgb(185, 185, 185);
  border-radius: 5px;
}

.label-form {
  text-align: left !important;
  color: rgb(20, 20, 20);
  margin-bottom: 5px;
  font-size: 15px;
  font-family: sans-serif;
  font-weight: 600;
}

.container-registro {
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 50px 0 50px 0;
}

.form-registro-animal {
  margin: 20px;
  flex-direction: column;
}

.container-logs-leiloes {
  margin: 20px;
  display: flex;
  justify-content: right;
  flex-direction: column;
}

.input-group {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 20px;
}

.help-log {
  background-color: darkred;
  color: white;
  border-radius: 5px;
  padding: 3px;
}

.label-info {
  color: green;
  font-weight: bold;
}

.input-info {
  width: 100%;
  border: none;
  border-bottom: 2px solid green;
  margin-top: 5px;
  margin-right: 5px;
}

.control-group {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.error label {
  color: #cc0033 !important;
}

.error input {
  background-color: #fce4e4 !important;
  outline: none;
}

.error input:focus {
  border: 2px solid #cc0033 !important;
}

.error-message {
  display: none;
}

.error .error-message {
  color: #cc0033 !important;
  display: inline-block;
  font-size: 12px;
  line-height: 15px;
  margin: 5px 0 0;
  text-align: justify;
}

.legenda-form {
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  display: block;
  width: 100%;
  margin: 5px 0px 10px;
}

.legenda-form i {
  font-size: 11px;
}

@media screen and (max-width: 424px) {
  input {
  }
  .login-form {
    padding: 50px 30px;
  }
  .error .error-message {
    width: 200px;
  }
}

@media screen and (max-width: 767px) and (min-width: 425px) {
  input {
    width: 230px;
  }
  .login-form {
    padding: 50px 60px;
  }
  .error .error-message {
    width: 230px;
  }
}

@media screen and (min-width: 768px) {
  input {
    width: 320px;
  }
  .login-form {
    padding: 50px 60px;
  }
  .error .error-message {
    width: 320px;
  }
}

input {
  text-align: left;
  background-color: #ecf0f1;
  border: 2px solid #adadad;
  border-radius: 2px;
  font-size: 15px;
  font-weight: 200;
  padding: 10px 5px;
  transition: border 0.5s;
}

input::placeholder {
  font-weight: 500;
}

input:focus {
  box-shadow: none;
  outline: 0;
}

input[type='text']:focus {
  border: 2px solid #189217;
  box-shadow: none;
  outline: 0;
}

.btn {
  text-align: center;
  border: 2px solid transparent;
  background: #078a06;
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
  width: 100%;
  margin: 2px auto;
}

.btn-picture{
  color: white;
  padding: 10px;
  border:none;
  background-color: #078a06;
  margin: 5px;
  transition: all .3s;
}

.btn-picture:hover{
  transform: scale(.9);
}

.red{
  background-color: darkred;
}

.btn:hover {
  background-color: transparent;
  color: #078a06;
  border: 2px solid #078a06;
}

.links {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login-link {
  transition: all 0.3s;
  font-size: 13px;
  color: #000;
  display: block;
  margin: 20px 0px 12px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid green;
  background-color: transparent;
  cursor: pointer;
}
.login-link:hover {
  transform: scale(1.1);
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
  font-family: 'Poppins', sans-serif;
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
.header li a:focus,
.header .menu-btn:hover,
.header .menu-btn:focus  {
  color: #ffffff !important;
  background: #078a06;  
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

.slide-fade-enter-active {
  transition: all 0.3s ease-in;
}
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
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
  content: '';
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
  width: 150px;
  cursor: pointer;
  transition: all 0.3s;
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

.logo:focus,
.logo:hover {
}

.main_banner {
  height: 650px;
  background-image: url('./assets/img/banner_4.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  align-items: center;
  background-attachment: fixed;
}
.main_banner_interno {
  height: 300px !important;
  background-image: url('./assets/img/banner_4.jpg');
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
  height: 175px;
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
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #078a06;
}

.label-timer-leilao {
  font-size: 25px;
  text-align: center;
}

.timer-leilao,
.label-timer-leilao {
  color: #ffffff;
  font-weight: bold;
  text-align: center;
}

.form-lance {
  max-width: 100%;
  margin: 25px 0px;
}

.form-lance label {
}

.input-valor {
}

.help {
  color: #024e02;
}

.bolder {
  font-weight: bold;
  padding: 5px;
}
.editavel {
  border: 2px solid green;
  color: #078a06;
  font-weight: bold;
}

.input-group {
  margin: 10px 0 10px 0;
}

.alert {
  width: 100%;
  background-color: #34aa10;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0 10px 0;
  opacity: 0.9;
}

.btn-lance {
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  line-height: 20px;
  padding: 10px;
  width: 100%;
  font-family: 'Hind', sans-serif;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 3px #201f1d;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #78c754), to(#397a18));
  background: linear-gradient(to bottom, #78c754 5%, #397a18 100%);
  background-color: #78c754;
  border: 1px solid #3b6e22;
  -webkit-box-shadow: 0px 0px 0px 0px #9acc85;
  box-shadow: 0px 0px 0px 0px #9acc85;
  border: none;
  cursor: pointer;
  margin: 10px 0px;
}
.btn-lance:disabled{
  opacity: .8;
  cursor: not-allowed;
}

.btn-lance:hover {
  -webkit-box-shadow: 0px 0px 0px 0px #9acc85;
  box-shadow: 0px 0px 0px 0px #9acc85;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(5%, #64a745), to(#336d16));
  background: linear-gradient(to bottom, #64a745 5%, #336d16 100%);
  background-color: #67a849;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  border-radius: 50%;
}

.foto-lukas{
  width: 200px;
  height: 200px;
}

.perfil {
  margin: 25px 0px;
  border-bottom: #078a06 2px solid;
}

.nome {
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  padding-bottom: 5px;
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

.sobre-nos-content {
  text-align: justify;
  line-height: 23px;
  margin: 30px 0px 60px;
}

.main_banner_content {
  width: 65%;
}

.main_banner_content .sec_main_title {
  font-size: 25px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
  font-family: 'Fira Sans Condensed', sans-serif;
  margin-bottom: 5px;
  text-shadow: 1px 1px 4px rgb(255, 255, 255);
}

@media (max-width: 600px) {
  .main_banner_content .main_title {
    font-size: 45px !important;
  }
  .container-lista-leilao {
    flex-direction: column !important;
  }
  .menu li a {
    color: white;
    font-weight: bold;
    background-color: #078a06;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
  }
  .login-container {
    display: flex;
    flex-direction: column !important;
  }
  .ver_mais_btn {
    width: 90vw !important;
  }
  .ver_mais_btn a {
    width: 100%;
  }
}

.main_banner_content .main_title {
  font-size: 65px;
  font-weight: 400;
  line-height: 1;
  font-family: 'Fira Sans Condensed', sans-serif;
  text-shadow: 1px 2px 4px rgb(224, 205, 205);
  margin-bottom: 25px;
}

.ver_mais_btn a {
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  line-height: 20px;
  padding: 10px;
  width: 200px;
  font-family: 'Hind', sans-serif;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 3px #201f1d;
  background-color: #2b2b2b;
  border: none;
  cursor: pointer;
  margin: 0px 20px 0px 0px;
}

.ver_mais_btn a:hover,
.ver_mais_btn a:focus {
  text-decoration: underline;
}

.ver_mais_btn .criar_leilao {
  width: 300px;
}

.center_block {
  display: block !important;
  margin: auto;
}

.ver_mais_btn {
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: row;
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
  height: 300px;
  background-color: #078a06;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-top: 30px;
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
  overflow: hidden;
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
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  margin: auto;
  padding-bottom: 50px;
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
  content: '';
}

.link-social .fab {
  margin: 8px 10px;
}

.link-social:link,
.link-social:visited {
  text-decoration: underline;
  color: #024e02;
}


.link-social:focus,
.link-social:hover {
  background: #024e02;
  color: #fff;
}

.fab {
  font-size: 25px !important;
  margin: 8px 10px 8px 0px;
}

.footer_links .fab, .footer_links_grid .fab {
  font-size: 20px !important;  
}

.descricao {
  text-align: justify;
  font-size: 14px;
  line-height: 24px;
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
  border: 1px solid #024e02;
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
  font-family: 'Hind', sans-serif;
  font-size: 25px;
  font-weight: 600;
  color: #1d3119;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  margin-top: 25px;
}

.section_title_container::after {
  display: block;
  top: calc(100% + 13px);
  width: 40%;
  height: 3px;
  background: #34aa10;
  content: '';
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
  font-family: 'Hind', sans-serif;
  color: #1d3119;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  background-image: url(./assets/img/filter_icon.png);
  background-repeat: no-repeat;
  background-position: 3px -5px;
  background-size: 30px;
  cursor: pointer;
  display: block;
}

input[type='radio'] {
  display: none;
  position: absolute;
}

input[type='radio']:checked ~ ul li {
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
}

.sub_footer {
  background: rgb(38, 87, 52);
}

.sub_footer p {
  padding: 20px 0px 20px;
  color: #fff;
}

.footer_links_title {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  color: #fff;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  margin-bottom: 25px;
}

.footer_links_about {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #acaab3;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  text-align: justify;
  line-height: 1.6;
  margin: 10px 15px 15px 0px;
}

.footer_links_title::after {
  display: block;
  position: relative;
  top: 7px;
  width: 20%;
  height: 1px;
  background: #c7ccc7;
  content: '';
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
}

.footer_links li {
  margin: 10px 0px;
}

.footer_links a:focus, .footer_links a:hover, .footer_links_grid a:focus, .footer_links_grid a:hover {
  color: #fff;
  text-shadow: none;
  text-decoration: underline;
}

.footer_links_grid a {  
  color: #acaab3;
  display: block;
  font-size: 15px;
  text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  transition: 0.3s all;  
  display: grid;
  grid-template-columns: 1fr 12fr;
  grid-gap: 1rem;
  align-items: center;
}

/*********************************
Página de contato
*********************************/

.main_banner_300 {
  height: 300px !important;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-attachment: fixed;
}

.banner_4 {
  background-image: url('./assets/img/banner_4.jpg');
}

.container_page {
  margin: 80px 0px 120px 0px;
}

.main_title_2 {
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
}

@media screen and (min-width: 1200px) {
  .main_title_2::after {
    position: absolute;
    top: calc(50%);
    right: calc(50% + 150px);
    width: 15%;
    height: 1.5px;
    background: #34aa10;
    content: '';
  }

  .main_title_2::before {
    position: absolute;
    top: calc(50%);
    right: calc(50% - 330px);
    width: 15%;
    height: 1.5px;
    background: #34aa10;
    content: '';
  }
}

.content_page {
  margin: 30px 0px;
  width: 100%;
}

.descritive_paragraph {
  text-align: justify;
  font-size: 14.5px;
  color: #000;
  line-height: 27px;
}

.icon_st_1 {
  font-size: 25px !important;
  vertical-align: middle;
  margin: 2.5px 10px 2.5px 0px;
}

.sub_title {
  display: block;
  text-align: left;
  font-size: 17px;
  color: #000;
  font-weight: bold;
  margin: 40px 0px 5px;
}

.social_desc {
  font-size: 14px;
  color: #282828;
  text-decoration: underline;
}

.social_desc:after {
  content: ' ';
  display: block;
}

.social_desc:hover {
  cursor: pointer;
  color: #071d0d;
}

.descritive_paragraph .link {
  color: blue;
  text-decoration: underline;
}

.descritive_paragraph .link:hover {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}

.contact_desc {
  font-size: 15.5px;
  color: #282828;
}

.contact_desc:after {
  content: ' ';
  display: block;
}
.address_section {
  margin-bottom: 10px;
}

.bread i {
  font-size: 14px;
  padding: 0px 10px 0px 0px;
}

.bread a {
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1;
  font-family: 'Fira Sans Condensed', sans-serif;
  margin: 10px 0px;
  text-shadow: 1px 1px 4px rgb(255, 255, 255);
  padding: 10px 10px 0px 0px;
  color: #282828;
  transition: all 0.3s;
}

.bread {
  margin: 20px 0px;
}

.bread a:hover, .bread a:focus {
  cursor: pointer;
  text-decoration: underline;
  font-size: 21px;
}

img {
  object-fit: cover;
  width: 100%;
}

.topico_leilao {
  margin: 0px;
  width: 100%;
}

.topico_leilao h2 {
  font-size: 20px;
  font-weight: bold;
}

.detalhes-leilao {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  margin: 15px 0px;
  grid-gap: 5px 25px;
  justify-items: left;
}

.input-100 {
  width: 100%;
}

.secondary_text_infos {
  color: #000;
}

.card-home {
  border: 3px solid #024e02;
  height: 450px;
  margin: 40px 0px;
  background: #f8fff8;
}

.card-home h3 {
  text-align: center;
  margin: 30px 0px;
  font-size: 35px;
  font-weight: 400;
  line-height: 1;
  font-family: 'Fira Sans Condensed', sans-serif;
}

.card-home p {  
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;
  color: #000;
  margin: 20px;
  text-align: justify;
  height: 160px;
}

.card-home a {
  text-decoration: underline;
}

.btn-card {
  display: block;
  padding: 20px 40px;
  text-align: center; 
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  line-height: 20px;
  width: 80%;
  font-family: 'Hind', sans-serif;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 3px #201f1d;
  background-color: #2b2b2b;
  border: none;
  cursor: pointer;
  margin: 60px auto;
}
</style>

