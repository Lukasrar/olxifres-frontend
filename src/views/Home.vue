<template>
  <div class="home">
    <Header/>
    <InfosHeader/>
    <UltimosLeiloes/>
    <Destaque/>
    <LeiloesAtivos/>
  </div>
</template>

<script>
import Header from "../components/layout/Header";
import InfosHeader from "../components/layout/InfosHeader";
import UltimosLeiloes from "../components/layout/UltimosLeiloes";
import Destaque from "../components/layout/Destaque";
import LeiloesAtivos from "../components/layout/LeiloesAtivos";

export default {
  name: "home",
  components: {
    Header,
    InfosHeader,
    UltimosLeiloes,
    Destaque,
    LeiloesAtivos
  }
};
</script>
