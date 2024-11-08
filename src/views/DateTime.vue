<script setup lang="ts">
import '@mobiscroll/vue/dist/css/mobiscroll.min.css'
import { MbscDatepicker, momentTimezone, setOptions } from '@mobiscroll/vue'
import * as moment from 'moment-timezone'
import { ref } from 'vue'
import Footer from '@/components/NewFooter.vue'

momentTimezone.moment = moment

setOptions({
  theme: 'ios',
  themeVariant: 'light'
})

const selected = ref()

console.log("DateTime Page loaded")
</script>

<template>
  <MbscDatepicker
    :controls="['datetime']"
    :timezonePlugin="momentTimezone"
    v-model="selected"
    dataTimezone="utc"
    displayTimezone="local"
    label="Select Date & Time in Display Timezone"
    inputStyle="outline"
    labelStyle="stacked"
  />
  <div class="mbsc-padding">
    <p v-if="selected">
      Selected date is returned in Data Timezone<br />
      <code>{{ selected }}</code>
    </p>
  </div>
    <footer>
            <Footer />
        </footer>
</template>

