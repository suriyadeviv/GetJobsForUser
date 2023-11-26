import Vue from 'vue'
import { mount } from '@vue/test-utils'
import JobsList from '@/components/JobsList'

describe('JobsList.vue', () => {
  const wrapper = mount(JobsList)
  it('has data', () => {
    expect(typeof JobsList.data).toBe('function')
  })

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('Jobs List')
  })
})
