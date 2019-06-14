<template>
  <div>
    <header class="header">
      <div class="coluna-small-5 coluna-larg-2">
        <div class="container-logo">
          <a class="logo" href="index.html">
            OLX
            <span>ifres</span>
          </a>
        </div>
      </div>
      <input class="menu-btn" type="checkbox" id="menu-btn">
      <ul class="menu">
        <li>
          <a href="index.html" class="active">Início</a>
        </li>
        <li>
          <a href="listagem.html">Leilões</a>
        </li>
        <li>
          <a href="sobre-nos.html">Sobre nós</a>
        </li>
        <li>
          <a href="contato.html">Contato</a>
        </li>
        <li>
          <a href="login.html">
            <i class="fa fa-user" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      <label class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
      </label>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Hind");
@import url("https://fonts.googleapis.com/css?family=Fira+Sans+Condensed");
@import url(https://fonts.googleapis.com/css?family=Raleway);
* {
  margin: 0;
  padding: 0;
  font-family: "Hind", sans-serif;
}

body {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  line-height: 23px;
  font-weight: 400;
  background: #fff;
  color: #201f1d;
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
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #078a06;
  margin-bottom: 59px;
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
  padding: 20px 20px;
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

</style>
