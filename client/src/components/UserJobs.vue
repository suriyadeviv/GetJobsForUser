<template>
    <v-flex>
      <h1> Yell Coding challenge </h1>
      <user-list />

      <jobs-list/>
    </v-flex>
</template>

<script>
import JobsList from './JobsList'
import UserList from './UserList'

export default {
  components: {
    UserList,
    JobsList
  },
  data () {
    return {
      jobs: null
    }
  }
}
</script>

<style scoped>

</style>
