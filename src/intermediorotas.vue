<template>
<div id="estilo">
  <h1>Intermediário para Rotas</h1>
    <router-link to="/despesas">Despesas</router-link>
    <router-link to="/receitas">Receitas</router-link>
 <br>
 <br>

    <router-view></router-view>

    </div>
</template>

<script>

/* import novofooter from './../components/novofooter.vue'
import novomenu from './../components/novomenu.vue' */

export default {

  name: 'intermediorotas',
  components:  {
/*
    novofooter,
    novomenu, */
  },
}
</script>

<style>
*{
  background:none;
}
div#estilo{
 width: 100%;
  height: 50px;
  text-align: center;
  background-color:black;
  color: white;
  padding-bottom: 20px;

  /* pura mágica */
  position: absolute;
 /* posiciona na metade da tela */
}
</style>
