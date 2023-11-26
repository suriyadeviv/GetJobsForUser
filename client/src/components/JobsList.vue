<template>
 <panel title="Jobs List">
  <v-row class="jobs-list"
        style="height: 150px;">
    <div v-if="jobsList.username">
      <div slot="action"></div>

    <v-col class="jobsList-name">
      UserName: {{jobsList.username }}
    </v-col>
    <v-col class="jobsList-display">
      Name: {{jobsList.display_name}}
    </v-col>

    <v-row>
      <v-col class="job-headline">
        <h3>S.No</h3>
      </v-col>
      <v-col class="job-headline">
        <h3>Headline</h3>
      </v-col>
      <v-col class="job-description">
        <h3>Description</h3>
      </v-col>
      <v-col class="job-classification">
        <h3>Classification</h3>
      </v-col>
      <v-col class="job-location">
        <h3>Location</h3>
      </v-col>
      <v-col class="job-added">
        <h3>Date Added</h3>
      </v-col>

    </v-row>
    <v-row
      v-for="(job,index) in jobsList.jobs"
      class="job"
      :key="job.id">
          <v-col class="job-headline">
            {{ index + 1 }}
          </v-col>
          <v-col class="job-headline">
            {{job.headline}}
          </v-col>
          <v-col class="job-description">
            {{job.description}}
          </v-col>
          <v-col class="job-classification">
            {{job.classification_name}}
          </v-col>
          <v-col class="job-location">
            {{job.location_name}}
          </v-col>
          <v-col class="job-added">
            {{getDate(job.date_added)}}
          </v-col>
    </v-row>
    </div>
    <div v-else>{{jobsList.error_message}} </div>
  </v-row>
 </panel>
</template>

<script>
import JobListService from '@/services/JobListService'

export default {
  data () {
    return {
      jobsList: {
        jobs: []
      }
    }
  },
  watch: {
    '$route.query.username': {
      immediate: true,
      async handler (value) {
        this.jobsList = (await JobListService.jobs(value)).data
      }
    }
  },
  methods: {
    getDate (datetime) {
      let date = new Date(datetime).toJSON().slice(0, 10).replace(/-/g, '/')
      return date
    }
  }
}
</script>

<style scoped>
.jobs-list {
  padding: 20px;
  height: auto;
}

.jobsList-name,
.jobsList-display {
  font-size: 24px;
}

.job-headline,
.job-description,
.job-classification,
.job-location,
.job-added {
  width: fit-content;
  font-size: 18px;
  border: 1px solid grey;
}
</style>
