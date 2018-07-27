<template lang="pug">
  v-layout(row justify-center)
    v-dialog(
      v-model="dialogProp.activate"
      lazy
      hide-overlay
      transition="dialog-bottom-transition"
      )
      v-card
        v-toolbar(dark color="primary")
          v-btn(icon dark @click.native="dialogProp.activate = false")
            v-icon close
          v-toolbar-title Settings
          v-spacer
          v-toolbar-items
            v-btn(dark flat @click.native="dialog = false") Save
        ComponentManager(
          :primaryProp="dialogProp.primary"
          :secondaryProp="dialogProp.secondary"
          :dataProp="dialogProp.data"
          )
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  },

  props: [
    'dialogProp'
  ]
}
</script>

<style lang="css">
</style>
