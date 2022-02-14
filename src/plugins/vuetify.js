import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import pt from "vuetify/es5/locale/pt";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md",
  },
  lang: {
    locales: { pt },
    current: "pt",
  },
  theme: {
    themes: {
      light: {
        primary: "#d42526",
        secondary: "#002166",
        accent: "#ffbb00",
        error: "#d42526",
        customwhite: "#ffffff",
      },
    },
  },
});
