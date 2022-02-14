<template>
  <div>
    <v-row v-if="news.length > 0" align="center" justify="start" class="px-12">
      <v-col v-for="item in news" :key="item.id" cols="12" md="3" sm="6">
        <v-hover v-slot="{ hover }" open-delay="20">
          <v-card
            height="500"
            :elevation="hover ? 16 : 0"
            color="indigo lighten-5"
            class="mx-auto d-flex flex-column justify-space-between"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              :src="item.pic"
            />
            <v-card-subtitle class="text-uppercase pt-5 px-6 pb-0">
              {{ item.subTitle }}
            </v-card-subtitle>
            <v-card-text class="py-0 px-2 text-card">
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-subtitle>{{
                item.date
              }}</v-card-subtitle>
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="ml-5 mb-5"
                outlined
                color="secondary"
                route
                :to="`/read-news/${item.id}`"
              >
                Ver mais
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row v-else align="center" justify="center" class="px-12">
      <v-col cols="12" class="text-center">
        <h3 class="text--disabled">Não há nenhuma notícia por enquanto.</h3>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "NewsGrid",
  props: {
    max: {
      type: Number,
      default: () => 0,
    },
  },
  data: () => ({
    news: [
      {
         id: 3,
          title: "Top western road trips 1 ",
          subTitle: "1,000 miles of wonder 1",
          date: "15/09/2019",
        pic: "https://neoradar.uai.com.br/wp-content/uploads/sites/8/2020/03/whatsapp-image-2020-03-20-at-162758-1-1280x720.jpeg"
      },
    ],
  }),
  async created() {
    try {
      if (this.max > 0) {
        this.news = this.news.slice(0, this.max);
      }
    } catch (e) {
      this.$handleHttpError(e);
    }
  },
};
</script>
