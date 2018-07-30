<template lang="pug">
  v-container(fluid grid-list-xl)
    v-layout(wrap align-center)
      v-flex(xs12 sm6 d-flex)
        v-card
          v-card-title.headline Soats
            v-spacer
            v-text-field(
              v-model="table.search"
              append-icon="search"
              label="Buscar"
              single-line
              hide-details
              )
          v-data-table.elevation-1(
            :headers="table.headers"
            :search="table.search"
            :items="soats"
            hide-actions
            :pagination.sync="table.pagination"
            )
            template(
              slot="items"
              slot-scope="props"
              )
              td.text-xs-right(
                @click="$emit('showSoat', props.item.id)"
                ) {{ props.item.exp | date }}
              td.text-xs-right(
                @click="dialogShowClients(props.item)"
                ) {{ props.item.client.name }}
              td(
                @click="dialogShowVehicle(props.item)"
                ) {{ props.item.vehicle.patent }}
          v-pagination(
            v-model="table.pagination.page"
            :length="pages"
            :total-visible="5"
            )
    Dialog(:dialogProp="dialog")
</template>

<script>
import api from '@/api'

export default {
  data () {
    return {
      table: {
        headers: [
          { text: 'Vencimiento', value: 'exp' },
          { text: 'Cliente', value: 'client.name' },
          { text: 'Placa', value: 'patent' }
        ],
        pagination: {},
        search: ''
      },
      soats: [],
      dialog: {
        primary: null,
        secondary: null,
        activate: false,
        data: null
      }
    }
  },

  computed: {
    pages () {
      const pag = this.table.pagination

      if (pag.rowsPerPage == null ||
        pag.totalItems == null
      ) return 0

      return Math.ceil(pag.totalItems / pag.rowsPerPage)
    }
  },

  methods: {
    fetch () {
      api.get('/api/soats')
        .then(({data}) => {
          const pag = this.table.pagination

          this.soats = data
          pag.totalItems = data.length
          pag.rowsPerPage = 5
          pag.sortBy = 'id'
        })
        .catch((res) => {
          console.log('error fetch: ', res)
        })
    },

    dialogShowSoat (item) {
      this.dialog = {
        primary: 'Soats',
        secondary: 'Show',
        activate: true,
        data: item.id
      }
    },

    dialogShowClients (item) {
      this.dialog = {
        primary: 'Clients',
        secondary: 'Show',
        activate: true,
        data: item.client.id
      }
    },

    dialogShowVehicle (item) {
      this.dialog = {
        primary: 'Vehicle',
        secondary: 'Show',
        activate: true,
        data: item.vehicle.id
      }
    }
  },

  created () {
    this.fetch()
  }
}
</script>

<style lang="css">
</style>
