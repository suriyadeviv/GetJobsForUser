import Api from '@/services/Api'

export default {

  jobs (username) {
    return Api().get('jobslist', {
      params: {
        username: username
      }
    })
  }
}
