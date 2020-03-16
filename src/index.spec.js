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
    vm.$recompute('foo')
    expect(vm.foo).toBe(1)
  })

  it('check computed and recomputed', () => {
    let i = 0
    const vm = new Vue({
      computed: {
        count () {
          return i++
        },
      },
      render: h => h(),
      recomputed: {
        rCount () {
          return i++
        },
      },
    })

    // recomputed prop is initialized to 0
    expect(vm.rCount).toBe(0)

    // computed prop is called for first time
    expect(vm.count).toBe(1)

    // recomputed prop
    vm.$recompute('rCount')

    expect(vm.rCount).toBe(2)
    expect(vm.count).toBe(1)
  })
})
