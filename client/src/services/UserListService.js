import Api from '@/services/Api'

export default {

  usersList () {
    return Api().get('userlist')
  }
}
