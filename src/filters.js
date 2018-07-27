/* eslint-disable no-new */
import Vue from 'vue'

/**
 * Formato de fecha para los datos de la bd
 */
Vue.filter('date', function (date) {
  if (!date) return null

  const re = /^(\d{4})-(\d{1,2})-(\d{1,2})$/
  return date.replace(re, function (a, b, c, d) {
    return d + '/' + c + '/' + b
  })
})

/**
 * Formato de cédula de ciudadanía
 */
Vue.filter('cc', function (num) {
  if (!num) return null

  const re = /^(\d{1,3})(\d{3})(\d{3})(\d{3})|(\d{1,3})(\d{3})(\d{3})|(\d{1,3})(\d{3})|(\d{1,3})$/
  return num.toString().replace(re, function (orig, a4, a3, a2, a1, b3, b2, b1, c2, c1, d1) {
    if (a1) return a4 + '.' + a3 + '.' + a2 + '.' + a1
    if (b1) return b3 + '.' + b2 + '.' + b1
    if (c1) return c2 + '.' + c1
    if (d1) return d1
    return orig
  })
})

Vue.filter('nit', function (num) {
  if (!num) return null

  const re = /^(\d{1,3})(\d{3})(\d{3})(\d{3})(\d)|(\d{1,3})(\d{3})(\d{3})(\d)$/
  return num.toString().replace(re, function (orig, a5, a4, a3, a2, a1, b4, b3, b2, b1) {
    if (a1) return a5 + '.' + a4 + '.' + a3 + '.' + a2 + '-' + a1
    if (b1) return b4 + '.' + b3 + '.' + b2 + '-' + b1
    return orig
  })
})

Vue.filter('phone', function (num) {
  if (!num) return null

  const re = /^(\d{1,3})?(\d{3})(\d{4})$/
  return num.toString().replace(re, function (orig, cod, g1, g2) {
    return (cod ? '(' + cod + ') ' : '') + g1 + ' ' + g2
  })
})

export default Vue
