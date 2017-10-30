import Vue from 'vue'

Vue.filter('capitalize', (val) => {
  let res = ''
  let i = 0
  let valNew = ''
  if (!val) return ''
  valNew = val.toString()
  valNew = valNew.replace(/\b\w/g, l => l.toUpperCase())
  for (i = 0; i < valNew.length; i += 1) {
    if (i > 0 && /[áéíóúÁÉÍÓÚÑñ ]/.test(val[i - 1]) && !/(\.\s)/.test(val.slice(i - 2, i))) {
      res += valNew[i].toLowerCase()
    } else {
      res += valNew[i]
    }
  }
  return res
})

Vue.filter('upperCase', (val) => {
  let valNew = ''
  if (!val) return ''
  valNew = val.toString()
  return valNew.toUpperCase()
})

Vue.filter('lowerCase', (val) => {
  let valNew = ''
  if (!val) return ''
  valNew = val.toString()
  return valNew.toLowerCase()
})
