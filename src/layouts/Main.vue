<template>
  <div>
    <v-navigation-drawer
      v-if="
        $vuetify.breakpoint.name === 'lg' || $vuetify.breakpoint.name === 'md'
      "
      v-model="drawer"
      color="secondary"
      mini-variant
      expand-on-hover
      app
      dark
      clipped
    >
      <menu-items />
    </v-navigation-drawer>
    <v-navigation-drawer
      v-else
      v-model="drawer"
      color="secondary"
      app
      dark
      clipped
    >
      <menu-items />
    </v-navigation-drawer>
    <v-app-bar app color="white" elevation="3" clipped-left>
      <v-app-bar-nav-icon
        class="secondary--text d-sm-none"
        @click="drawer = !drawer"
      />
      <logo class="ml-3 secondary--text" />
      <v-spacer />
      <user-data class="secondary--text caption" />
    </v-app-bar>
    <v-main id="content">
      <v-container fluid>
        <v-scroll-y-transition mode="out-in">
          <router-view />
        </v-scroll-y-transition>
      </v-container>
    </v-main>
     <v-main id="content">
      <v-container fluid>
        <v-scroll-y-transition mode="out-in">
     <Footer />
        </v-scroll-y-transition>
     </v-container>
    </v-main>
  </div>
</template>

<script>
import MenuItems from "../components/MenuItens.vue";
import UserData from "../components/UserData.vue";
import Logo from "../components/Logo.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    MenuItems,
    UserData,
    Logo,
    Footer,
  },
  data() {
    return {
      drawer: true,
      mini: true,
    };
  },
};
</script>

<style></style>
