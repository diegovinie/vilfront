import axios from 'axios'

// axios.defaults.baseURL = 'http://villalvar.proyectowaraira.com'
axios.defaults.baseURL = 'http://localhost:8000'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://villalvar.proyectowaraira.com'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8000'

export default axios
