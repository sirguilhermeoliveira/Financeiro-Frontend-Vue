<template>
  <div class="container-form">
    <form @submit.prevent="EnvioLogin" id="formulario" v-if="showLogin">
      <h1 id="form">NC</h1>
      <h3 id="form">Bem-Vindo ao NC Consultoria</h3>
      <h3 id="form">Gestão Financeira</h3>
      <div class="form-group">
        <input
          type="usuario"
          class="form-control"
          v-model="email"
          placeholder="USUARIO"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          v-model="password"
          placeholder="SENHA"
        />
      </div>
      <button class="btn btn-primary btn-block" id="Entrar">Entrar</button>
      <div class="error" v-if="showError">Usuário ou senha inválidos</div>
      <h5 id="form">Desenvolvido por Controlle10 Sistemas © 2020</h5>
    </form>
    <div class="rotas" v-if="!showLogin">
      <router-link to="/intermediorotas"></router-link>
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "login",

  data() {
    return {
      showError: false,
      showLogin: true,
      email: "",
      password: "",
    };
  },
    created() {
   this.getUsers();
  },

  methods: {
    async getUsers() {
      const response = await axios.get("api/users", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      console.log(response);
    },
    async EnvioLogin() {
      try {
        const response = await axios.post("api/auth/login", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("token", response.data.token);
        if (response.status == "200") {
          this.getUsers();
          console.log(response);
          this.$router.push("intermediorotas");
          this.showLogin = false;
        }
      } catch (error) {
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
        }, 2000);
      }
    },
  },
};
</script>



<style>
.error {
  background: #ed213a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #93291e,
    #ed213a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #93291e,
    #ed213a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border: 1px solid red;
  border-radius: 5px;

  color: whitesmoke;
  height: 50px;
  width: 313px;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  margin-left: 522px;
  padding-top: 7px;
}

h1#form {
  font-size: 243px;
  opacity: 15%;

  font-weight: bolder;
  margin: 0px;
}
h3#form {
  color: gainsboro;
  font-size: 20px;
  margin: 0px;
  font-size: 19px;
  font-family: monospace;
}
h5#form {
  text-align: center;
  color: gainsboro;
  margin-top: 0px;
}
input.form-control {
  border: 1px solid hsla(120, 100%, 0%, 0.1);
  color: gray;
  display: inline-block;
  height: 30px;
  width: 300px;
  margin: 0px;
  opacity: 70%;
  margin-top: 12px;
  background: whitesmoke;
}
#Entrar {
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border: 1px solid black;
  border-radius: 5px;
  width: 105px;
  cursor: pointer;
  color: skyblue;
  height: 40px;
  width: 311px;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  margin: 6px;
  text-decoration: none;
  margin-top: 12px;
}

form#formulario {
  width: 100%;
  height: 50px;
  line-height: 40px; /*  espaçamento entre as linhas */
  text-align: center;
  color: white;

  /* pura mágica */
  position: absolute;
  top: 25%; /* posiciona na metade da tela */
}
.container-form {
  display: flex;
  flex-wrap: wrap;
}

* {
  background: #bdc3c7;
  background: -webkit-linear-gradient(
    to right,
    #bdc3c7,
    #2c3e50
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #bdc3c7, #2c3e50);
}
</style>

