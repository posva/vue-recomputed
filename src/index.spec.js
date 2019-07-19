import Vue from 'vue'
import plugin from './index'

Vue.use(plugin)

describe('VueRecomputed', () => {
  it('adds a computed property', () => {
    let i = 0
    const vm = new Vue({
      render: h => h(),
      recomputed: {
        foo () {
          return i++
        },
      },
    })

    expect(vm.foo).toBe(0)
    expect(vm.foo).toBe(0)
    vm.$recompute('foo')
    expect(vm.foo).toBe(1)
  })
})
