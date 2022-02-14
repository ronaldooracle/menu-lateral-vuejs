<template>
<v-col>
    <v-col v-for="(item,i) in news" :key="i">
        Textos
      {{ item.title }}
       {{ item.subTitle }}
        {{ item.id }}
        <img :src="item.pic">
    </v-col>
</v-col>
</template>

<script>
export default {
  components: {},
  name: "ReadNews",
  data() {
    return {
      news: {},
      data:[ 
        {
          id: 1,
          title: "Top western road trips 1 ",
          subTitle: "1,000 miles of wonder 1",
          date: "15/09/2019",
          pic: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        },
         {
          id: 2,
          title: "Top western road trips 1 ",
          subTitle: "1,000 miles of wonder 1",
          date: "15/09/2019",
          pic: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        },
        {
          id: 3,
          title: "Top western road trips 1 ",
          subTitle: "1,000 miles of wonder 1",
          date: "15/09/2019",
          pic: "https://neoradar.uai.com.br/wp-content/uploads/sites/8/2020/03/whatsapp-image-2020-03-20-at-162758-1-1280x720.jpeg",
        },
      ]
    };
  },
 async created() {
    if (this.$route.params.id != null) {
       const result =  this.data.filter(x => x.id == this.$route.params.id )
        this.news = result;

    }
    console.log("carregado ", this.news);
  },
};
</script>

<style scoped></style>
