import Vue from 'vue'
import { mount } from '@vue/test-utils'
import UserList from '@/components/UserList'

describe('UserList.vue', () => {
  const wrapper = mount(UserList)
  it('has data', () => {
    expect(typeof UserList.data).toBe('function')
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('Select User name')
  })
})
