export default function install (Vue) {
  let id = 0
  const data = {}

  Vue.mixin({
    beforeCreate () {
      if (!this.$options.recomputed) return
      const me = 'r' + id++
      this._$recomputeId = me
      Vue.util.defineReactive(
        data,
        me,
        Object.keys(this.$options.recomputed).reduce((r, key) => {
          r[key] = 0
          return r
        }, {}),
      )
      this.$options.computed = this.$options.computed || {}
      Object.keys(this.$options.recomputed).forEach(key => {
        this.$options.computed[key] = vm => {
          /* eslint-disable-next-line */
          data[me][key]
          return this.$options.recomputed[key].call(vm, vm)
        }
      })
      this.$options.methods = this.$options.methods || {}
      this.$options.methods.$recompute = key => {
        data[me][key]++
      }
    },

    destroyed () {
      if (!this._$recomputeId) return
      delete data[this._$recomputeId]
    },
  })
}
