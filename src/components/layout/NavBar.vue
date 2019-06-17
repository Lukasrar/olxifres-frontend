<template>
  <header class="header">
    <div class="coluna-small-5 coluna-larg-2">
      <div class="container-logo">
        <router-link tag="a" to="/" >
          <img class="logo" src="../../assets/img/logo.png">
        </router-link>
      </div>
    </div>
    <input class="menu-btn" type="checkbox" id="menu-btn">
    <ul class="menu">
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
          <router-link tag="a" class="fa fa-user" aria-hidden="true" to="/login"></router-link>
        </a>
      </li>
    </ul>
    <label class="menu-icon" for="menu-btn">
      <span class="navicon"></span>
    </label>
  </header>
</template>

<script>
<style />;
