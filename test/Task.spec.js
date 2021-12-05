import { mount } from '@vue/test-utils'
import Task from '@/components/Task'

describe('Testing Task component', () => {
  test('Task is a Vue instance', () => {
    const wrapper = mount(Task)
    expect(wrapper.vm).toBeTruthy()
  })

  test('The test props should be a number', () => {
    const wrapper = mount(Task)
    expect(typeof wrapper.props().test).toBe('number')
  })

  test('Test non existent prop', () => {
    const wrapper = mount(Task, {
      propsData: {
        run: 'aas',
      },
    })

    expect(wrapper.props().run).toBeUndefined()
  })
})
