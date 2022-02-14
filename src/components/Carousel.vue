<template>
  <v-col>
    <v-carousel
      id="carousel"
      elevation="100"
      width="100%"
      height="444"
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://animaeducacao.com.br/app/uploads/2021/08/20210818_1920X900_lancamento_concurso_ANIMA_B.png",
        },
        {
          src: "https://animaeducacao.com.br/app/uploads/2021/05/20210505_Ly_Banner_IGC_C.png",
        },
        {
          src: "https://animaeducacao.com.br/app/uploads/2021/05/20210505_Ly_Banner_Conhecimento_C.png",
        },
        {
          src: "https://animaeducacao.com.br/app/uploads/2020/12/20201019_ly_anima_bannersite_2_A.png",
        },
      ],
    };
  },
};
</script>
<style></style>
