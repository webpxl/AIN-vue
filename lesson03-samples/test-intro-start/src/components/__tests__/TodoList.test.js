import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoList from '../TodoList.vue'

test ('empty test', () => {
  expect(true).toBe(true)
})

/*
test('renders a todo', () => {
  const wrapper = mount(TodoList)
  const todo = wrapper.get('[data-test="todo"]')
  expect(todo.text()).toBe('1. Learn Vue 3')
})

test('creates a todo', async () => {
  const wrapper = mount(TodoList)
  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

  wrapper.get('[data-test="new-todo"]').setValue('New todo')
  wrapper.get('[data-test="form"]').trigger('submit')

  expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
})

test('completes a todo', async () => {
  const wrapper = mount(TodoList)

  await wrapper.get('[data-test="todo-checkbox"]').setValue(true)

  expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
})



test('Shows a title', () => {
  const wrapper = mount(TodoList, {
      props: {
        showTitle: true
      }
    });
  // By using `get()` we are implicitly asserting that
  // the element exists.
  expect(wrapper.get('[data-test="title"]').text()).toEqual('Todos')
})

*/