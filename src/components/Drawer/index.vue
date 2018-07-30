<template lang="pug">
  v-navigation-drawer(
    :value="active"
    fixed
    app)
    v-list(dense)
      v-list-tile(@click="")
        v-list-tile-action
          v-icon home
        v-list-tile-content
          v-list-tile-title Inicio
      v-list-tile(@click="$emit('changeWindow', 'Clients')")
        v-list-tile-action
          v-icon contact_mail
        v-list-tile-content
          v-list-tile-title Clientes
      v-list-tile(@click="$emit('changeWindow', 'Soats')")
        v-list-tile-action
          v-icon contact_mail
        v-list-tile-content
          v-list-tile-title Soats
</template>

<script>
export default {
  data () {
    return {

    }
  },

  computed: {
    active () {
      return this.status
    }
  },

  props: {
    status
  }
}
</script>

<style lang="css">
</style>
