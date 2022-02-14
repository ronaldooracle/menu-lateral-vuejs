<template>
  <v-row>
    <v-col cols="12" md="12" sm="12" class="pt-0">
      <Carousel />
      <session-title class="pt-8 px-10 pb-5" title="Notícias" />
      <CardNotice :max="4" />
    </v-col>
  </v-row>
</template>

<script>
import VueCookies from 'vue-cookies'
import CardNotice from "../components/CardNotice.vue";
import Carousel from "../components/Carousel.vue";
import SessionTitleVue from "../components/SessionTitle.vue";
export default {
  name: "Home",
  components: {
    CardNotice,
    Carousel,
    "session-title": SessionTitleVue,
  },
  created() {
    var user = { id:1, name:'Journal',session:'25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX' };
   VueCookies.set('dados_User',user);
   var teste = VueCookies.get('dados_User')
   console.log(teste.name)
}
};
</script>
<style></style>
