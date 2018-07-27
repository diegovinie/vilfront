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
      v-card-title Descripción Soat
      v-card-actions
      v-list(two-line)
        v-list-tile
          v-list-tile-content
            v-list-tile-title Cliente:
            v-list-tile-sub-title {{ data.client.name }}
        v-list-tile
          v-list-tile-content
            v-list-tile-title Vencimiento
            v-list-tile-sub-title {{ data.exp | date }}
        v-list-tile(v-if="data.expired")
          v-list-tile-content
            v-list-tile-title Expirado
        v-list-tile(v-if="data.expired")
          v-list-tile-content
            v-list-tile-title {{ data.renewed? 'Renovado' : 'No Renovado' }}
        v-btn(
          @click="renew(data.id)"
          ) Renovar
        v-divider
      v-list
        v-list-tile
          v-list-tile-content
            v-list-tile-title Placa:
            v-list-tile-sub-title {{ data.vehicle.patent }}
        v-list-tile
          v-list-tile-content
            v-list-tile-title Modelo:
            v-list-tile-sub-title {{ data.vehicle.model }}
        v-list-tile
          v-list-tile-content
            v-list-tile-title Uso:
            v-list-tile-sub-title {{ data.vehicle.use }}
        v-list-tile
          v-list-tile-content
            v-list-tile-title Cilindraje:
            v-list-tile-sub-title {{ data.vehicle.cil }}
        v-list-tile
          v-list-tile-content
            v-list-tile-title Marca:
            v-list-tile-sub-title {{ data.vehicle.brand }}
        v-list-tile
          v-list-tile-content
            v-list-tile-title Categoría:
            v-list-tile-sub-title {{ data.vehicle.class }}
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
    'soatid'
  ],

  methods: {
    fetch: function (id) {
      api.get('/api/soats/' + id)
        .then(({data}) => {
          // console.log(data);
          this.data = data
        })
    },

    renew: function (id) {
      console.log(id)
      this.showModal = true
    }
  },

  created () {
    this.fetch(this.soatid)
  }
}
</script>

<style lang="css">
</style>
