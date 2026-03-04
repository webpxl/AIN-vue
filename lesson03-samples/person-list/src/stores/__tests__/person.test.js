import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { usePersonsStore } from '@/stores/persons' 
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

describe('Persons Store', () => {
  let store
  let mock

  beforeEach(() => {
    setActivePinia(createPinia())
    store = usePersonsStore()
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.restore()
  })

  it('initializes with empty persons array', () => {
    expect(store.persons).toEqual([])
  })

  it('fetchPersons updates state with API response', async () => {
    const mockData = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
    mock.onGet('http://localhost:3000/persons').reply(200, mockData)
    await store.fetchPersons()
    expect(store.persons).toEqual(mockData)
  })

  it('handles fetchPersons API errors correctly', async () => {
    mock.onGet('http://localhost:3000/persons').reply(500, 'Server Error')
    await store.fetchPersons()
    expect(store.errorMessage).toBe('Request failed with status code 500')
  })

  it('updates a person\'s name in the store', async () => {
    store.persons = [{ id: 1, name: 'Alice' }]
    mock.onPut('http://localhost:3000/persons/1').reply(200)
    await store.updateName(1, 'Charlie')
    expect(store.persons[0].name).toBe('Charlie')
  })

  it('handles updateName API errors correctly', async () => {
    mock.onPut('http://localhost:3000/persons/1').reply(400, 'Bad Request')
    await store.updateName(1, 'Charlie')
    expect(store.errorMessage).toBe('Request failed with status code 400')
  })

  it('retrieves a person correctly', () => {
    store.persons = [{ id: 1, name: 'Alice' }]
    expect(store.getPersonById(1)).toEqual({ id: 1, name: 'Alice' })
    expect(store.getPersonById(2)).toBe(null)
  })
})

