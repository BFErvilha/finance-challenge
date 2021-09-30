<template>
    <b-row>
      <b-col sm="12" md="12">
        <vs-card class="proposals">
          <div slot="header">
            <h3>
             Preencha os campos
            </h3>
          </div>
          <b-row>
            <b-col sm="12" md="4">
              <b-row>
                <b-col cols="12">
                  <vs-input
                    color="#873deb"
                    @blur="verifyPerfomance(lmPerformance)"
                    label-placeholder="Rendimento Mês anterior"
                    v-model="lmPerformance"
                    v-on:keyup.enter="verifyPerfomance(lmPerformance)"
                />
                </b-col>
                <b-col class="sm-img" cols="12">
                  <img :src="img"/>
                </b-col>
              </b-row>
            </b-col>
            <b-col sm="12" md="8" v-if="optionCredit === 3">
              <b-row class="justify-content-center">
                <b-col sm="12" md="4"
                       v-for="(proposal,index) in proposalA"
                       :key="index"
                >
                  <b-card
                      :title="proposal.name"
                      :sub-title="'Taxa de Juros ' + proposal.tax"
                      class="proposalCard gradient-box fadeinEffect"
                  >
                    <b-card-text class="propValue">
                      <sup>US</sup> $ {{ proposal.total = ( lmPerformance * proposal.credit) / 100 }}
                    </b-card-text>
                    <b-card-text>
                      <vs-select
                          color="#873deb"
                          label="Escolha a parcela"
                          v-model="proposal.installments"
                      >
                        <vs-select-item :key="index+1" :value="index+1" :text="'Em '+ (index + 1) + ' parcelas'" v-for="(item,index) in proposal.installments" />
                      </vs-select>
                    </b-card-text>

                    <b-card-text> Taxa de oferta: {{ proposal.offerRate }}</b-card-text>
                    <vs-button color="#2728DD" class="simulation" type="filled">
                      <i class="fas fa-vote-yea" style="margin-right: 10px"></i> Aceitar Proposta
                    </vs-button>
                  </b-card>
                </b-col>
              </b-row>
            </b-col>
            <b-col sm="12" md="8" v-if="optionCredit === 1">
              <b-row class="justify-content-center">
                <b-col sm="12" md="4"
                       v-for="(proposal,index) in proposalB"
                       :key="index"
                >
                  <b-card
                      :title="proposal.name"
                      :sub-title="'Taxa de Juros ' + proposal.tax"
                      class="proposalCard gradient-box fadeinEffect"
                  >
                    <b-card-text class="propValue">
                      <sup>US</sup> $ {{ proposal.total = ( lmPerformance * proposal.credit) / 100 }}
                    </b-card-text>
                    <b-card-text>
                      <vs-select
                          color="#873deb"
                          label="Escolha a parcela"
                          v-model="proposal.installments"
                      >
                        <vs-select-item :key="index+1" :value="index+1" :text="'Em '+ (index + 1) + ' parcelas'" v-for="(item,index) in proposal.installments" />
                      </vs-select>
                    </b-card-text>

                    <b-card-text> Taxa de oferta: {{ proposal.offerRate }}</b-card-text>
                    <vs-button color="#2728DD" class="simulation" type="filled" @click="subimtProposal(proposal)">
                      <i class="fas fa-vote-yea" style="margin-right: 10px"></i> Aceitar Proposta
                    </vs-button>
                  </b-card>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </vs-card>
      </b-col>
    </b-row>
</template>

<script>
export default {
  name: 'SimulationCalc',
  data () {
    return {
      img: '../assets/img/svg/access.png',
      lmPerformance: '',
      optionCredit: '',
      proposal: {},
      proposalA: [
        { name: 'Plano 1', tax: '1%', installments: 12, credit: 100, offerRate: 0, total: '' },
        { name: 'Plano 2', tax: '0,75%', installments: 12, credit: 75, offerRate: 0, total: '' },
        { name: 'Plano 3', tax: '0,5%', installments: 12, credit: 50, offerRate: 0, total: '' }
      ],
      proposalB: [
        { name: 'Plano 1', tax: '1,25%', installments: 6, credit: 75, offerRate: 10, total: '' }
      ]
    }
  },
  methods: {
    verifyPerfomance (value) {
      if (value > 10000) {
        this.optionCredit = 3
      } else if (value <= 10000) {
        this.optionCredit = 1
      }
    },
    subimtProposal (proposal) {
      this.proposal = proposal
      this.$vs.notify({
        title: 'Proposta Enviada',
        text: 'Sua proposta será analisada em breve',
        color: 'success',
        position: 'bottom-center',
        icon: 'check_box'
      })
      // alert(this.proposal)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/style";

.proposals{
  .vs-card--header{
    background: $secondary-color!important;
  }
}

.sm-img{
  padding: 3rem;

  @media (max-width: 600px) {
    padding: 3rem 1rem;

    img{
      width: 250px;
    }
  }
}

.propValue{
  font-size: 30px!important;
  font-family: $font-ibm;
  font-weight: bolder;
  sup{
    font-size: 12px;
    top: -10px;
    font-style: italic;
    font-weight: lighter;
  }
}

.con-vs-card{
  background: none;
}

.vs-con-input , .vs-con-input-label{
  width: 100%;
}
.con-select{
  width: auto;
}

.proposalCard{
    border-radius: .375rem;
    box-shadow: 0px 5px 6px rgba(87, 87, 87, 0.8);
  .card-subtitle{
    color: white!important;
  }
}

.simulation {
  position: relative;
  bottom: -5px;
  text-align: center;
}

.gradient-box {
  display: flex;
  align-items: center;
  height: 360px;
  margin: 15px auto;
  max-width: 22em;

  position: relative;
  padding: 15% 2em;
  box-sizing: border-box;

  $border: 5px;
  color: #FFF;
  background: #000;
  background-clip: padding-box;
  border: solid $border transparent;

  &:before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    margin: -$border;
    border-radius: inherit;
    background: linear-gradient(to right, $primary-color, $secondary-color);
  }
}

</style>
