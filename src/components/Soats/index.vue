<template lang="pug">
  v-container
    ListAll(
      v-if="window.current === 'ListAll'"
      @showSoat="showSoat($event)"
      )
    Show(
      v-if="window.current === 'Show'"
      @returnWindow="returnWindow"
      :soatid="soatid"
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
      soatid: null,
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
    showSoat (id) {
      this.soatid = id
      this.changeWindow('Show')
    }
  },

  created () {
    this.soatid = this.dataProp || null
  }
}
</script>

<style lang="css">
</style>
