<template lang="pug">
  v-container
    v-flex(xs12 sm6 offset-sm3)
      v-card(v-if="data")
        v-btn(
          @click="$emit('returnWindow')"
          color="red"
          absolute
          dark
          fab
          top
          right
          )
          v-icon close
        v-card-media
        v-card-title Perfil de {{ data.name }}
        v-card-actions
        v-list(two-line)
          v-list-tile
            v-list-tile-content
              v-list-tile-title Primer Nombre
              v-list-tile-sub-title {{ data.clientable.name1 }}
          v-list-tile
            v-list-tile-content
              v-list-tile-title Segundo Nombre
              v-list-tile-sub-title {{ data.clientable.name2 }}
          v-list-tile
            v-list-tile-content
              v-list-tile-title Primer Apellido
              v-list-tile-sub-title {{ data.clientable.lastname1 }}
          v-list-tile
            v-list-tile-content
              v-list-tile-title Segundo Apellido
              v-list-tile-sub-title {{ data.clientable.lastame2 }}
          v-divider
          v-list-tile
            v-list-tile-content
              v-list-tile-title Cédula de Identidad
              v-list-tile-sub-title {{ data.clientable.cc | cc }}
          v-list-tile
            v-list-tile-content
              v-list-tile-title Fecha de nacimiento
              v-list-tile-sub-title {{ data.clientable.birth | date }}
          v-list-tile
            v-list-tile-content
              v-list-tile-title Género
              v-list-tile-sub-title {{ data.clientable.gender === 'M' ? 'Masculino' : 'Femenino' }}
          v-list-tile
            v-list-tile-content
              v-list-tile-title Relación
              v-list-tile-sub-title
        ul(v-for="phone in data.phones")
          li {{ phone.number }}
        ul(v-for="email in data.emails")
          li {{ email.email }}
        ul(v-for="address in data.addresses")
          li {{ address.address }}
</template>

<script>
import api from '../../api'

export default {
  data () {
    return {
      data: null
    }
  },

  props: [
    'clientid'
  ],

  methods: {
    getClient () {
      api.get('/api/clients/' + this.clientid + '?with=expanded')
        .then(({data}) => {
          console.log(JSON.parse(JSON.stringify(data)))
          this.data = data
        })
    }
  },

  created () {
    this.getClient()
  }
}
</script>

<style lang="css">
</style>
