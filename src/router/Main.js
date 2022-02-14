import Main from "../layouts/Main";

export default {
  path: "/",
  component: Main,
  children: [
    {
      path: "home",
      name: "main.home",
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/Home.vue"),
      props: {
        title: "Início ",
        icon: "mdi-home",
        hide: false,
      },
    },
    {
      path: "news",
      name: "main.news",
      component: () => import("../views/News.vue"),
      meta: { requiresLogin: true },
      props: {
        title: "Notícias",
        icon: "mdi-newspaper-variant-outline",
        hide: false,
      },
    },
    {
      path: "/read-news/:id",
      name: "main.readnews",
      component: () => import("../views/ReadNews.vue"),
      meta: { requiresLogin: true },
      props: {
        title: "Ler Notícia",
        icon: "mdi-chat-alert",
        hide: true,
      },
    },
    {
      path: "sobre",
      name: "main.sobre",
      component: () =>
        import(/* webpackChunkName: "history" */ "../views/About.vue"),
      props: {
        title: "Sobre",
        icon: "mdi-account-voice",
        hide: false,
      },
    },
    {
      path: "history",
      name: "main.history",
      component: () =>
        import(/* webpackChunkName: "history" */ "../views/History.vue"),
      props: {
        title: "Historia",
        icon: "mdi-clipboard-clock",
        hide: false,
      },
    },
  ],
};
