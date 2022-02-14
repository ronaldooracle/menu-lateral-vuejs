<template>
  <v-row>
    <v-col>
      <div id="newsTitle">
        <h1 class="text-uppercase px-2">
          {{ title }}
        </h1>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "SessionTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
