function search (data, by, query) {
  if (by === 'name') {
    return data.filter(function (item) {
      return item[by].toString().match(new RegExp(query, 'i'))
    })
  }

  return data.filter(function (item) {
    return item[by].toString().match(new RegExp('^' + query + '.*'))
  })
}

const data = [
  {
    name: 'Diego Viniegra',
    cc: 1234567890
  },
  {
    name: 'Diego Villalobos',
    cc: 1123456780
  },
  {
    name: 'Marcos Viniegra',
    cc: 1234456789
  },
  {
    name: 'Diana Viniegra',
    cc: 1234556789
  }
]

console.log(search(data, 'cc', 123))
