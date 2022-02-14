<template>
  <div>
    <v-list-group
      v-for="(item, i) in items"
      :key="i"
      :value="true"
      prepend-icon="mdi-handshake"
    >
      <template #activator>
        <v-list-item-title id="font">
          {{ item.name }}
        </v-list-item-title>
      </template>

      <v-list-item>
        <v-list-item-icon />

        <v-list-item-content>
          <v-list-item-title class="text-uppercase"> </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </div>
</template>

<script>
export default {
  name: "SubMenu",
  data: () => ({
    items: [
      {
        name: "sub-menus",
      },
    ],
    isLoading: false,
  }),
  methods: {},
};
</script>

<style scoped>
#font {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 16px;
  margin-left: 10px;
}
</style>
