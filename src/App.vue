<template lang="pug">
  v-app(id="inspire")
    Drawer(
      :status="drawer"
      @changeWindow="changeWindow($event)"
      )
    v-toolbar(color="indigo" dark fixed app)
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      v-toolbar-title Villalvar
    v-content
      v-container(fluid fill-height)
        v-layout(justify-center align-center)
          v-flex(text-xs-center)
            ComponentManager(
              :primaryProp="window.current"
              )
    v-footer(color="indigo" app)
      span.white--text &copy; 2018
</template>

<script>
/* eslint-disable no-new */
import WindowController from './mixins/WindowController'

export default {
  name: 'App',

  mixins: [
    WindowController
  ],

  data () {
    return {
      drawer: null
    }
  },

  created () {
    this.window.current = 'Clients'
  }
}
</script>

<style>

</style>
