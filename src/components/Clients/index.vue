<template lang="pug">
  v-container
    ListAll(
      v-if="window.current === 'ListAll'"
      @showClient="showClient($event)"
      )
    Show(
      v-if="window.current === 'Show'"
      @returnWindow="returnWindow"
      :clientid="clientid"
      )
</template>

<script>
import ListAll from './ListAll'
import Show from './Show'

import windowController from '@/mixins/WindowController'

export default {
  mixins: [
    windowController
  ],

  data () {
    return {
      clientid: null,
      defaultWindow: 'ListAll'
    }
  },

  props: [
    'viewProp',
    'dataProp'
  ],

  components: {
    ListAll,
    Show
  },

  methods: {
    showClient (id) {
      this.changeWindow('Show')

      this.clientid = id
    }
  },

  created () {
    this.clientid = this.dataProp || null
  }
}
</script>

<style lang="css">
</style>
