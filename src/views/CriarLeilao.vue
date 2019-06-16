<template>
  <HeaderInterno v-bind:view="view"/>
</template>

<script>
import HeaderInterno from '../components/layout/HeaderInterno';

export default {
  name: 'CriarLeilao',
  components: {
    HeaderInterno,
  },
  data() {
    return {
      view: 'Veja os leilões ativos',
    };
  },
};
</script>

<style>
</style>
