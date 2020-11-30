<template>
  <div>
    <html lang="pt-br">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />

      <div class="container-esquerda">
        <section id="corpo">
          <div id="titulodespesa">
            <legend>Nova Receita</legend>
          </div>
          <form method="POST" id="fdespesa">
            <input type="hidden" name="id" v-model="despesa.id" />
            <fieldset id="usuario">
              <p id="despesa">
                <select
                  v-model="despesa.des"
                  @change="$refs.modalName2.openModalSelect()"
                >
                  <option value="">
                    Tipo de Receita - Ex.: Vendas, Serviços...
                  </option>
              <option value="Antecipação de Crédito">Antecipação de Crédito</option>
              <option value="Aporte Capital Giro">Aporte Capital Giro</option>
              <option value="Deposito Bancário">Deposito Bancário</option>
              <option value="Empréstimo">Empréstimo</option>
              <option value="Plano de Saúde">Plano de Saúde</option>
              <option value="Rendimento CDI">Rendimento CDI</option>
              <option value="Venda a Vista">Venda a Vista</option>
              <option value="Venda Cartão Crédito">Venda Cartão Crédito</option>
              <option value="Venda Cartão Débito">Venda Cartão Débito</option>
                  <option
                    v-for="select_tres in selects_tres"
                    v-bind:key="select_tres.id"
                    :value="select_tres.receitanovadespesa"
                  >
                    {{ select_tres.receitanovadespesa }}
                  </option>
                  <option value="New">+ Novo Tipo Receita...</option>
                </select>
              </p>

              <p id="valor">
                <a id="valoo"><label for="cTot">Valor</label> R$ </a
                ><input
                  type="number"
                  name="tTot"
                  v-model="despesa.valr"
                  id="cTot"
                  placeholder="0,00"
                  min="0"
                  max="9999999"
                />
              </p>

              <p id="emissao">
                <a id="emiss">Emissão</a>
                <input
                  type="date"
                  name="temissao"
                  v-model="despesa.emiss"
                  id="cemissao"
                />
              </p>

              <p id="vencimento" v-if="!showLiquid">
                <a id="vencim">Vencimento</a>
                <input
                  type="date"
                  name="tvencimento"
                  v-model="despesa.vencc"
                  id="cvencimento"
                />
              </p>
              <p id="liquidado" v-if="showLiquid">
                <a id="liquidd">Liquidação </a>
                <input
                  type="date"
                  name="tvencimento"
                  id="cliquidado"
                  v-model="despesa.vencc"
                />
              </p>
              <fieldset id="ident">
                <button
                  type="button"
                  v-if="!showLiquid"
                  id="myButtonazulzao"
                  checked
                  href="#"
                  @click="showLiquid = false"
                  v-on:click="sttfuncatv()"
                >
                  Ativo
                </button>
                <button
                  type="button"
                  v-if="!showLiquid"
                  href="#"
                  id="myButton"
                  @click="showLiquid = true"
                  v-on:click="sttfuncliq()"
                >
                  Liquidação
                </button>
                <button
                  type="button"
                  v-if="showLiquid"
                  id="myButton"
                  checked
                  href="#"
                  @click="showLiquid = false"
                  v-on:click="sttfuncatv()"
                >
                  Ativo
                </button>
                <button
                  type="button"
                  v-if="showLiquid"
                  href="#"
                  id="myButtonazulzao"
                  @click="showLiquid = true"
                  v-on:click="sttfuncliq()"
                >
                  Liquidação
                </button>
              </fieldset>
            </fieldset>
            <div id="salvar">
              <button
                type="button"
                class="btn btn-primary"
                @click="addDespesa()"
              >
                Salvar
              </button>
            </div>
          </form>
        </section>
      </div>

      <div class="container-direita">
        <section id="corpo2">
          <div id="titulodespesa2" @click="showText = !showText">
            <legend>Minhas Receitas</legend>
          </div>
          <div id="tabela" v-if="showText">
            <tr>
              <th id="vazio"></th>
              <th id="tipo">Tipo</th>
              <th id="valor">Valor R$</th>
              <th id="venc">Venc</th>
              <th id="st">ST</th>
              <th id="emissao">Emissão</th>
            </tr>
            <tr v-for="despesa in despesas" :key="despesa.id">
              <td id="icone">
                <button
                  type="button"
                  @click="
                    editDespesa(despesa), $refs.modalName.openModal(despesa)
                  "
                >
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
              </td>
              <td id="primeiro">{{ despesa.des }}</td>
              <td>{{ despesa.valr }}</td>
              <td>{{ despesa.vencc }}</td>
              <td>{{ despesa.stt }}</td>
              <td>{{ despesa.emiss }}</td>
              <td>
                <button
                  type="button"
                  @click.prevent="deleteDespesa(despesa.id)"
                >
                  <i class="deletar">[X]</i>
                </button>
              </td>
            </tr>
          </div>
        </section>

        <div class="container-modal1">
          <modal ref="modalName">
            <template v-slot:header>
              <h1>Gerenciar Receita</h1>
            </template>

            <template v-slot:body>
              <section id="corponovo">
                <div id="titulodespesanovo">
                  <legend>Nova Receita</legend>
                </div>
                <form id="fdespesanovo">
                  <fieldset id="usuarionovo">
                    <p id="despesanovo">
                <select
                  v-model="despesa.des"
                  @change="$refs.modalName2.openModalSelect()"
                >
                        <option value="">
                          Tipo de Receita - Ex.: Vendas, Serviços...
                        </option>
              <option value="Antecipação de Crédito">Antecipação de Crédito</option>
              <option value="Aporte Capital Giro">Aporte Capital Giro</option>
              <option value="Deposito Bancário">Deposito Bancário</option>
              <option value="Empréstimo">Empréstimo</option>
              <option value="Plano de Saúde">Plano de Saúde</option>
              <option value="Rendimento CDI">Rendimento CDI</option>
              <option value="Venda a Vista">Venda a Vista</option>
              <option value="Venda Cartão Crédito">Venda Cartão Crédito</option>
              <option value="Venda Cartão Débito">Venda Cartão Débito</option>
                        <option
                          v-for="select_tres in selects_tres"
                          v-bind:key="select_tres.index"
                          :value="select_tres.receitanovadespesa"
                        >
                          {{ select_tres.receitanovadespesa }}
                        </option>
                        <option value="New">
                          + Novo Tipo Receita...
                        </option>
                      </select>
                    </p>

                    <p id="valornovo">
                      <a id="valoonovo"><label for="cTot">Valor</label> R$ </a
                      ><input
                        type="number"
                        name="tTot"
                        v-model="despesa.valr"
                        id="cTotnovo"
                        placeholder="0,00"
                        min="0"
                        max="9999999"
                      />
                    </p>

                    <p id="emissaonovo">
                      <a id="emissnovo">Emissão</a>
                      <input
                        type="date"
                        name="temissao"
                        v-model="despesa.emiss"
                        id="cemissaonovo"
                      />
                    </p>

                    <p id="vencimentonovo" v-if="!showLiquid">
                      <a id="vencimnovo">Vencimento</a>
                      <input
                        type="date"
                        name="tvencimento"
                        v-model="despesa.vencc"
                        id="cvencimentonovo"
                      />
                    </p>
                    <p id="liquidadonovo" v-if="showLiquid">
                      <a id="liquiddnovo">Liquidação </a>
                      <input
                        type="date"
                        name="tvencimento"
                        id="cliquidadonovo"
                        v-model="despesa.vencc"
                      />
                    </p>
                    <fieldset id="identnovo">
                      <button
                        type="button"
                        v-if="!showLiquid"
                        id="myButtonazulzao"
                        checked
                        href="#"
                        @click="showLiquid = false"
                        v-on:click="sttfuncatv()"
                      >
                        Ativo
                      </button>
                      <button
                        type="button"
                        v-if="!showLiquid"
                        href="#"
                        id="myButton"
                        @click="showLiquid = true"
                        v-on:click="sttfuncliq()"
                      >
                        Liquidação
                      </button>
                      <button
                        type="button"
                        v-if="showLiquid"
                        id="myButton"
                        checked
                        href="#"
                        @click="showLiquid = false"
                        v-on:click="sttfuncatv()"
                      >
                        Ativo
                      </button>
                      <button
                        type="button"
                        v-if="showLiquid"
                        href="#"
                        id="myButtonazulzao"
                        @click="showLiquid = true"
                        v-on:click="sttfuncliq()"
                      >
                        Liquidação
                      </button>
                    </fieldset>
                  </fieldset>
                  <div id="salvarnovo">
                    <div class="form-group">
                      <button
                        class="btn btn-primary"
                        @click="
                          updateDespesa(despesa), $refs.modalName.closeModal()
                        "
                      >
                        Salvar
                      </button>
                    </div>
                  </div>
                </form>
              </section>
            </template>
          </modal>
        </div>

        <div class="container-modal2">
          <modal ref="modalName2">
            <template v-slot:header>
              <h1>Nova Receita</h1>
            </template>

            <template v-slot:body>
              <form>
                <div class="modal2borda">
                  <input
                    type="text"
                    id="modal2item1"
                    placeholder="Descrição"
                    v-model="select_tres.receitanovadespesa"
                  />
                  <select
                    id="modal2item2"
                    @change="$refs.modalName3.openModalSelect()"
                  >
                    <option value="">Plano de Contas</option>
                    <option value="Custos Fixos">
                      3.1 - Custos Fixos (Custos Fixos)
                    </option>
                    <option value="Custos Variáveis">
                      4.1 - Fornecedores (Custos Variáveis)
                    </option>
                    <option value="Salários">
                      5.1 - Salários (Despesas Fixas)
                    </option>
                    <option value="Farmácia">
                      5.2 - Farmácia (Despesas Fixas)
                    </option>
                    <option value="Alimentação">
                      6.1 - Alimentação (Despesas Variáveis)
                    </option>
                    <option value="Empréstimos">
                      7.1 - Empréstimos (Despesas Não Operacionais)
                    </option>
                    <option value="Impostos">
                      8.1 - Impostos (Impostos e Taxas)
                    </option>
                    <option value="Taxa Localização">
                      8.2 - Taxa Localização (Impostos e Taxas)
                    </option>
                    <option value="Investimentos">
                      9.1 - Investimentos (Investimentos Financeiros)
                    </option>
                    <option value="Distribuição de Lucros">
                      10.1 - Distribuição de Lucros
                    </option>
                    <option value="Saques">11.1 - Saques (Saques)</option>
                    <option value="Fundo de Caixa">
                      12.1 - Fundo de Caixa (Fundo de Caixa)
                    </option>
                    <option value="Capital de Giro">
                      13.1 - Capital de Giro (Capital de Giro)
                    </option>
                    <option
                      v-for="select_quatro in selects_quatro"
                      v-bind:key="select_quatro.id"
                      :value="select_quatro.receitanovoplanocontas"
                    >
                      {{ select_quatro.receitanovoplanocontas }}
                    </option>
                    <option value="New">+ Novo Plano Contas</option>
                  </select>
                  <div id="modalsalvarnovo">
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="addNovaDespesa(), $refs.modalName2.closeModal()"
                    >
                      Salvar
                    </button>
                  </div>
                </div>
              </form>
            </template>
          </modal>
        </div>

        <div class="container-modal2">
          <modal ref="modalName3">
            <template v-slot:header>
              <h1>Novo Plano Contas</h1>
            </template>

            <template v-slot:body>
              <form>
                <div class="modal2borda">
                  <input
                    type="text"
                    id="modal2item1"
                    placeholder="Descrição"
                    v-model="select_quatro.receitanovoplanocontas"
                  />
                  <select id="modal2item2">
                    <option value="">Plano Contas</option>
                    <option value="Custos Fixos">3 - Receitas Fixos</option>
                    <option value="Custos Variáveis">
                      4 - Custos Variáveis
                    </option>
                    <option value="Despesas Fixas">5 - Receitas Fixas</option>
                    <option value="Despesas Variáveis">
                      6 - Receitas Variáveis
                    </option>
                    <option value="Despesas Não Operacionais">
                      7 - Receitas Não Operacionais
                    </option>
                    <option value="Impostos e Taxas">
                      8 - Impostos e Taxas
                    </option>
                    <option value="Investimentos Financeiros">
                      9 - Investimentos Financeiros
                    </option>
                    <option value="Distribuição de Lucros">
                      10 - Distribuição de Lucros
                    </option>
                    <option value="Saques">11 - Saques</option>
                    <option value="Fundo de Caixa">12 - Fundo de Caixa</option>
                    <option value="Capital de Giro">
                      13 - Capital de Giro
                    </option>
                  </select>
                  <div id="modalsalvarnovo">
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="
                        addNovoPlanoContas(), $refs.modalName3.closeModal()
                      "
                    >
                      Salvar
                    </button>
                  </div>
                </div>
              </form>
            </template>
          </modal>
        </div>
      </div>
    </html>
  </div>
</template>














<script>
import axios from "axios";
import Modal from "./../modal/Modal.vue";
export default {
  name: "despesas",
  components: {
    Modal,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      showText: true,
      showVenc: true,
      showLiquid: false,
      showMarcado: true,
      despesas: [],
      selects_tres: [],
      selects_quatro: [],
      select_tres: {
        receitanovadespesa: "",
      },
      select_quatro: {
        receitanovoplanocontas: "",
      },
      despesa: {
        des: "",
        valr: "",
        vencc: "",
        stt: "AT",
        emiss: "",
      },
    };
  },
  created() {
    this.getDespesa(), this.getSelect(), this.getSelectDois();
  },
  methods: {
    async getDespesa() {
      const response = await axios
        .get("api/receitas")
        .then((response) => {
          this.despesas = response.data.data;
        })
        .catch(function (error) {
          console.warn(error);
        });
    },
    async getSelect() {
      const response = await axios
        .get("api/selects_tres")
        .then((response) => {
          this.selects_tres = response.data.data;
        })
        .catch(function (error) {
          console.warn(error);
        });
    },
    async getSelectDois() {
      const response = await axios
        .get("api/selects_quatro")
        .then((response) => {
          this.selects_quatro = response.data.data;
        })
        .catch(function (error) {
          console.warn(error);
        });
    },
    async deleteDespesa(id) {
      if (confirm("Você quer mesmo deletar?")) {
        const response = await axios
          .delete("api/receitas/" + id)
          .then((response) => {
            this.despesas.splice(this.despesas.indexOf(id), 1);
            this.getDespesa();
          });
      }
    },

    async addNovoPlanoContas() {
      let uri = "api/selects_quatro";
      const response = await axios
        .post(uri, this.select_quatro)
        .then((response) => {
          this.selects_quatro.push({
            select_quatro: this.select_quatro.receitanovoplanocontas,
          });
          this.getSelectDois();
        });
    },
    async addNovaDespesa() {
      let uri = "api/selects_tres";
      const response = await axios
        .post(uri, this.select_tres)
        .then((response) => {
          this.selects_tres.push({
            select_tres: this.select_tres.receitanovadespesa,
          });
          this.getSelect();
        });
    },
    async addDespesa() {
      let uri = "api/receitas";
      const response = await axios.post(uri, this.despesa).then((response) => {
        this.despesas.push({
          des: this.despesa.des,
          valr: this.despesa.valr,
          stt: this.despesa.stt,
          vencc: this.despesa.vencc,
          emiss: this.despesa.emiss,
        });
        this.despesa.des = "";
        this.despesa.valr = "";
        this.despesa.vencc = "";
        this.despesa.stt = "";
        this.despesa.emiss = "";
        this.getDespesa();
      });
    },
    async updateDespesa(despesa) {
      const response = await axios
        .put("api/receitas/" + despesa, {
           des: this.despesa.des,
          valr: this.despesa.valr,
          vencc: this.despesa.vencc,
          stt: this.despesa.stt,
          emiss: this.despesa.emiss,
        })

        .then((response) => {
          console.log(response.data);
          this.despesa.id = "";
          this.despesa.valr = "";
          this.despesa.stt = "AT";
          this.despesa.vencc = "";
          this.despesa.emiss = "";
          this.getDespesa();
          alert("Usuário Alterado!");

        })
        .catch((err) => {
          console.log(err);
        });
    },
    editDespesa(despesa) {
       this.despesa.des = despesa.des;
      this.despesa.valr = despesa.valr;
      this.despesa.vencc = despesa.vencc;
      this.despesa.emiss = despesa.emiss;
    },
    sttfuncatv() {
      this.despesa.stt = "AT";
    },
    sttfuncliq() {
      this.despesa.stt = "LI";
    },
    sttfuncatv2() {
      this.despesa.stt = "AT";
    },
    sttfuncliq2() {
      this.despesa.stt = "LI";
    },
  },
};
</script>



 <style scoped>
.container-direita {
  display: flex;
  flex-wrap: wrap;
  float: right;
}
section#corpo2 {
  display: block;
  width: 850px;
  font-size: 16px;
  padding-right: 0px;
  margin-left: 30px;
  margin-top: 5px;
  border: 1px solid green;
  border-radius: 5px;
}
#titulodespesa2 {
  background: #1d976c;
  background: -webkit-linear-gradient(to right, #1d976c, #93f9b9);
  background: linear-gradient(to right, #1d976c, #93f9b9);
  padding: 6px;
  text-align: center;
  color: whitesmoke;
  margin: 0px;
  font-weight: bold;
  font-size: 15px;
}
div#tabela {
  font-family: arial, sans-serif;
  margin-top: 10px;
  font-size: 13px;
  opacity: 50%;
}
div#tabela td,
th {
  padding: 8px;
  text-align: center;
  width: 144px;
}
div#tabela td {
  border-top: 1px solid gray;
  text-align: middle;
  padding-left: 10px;
  padding-bottom: 20px;
}
div#tabela tr:nth-child(even) {
  background-color: #dddddd;
  opacity: 80%;
}
div#tabela td {
  padding-bottom: 9px;
  padding-top: 9px;
}
section#corpo2 div#tabela tr td#icone {
  color: green;
  padding-top: 1px;
  width: 0px;
}
/*
  div.material-icons {
    height:0px;
  } */
section#corpo2 div#tabela tr td#primeiro {
  text-align: left;
}
section#corpo2 div#tabela tr th#vazio {
  width: 0px;
}
section#corpo2 div#tabela tr th#tipo {
  text-align: left;
}
td#icone editicone {
  color: green;
  background-color: green;
}

#titulodespesa {
  background: #00b4db; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0083b0,
    #00b4db
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0083b0,
    #00b4db
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 6px;
  text-align: center;
  color: whitesmoke;
  margin: 0px;
  font-weight: bold;
  font-size: 15px;
}
fieldset#usuario {
  font-family: arial, sans-serif;
  width: 400px;
  height: 210px;
  padding-right: 30px;
  margin-left: 4px;
  font-size: 13px;
  text-align: left;
  margin: 5px;
}
fieldset#usuario p#despesa {
  width: 310px;
}
fieldset#usuario p#despesa select {
  width: 366px;
  height: 35px;
  padding-left: 20px;
}
.fa-pencil-square-o {
  color: green;
}
.fa-window-close {
  color: green;
}
fieldset#usuario #cTot {
  width: 291px;
  height: 35px;
  text-align: right;
}
fieldset#usuario p#valor {
  opacity: 100%;
}
fieldset#usuario a#valoo {
  border: 1px solid hsla(120, 100%, 0%, 0.1);
  color: gray;
  display: inline-block;
  height: 25px;
  padding-bottom: -5px;
  padding-top: 9px;
  padding-right: 10px;
  padding-left: 10px;
}
fieldset#usuario p#emissao {
  opacity: 100%;
}
fieldset#usuario #cemissao {
  border: 1px solid hsla(120, 100%, 0%, 0.1);
  color: gray;
  width: 290px;
  height: 36px;
  text-align: center;
}
fieldset#usuario a#emiss {
  border: 1px solid hsla(120, 100%, 0%, 0.1);
  color: gray;
  margin-right: -3px;
  display: inline-block;
  padding: 10px;
  padding-right: 6px;
}
/* fieldset#usuario p#vencimento{
    opacity: 100%;
  } */
fieldset#usuario p#vencimento #cvencimento {
  margin-left: -4px;
  border: 1px solid hsla(120, 100%, 0%, 0.1);
  color: gray;
  height: 37px;
  width: 271px;
}
fieldset#usuario a#vencim {
  border: 1px solid hsla(120, 100%, 0%, 0.1);
  color: gray;
  padding: 10px;
  display: inline-block;
}
fieldset#usuario p#liquidado #cliquidado {
  margin-left: -4px;
  border: 1px solid hsla(120, 100%, 0%, 0.1);
  color: gray;
  height: 37px;
  width: 274.5px;
}
fieldset#usuario a#liquidd {
  border: 1px solid hsla(120, 100%, 0%, 0.1);
  color: gray;
  padding: 10px;
  display: inline-block;
}
section#corpo {
  width: 397px;
  height: 370px;
  font-size: 16px;
  display: block;
  float: left;
  padding-right: 0px;
  margin-left: 40px;
  margin-top: 5px;
  border: 1px solid skyblue;
  border-radius: 5px;
}
input[type="button"] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
input[type="button"] .xesque {
  background-color: green;
  color: green;
}
fieldset#ident {
  border: none;
  height: 30px;
  width: 338px;
  margin-left: 75px;
}
#myButton {
  background: white;
  background-color: white;
  border: 1px solid skyblue;
  border-radius: 2px;
  width: 105px;
  cursor: pointer;
  color: skyblue;
  height: 40px;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  margin-top: -5px;
  margin-left: -6px;
  text-decoration: none;
}
#myButton:hover {
  background: #00b4db; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0083b0,
    #00b4db
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0083b0,
    #00b4db
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  transition: 1s;
}
#myButton:active {
  background: #373b44;
  background: -webkit-linear-gradient(to right, #4286f4, #373b44);
  background: linear-gradient(to right, #4286f4, #373b44);
}
#myButton:focus {
  background: #373b44;
  background: -webkit-linear-gradient(to right, #4286f4, #373b44);
  background: linear-gradient(to right, #4286f4, #373b44);
}
#myButtonazulzao {
  background: #00b4db; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0083b0,
    #00b4db
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0083b0, #00b4db);
  border: 1px solid skyblue;
  border-radius: 2px;
  width: 105px;
  cursor: pointer;
  color: skyblue;
  height: 40px;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  margin-top: -5px;
  margin-left: -6px;
  text-decoration: none;
}

fieldset#usuario {
  border: none;
}
div#salvar {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  background: #1d976c;
  background: -webkit-linear-gradient(to right, #1d976c, #93f9b9);
  background: linear-gradient(to right, #1d976c, #93f9b9);
  width: 362px;
  height: 23px;
  margin-bottom: 4%;
  margin-top: 46px;
  padding-top: 5px;
  margin-left: 18px;
  border-radius: 5px;
  padding-bottom: 13px;
}
div#salvar button {
  color: white;
  font-weight: bold;
  font-size: 16px;
  width: 362px;
  height: 35px;
  padding-top: 5px;
}
input[type="date"],
input[type="number"],
select {
  background: none;
  color: inherit;
  border: none;
  width: 75%;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  border: 1px solid hsla(120, 100%, 0%, 0.1);
  color: gray;
  text-align: center;
}
.container-esquerda {
  display: flex;
  flex-wrap: wrap;
  float: left;
}

input[type="submit"]:hover {
  background: blue;
  background-color: blue;
}

/*MODALNOVO+*/
fieldset#identnovo {
  border: none;
  height: 30px;
  width: 338px;
  margin-left: 339px;
}
#myButtonnovo {
  background: white;
  background-color: white;
  border: 1px solid skyblue;
  border-radius: 2px;
  width: 100px;
  cursor: pointer;
  color: skyblue;
  height: 40px;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  margin-top: -5px;
  margin-left: -4px;
  text-decoration: none;
}
#myButtonnovo:hover {
  background: #00b4db; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0083b0,
    #00b4db
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0083b0,
    #00b4db
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  transition: 1s;
}
#myButtonnovo:active {
  background: #373b44;
  background: -webkit-linear-gradient(to right, #4286f4, #373b44);
  background: linear-gradient(to right, #4286f4, #373b44);
}
#myButtonnovo:focus {
  background: #373b44;
  background: -webkit-linear-gradient(to right, #4286f4, #373b44);
  background: linear-gradient(to right, #4286f4, #373b44);
}
fieldset#usuarionovo #cTotnovo {
  width: 832px;
  height: 35px;
  text-align: right;
}
fieldset#usuarionovo p#valornovo {
  opacity: 100%;
}
fieldset#usuarionovo a#valoonovo {
  border: 1px solid hsla(120, 100%, 0%, 0.1);
  color: gray;
  display: inline-block;
  height: 25px;
  padding-bottom: -5px;
  padding-top: 9px;
  padding-right: 10px;
  padding-left: 10px;
}
fieldset#usuarionovo p#emissaonovo {
  opacity: 100%;
}
fieldset#usuarionovo #cemissaonovo {
  border: 1px solid hsla(120, 100%, 0%, 0.1);
  color: gray;
  width: 831px;
  height: 36px;
  text-align: center;
}
fieldset#usuarionovo a#emissnovo {
  border: 1px solid hsla(120, 100%, 0%, 0.1);
  color: gray;
  margin-right: -3px;
  display: inline-block;
  padding: 10px;
  padding-right: 6px;
}
/* fieldset#usuario p#vencimento{
    opacity: 100%;
  } */
fieldset#usuarionovo p#vencimentonovo #cvencimentonovo {
  margin-left: -4px;
  border: 1px solid hsla(120, 100%, 0%, 0.1);
  color: gray;
  height: 37px;
  width: 814px;
}
fieldset#usuarionovo a#vencimnovo {
  border: 1px solid hsla(120, 100%, 0%, 0.1);
  color: gray;
  padding: 10px;
  display: inline-block;
}
fieldset#usuarionovo p#liquidadonovo #cliquidadonovo {
  margin-left: -4px;
  border: 1px solid hsla(120, 100%, 0%, 0.1);
  color: gray;
  height: 37px;
  width: 817px;
}
fieldset#usuarionovo a#liquiddnovo {
  border: 1px solid hsla(120, 100%, 0%, 0.1);
  color: gray;
  padding: 10px;
  display: inline-block;
}
fieldset#usuarionovo {
  font-family: arial, sans-serif;
  width: 920px;
  height: 210px;
  padding-right: 30px;
  margin-left: 4px;
  font-size: 13px;
  text-align: left;
  margin: 5px;
  border: none;
}
fieldset#usuarionovo p#despesanovo select {
  width: 907px;
  height: 35px;
  padding-left: 20px;
}
section#corponovo {
  width: 935px;
  height: 370px;
  font-size: 16px;
  display: block;
  float: left;
  padding-right: 0px;
  margin-left: 0px;
  margin-top: 5px;
  border: 1px solid skyblue;
  border-radius: 5px;
}
input#modal2item1 {
  border: 1px solid hsla(120, 100%, 0%, 0.1);
  width: 900px;
  height: 33px;
  margin-right: 20px;
  margin-top: 20px;
  margin-left: 23px;
}
select#modal2item2 {
  margin-top: 20px;
  border: 1px solid hsla(120, 100%, 0%, 0.1);
  height: 33px;
  width: 908px;
  margin-right: 18px;
  margin-left: 23px;
}
div.modal2borda {
  border: 1px solid green;
  border-radius: 5px;
  height: 194px;
}
div#modalsalvarnovo {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  background: #1d976c;
  background: -webkit-linear-gradient(to right, #1d976c, #93f9b9);
  background: linear-gradient(to right, #1d976c, #93f9b9);
  width: 95%;
  height: 23px;
  margin-top: 20px;
  padding-top: 5px;
  margin-left: 22px;
  border-radius: 5px;
  padding-bottom: 13px;
}
div#modalsalvarnovo button {
  color: white;
  font-weight: bold;
  font-size: 16px;
  width: 362px;
  height: 35px;
  padding-top: 5px;
  padding-left: 435px;
}
div#salvarnovo {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  background: #1d976c;
  background: -webkit-linear-gradient(to right, #1d976c, #93f9b9);
  background: linear-gradient(to right, #1d976c, #93f9b9);
  width: 96%;
  height: 23px;
  margin-top: 50px;
  padding-top: 5px;
  margin-left: 18px;
  border-radius: 5px;
  padding-bottom: 13px;
}
div#salvarnovo button {
  color: white;
  font-weight: bold;
  font-size: 16px;
  width: 362px;
  height: 35px;
  padding-top: 5px;
  padding-left: 415px;
}
#titulodespesanovo {
  background: #00b4db; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0083b0,
    #00b4db
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0083b0,
    #00b4db
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding: 6px;
  text-align: center;
  color: whitesmoke;
  margin: 0px;
  font-weight: bold;
  font-size: 15px;
}

.container-modal1 {
  display: flex;
  flex-wrap: wrap;
}
.container-modal2 {
  display: flex;
  flex-wrap: wrap;
}
input[type="submit"]:hover {
  background: blue;
  background-color: blue;
}
</style>


<style lang="scss" scoped>
.btn {
  padding: 8px 16px;
  border-radius: 5px;
  &--primary {
    background-color: green;
    color: #fff;
  }
  &--secondary {
    background-color: #dddd;
    color: #000;
  }
}
.overflow-hidden {
  overflow: hidden;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.d-flex {
  display: flex;
}
.align-items-center {
  align-items: center;
}
.justify-content-between {
  justify-content: space-between;
}

button {
  background: none;
  border: none;
  outline: inherit;
  cursor: pointer;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
</style>
