<script setup lang="ts">
import {
  getJson,
  MbscEventcalendar,
  MbscToast,
  setOptions
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'
import Footer from '@/components/NewFooter.vue';

setOptions({
  theme: 'ios',
  themeVariant: 'light'
})

const myEvents = ref([])
const toastMessage = ref('')
const isToastOpen = ref(false)

const myView = {
  calendar: { type: 'month' },
  agenda: { type: 'month' }
}

function handleEventClick(args: { event: { title: string; }; }) {
  toastMessage.value = args.event.title
  isToastOpen.value = true
}

function handleToastClose() {
  isToastOpen.value = false
}

// onMounted(() => {
//   getJson(
//     'https://trial.mobiscroll.com/events/?vers=5',
//     (events) => {
//       myEvents.value = events
//     },
//     'jsonp'
//   )
// })

console.log("Event Page loaded")
</script>

<template>
  <MbscEventcalendar :clickToCreate="false" :dragToCreate="false" :dragToMove="false" :dragToResize="false" :eventDelete="false" :view="myView" :data="myEvents" @event-click="handleEventClick" />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
  <footer>
            <Footer />
        </footer>
</template>

