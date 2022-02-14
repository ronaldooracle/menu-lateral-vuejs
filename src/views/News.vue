<template>
  <v-row>
    <v-col cols="12" md="12" sm="12" class="pt-0">
      <session-title class="pt-8 px-10 pb-5" title="Novidades" />
      <news-grid />
    </v-col>
  </v-row>
</template>

<script>
import SessionTitle from "../components/SessionTitle.vue";
import NewsGrid from "../components/NewsGrid.vue";

export default {
  name: "News",
  components: {
    "session-title": SessionTitle,
    "news-grid": NewsGrid,
  },
};
</script>
