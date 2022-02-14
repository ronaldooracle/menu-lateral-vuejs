<template>
  <v-row align="center" justify="center" class="px-12">
    <v-col v-for="item in items" :key="item.title" cols="12" md="3" sm="6">
      <v-hover v-slot="{ hover }" open-delay="20">
        <v-card
          min-height="440px"
          :elevation="hover ? 16 : 0"
          color="indigo lighten-5"
          class="mx-auto"
        >
          <v-img class="white--text align-end" height="200px" :src="item.pic" />
          <v-card-subtitle class="text-uppercase pt-5 px-6 pb-0">
            {{ item.date }}
          </v-card-subtitle>
          <v-card-text class="py-0 px-2 text-card">
            <v-card-title>{{ item.title }}</v-card-title>
          </v-card-text>
          <v-card-actions class="px-6 pb-6">
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
</template>

<script>
export default {
  data: () => ({
    show: false,
    items: [
      {
        id: 1,
        title: "Top western road trips 1 ",
        subTitle: "1,000 miles of wonder 1",
        date: "15/09/2019",
        pic: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      },
      {
        id: 2,
        title: "Top western road trips 2",
        subTitle: "1,000 miles of wonder 2",
        date: "15/09/2019",
        pic: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
      },
      {
        id: 3,
        title: "Top western road trips 3",
        subTitle: "1,000 miles of wonder 3",
        date: "15/09/2019",
        pic: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
      },
      {
        id: 4,
        title: "Top western road trips 4 ",
        subTitle: "1,000 miles of wonder 4",
        date: "15/09/2019",
        pic: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
      },
    ],
  }),
};
</script>
