import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import PersonList from '@/components/PersonList.vue'
import { setActivePinia, createPinia } from 'pinia'
import { usePersonsStore } from '@/stores/persons'

describe('PersonList.vue', () => {
  let store;

  beforeEach(() => {
    setActivePinia(createPinia())
    store = usePersonsStore()

    vi.spyOn(store, 'fetchPersons').mockImplementation(() => {
      store.persons = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ]
    })

    vi.spyOn(store, 'updateName').mockImplementation((id, name) => {
      const person = store.persons.find(p => p.id === id)
      if (person) person.name = name
    })

    store.errorMessage = '';
  })

  it('renders the persons correctly', async () => {
    store.persons = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ]
    const wrapper = mount(PersonList)
    expect(wrapper.text()).toContain('Alice')
    expect(wrapper.text()).toContain('Bob')
  })

  it('calls fetchPersons when button is clicked', async () => {
    const wrapper = mount(PersonList)
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(store.fetchPersons).toHaveBeenCalled()
  })

  it('handles update event correctly', async () => {
    store.persons = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ]
    const wrapper = mount(PersonList)
    const editPersonComponents = wrapper.findAllComponents({ name: 'EditPerson' })
    // Check: https://v1.test-utils.vuejs.org/api/wrapper/#emitted
    await editPersonComponents.at(0).vm.$emit('update-event', { id: 1, name: 'Charlie' })
    expect(store.updateName).toHaveBeenCalledWith(1, 'Charlie')
  })

  it('displays an error message if store has an error', async () => {
    const wrapper = mount(PersonList)
    await wrapper.vm.$nextTick();
    store.errorMessage = 'Something went wrong'
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toContain('Something went wrong')
  })
})

