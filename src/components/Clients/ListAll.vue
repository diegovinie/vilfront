<template lang="pug">
  v-container(fluid grid-list-xl)
    v-layout(wrap align-center)
      v-flex(xs12 sm6 d-flex)
        v-card
          v-card-title.headline Clientes
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
            :items="clients"
            hide-actions
            :pagination.sync="table.pagination"
            )
            template(
              slot="items"
              slot-scope="props"
              )
              td.text-xs-right(
                :class="docClass(props.item)"
                ) {{ props.item.doc | cc }}
              td.text-xs-right {{ props.item.type === 'natural' ? 'Persona' : 'Empresa' }}
              td
                a(@click="$emit('showClient', props.item.id)") {{ props.item.name }}
          v-pagination(
            v-model="table.pagination.page"
            :length="pages"
            :total-visible="5"
            )
</template>

<script>
import api from '@/api'

export default {
  data () {
    return {
      table: {
        headers: [
          { text: 'Documento', value: 'doc' },
          { text: 'Tipo', value: 'type' },
          { text: 'Nombre', value: 'name' }
        ],
        pagination: {},
        search: ''
      },
      sel: null,
      clients: [],
      pageCount: null
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
      api.get('/api/clients')
        .then(({data}) => {
          const pag = this.table.pagination

          this.clients = data
          pag.totalItems = data.length
          pag.rowsPerPage = 5
          pag.sortBy = 'id'
        })
        .catch((res) => {
          console.log('error fetch: ', res)
        })
    },

    docClass (item) {
      return item.clientable_type === 'App\\Person'
        ? 'green--text'
        : 'blue--text'
    }
  },

  created () {
    this.fetch()
  }
}
</script>

<style lang="css">

</style>
