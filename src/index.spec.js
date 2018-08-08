import { shallowMount, createLocalVue } from '@vue/test-utils'
import plugin from './index'

const localVue = createLocalVue()

localVue.use(plugin)

describe('VueRecomputed', () => {
  it('adds a computed property', () => {
    let i = 0
    const wrapper = shallowMount({
      render: h => h(),

      recomputed: {
        foo () {
          return i++
        },
      },
    })

    expect(wrapper.vm.foo).toBe(0)
  })
})
