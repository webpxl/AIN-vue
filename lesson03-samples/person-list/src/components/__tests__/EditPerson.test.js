import { mount } from '@vue/test-utils'
import EditPerson from '@/components/EditPerson.vue'
import { describe, it, expect, vi, beforeEach } from 'vitest'

describe('EditPerson.vue', () => {
  const person = { id: 1, name: 'John Doe' }

  it('renders the person’s name and edit button', () => {
    const wrapper = mount(EditPerson, {
      props: { person }
    })
    expect(wrapper.text()).toContain('Name: John Doe')
    expect(wrapper.find('button').text()).toBe('Edit')
  })

  it('shows input field when edit button is clicked', async () => {
    const wrapper = mount(EditPerson, {
      props: { person }
    })

    await wrapper.find('button').trigger('click') 
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('Update') 
  })

  it('updates name and emits event when update is clicked', async () => {
    const wrapper = mount(EditPerson, {
      props: { person }
    })

    await wrapper.find('button').trigger('click') 
    const input = wrapper.find('input')
    await input.setValue('Jane Doe') 
    await wrapper.find('button').trigger('click') 
    expect(wrapper.emitted('update-event')).toBeTruthy()
    expect(wrapper.emitted('update-event')[0]).toEqual([{ id: 1, name: 'Jane Doe' }])
  })

  it('does not emit update event if name is unchanged', async () => {
    const wrapper = mount(EditPerson, {
      props: { person }
    })
    await wrapper.find('button').trigger('click') 
    expect(wrapper.emitted('update-event')).toBeFalsy()
  })

  it('cancels edit and restores original name when cancel is clicked', async () => {
    const wrapper = mount(EditPerson, {
      props: { person }
    })
    await wrapper.find('button').trigger('click')
    const input = wrapper.find('input')
    await input.setValue('Jane Doe')
    await wrapper.findAll('button')[1].trigger('click')
    expect(wrapper.text()).toContain('Name: John Doe')
    expect(wrapper.find('input').exists()).toBe(false)
  })
})

