<template>
  <div>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    >
    <link rel="stylesheet" type="text/css" href="css/boots.css">
    <link rel="stylesheet" type="text/css" href="css/olxifres.css">
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

<style>
</style>
