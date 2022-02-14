<template>
  <v-list dense>
    <v-list-item
      v-for="item in menu"
      :key="item.path"
      link
      class="py-1"
      :to="{ name: item.name }"
    >
      <v-list-item-icon>
        <v-icon>{{ item.props.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title id="font">
          {{ item.props.title }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <menu-itens-valor />
  </v-list>
</template>

<script>
import mainRoutes from "../router/Main";
import MenuItensValor from "./MenuItensValores.vue";
export default {
  name: "MenuItems",
  components: {
    MenuItensValor,
  },
  computed: {
    menu() {
      return mainRoutes.children.filter((c) => !c.props.hide);
    },
  },
};
</script>
<style>
#font {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 16px;
  margin-left: 10px;
}
</style>
