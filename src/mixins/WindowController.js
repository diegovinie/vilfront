export default {
  data () {
    return {
      window: {
        history: [],
        prev: null,
        current: null
      }
    }
  },

  methods: {
    changeWindow (next) {
      const win = this.window

      win.history.push(win.current)
      win.prev = win.current
      win.current = next
    },

    returnWindow () {
      const win = this.window
      let prev = win.prev

      win.history.push(win.current)
      win.prev = win.current
      win.current = prev
    }
  },

  beforeMount () {
    this.window.current = this.viewProp || this.defaultWindow
  }
}
