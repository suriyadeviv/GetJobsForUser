<template>
  <panel title="User List">
    <v-select label="Select User name"
      v-model="username"
      :items=usersList>
    </v-select>
    <br>
  </panel>
</template>

<script>
import _ from 'lodash'
import UserListService from '@/services/UserListService'

export default {
  data () {
    return {
      username: '',
      usersList: []
    }
  },
  watch: {
    username: _.debounce(async function (value) {
      const route = {
        name: 'jobs'
      }
      if (this.username !== '') {
        route.query = {
          username: this.username
        }
      }
      this.$router.push(route, () => {})
    }, 700),
    '$route.query.username': {
      immediate: true,
      handler (value) {
        this.username = value
      }
    }
  },
  async mounted () {
    if (this.username === undefined) {
      this.usersList = (await UserListService.usersList()).data
    }
  }
}
</script>

<style scoped>

</style>
