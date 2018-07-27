<template lang="pug">
  div
    v-slide-x-transition
      Clients(
          v-if="primary === 'Clients'"
          :viewProp="secondary"
          :dataProp="dataProp"
          )
      Soats(
        v-if="primary === 'Soats'"
        :viewProp="secondary"
        :dataProp="dataProp"
        )
</template>

<script>
import Clients from './Clients'
import Soats from './Soats'

export default {
  data () {
    return {
      window: {
        history: [],
        prev: null,
        current: 'Clients'
      }
    }
  },

  computed: {
    primary () {
      return this.primaryProp ? this.primaryProp : 'Clients'
    },

    secondary () {
      return this.secondaryProp ? this.secondaryProp : null
    }
  },

  props: [
    'primaryProp',
    'secondaryProp',
    'dataProp'
  ],

  components: {
    Clients,
    Soats
  }
}
</script>

<style lang="css">
</style>
