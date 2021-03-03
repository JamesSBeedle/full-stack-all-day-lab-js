<template>
  <div id="app">
    <h1>Hotel Cecil</h1>
    <guest-form></guest-form>
    <guest-bookings :bookings="bookings"></guest-bookings>
    
  </div>
</template>

<script>
import GuestFormVue from './components/GuestForm.vue'
import BookingService from '@/services/BookingServices.js'
 

import {eventBus} from '@/main.js'
import GuestBookingsVue from './components/GuestBookings.vue'
export default {
  name: 'App',
  data(){
    return {
      bookings: []
    }
  },
  mounted(){  
    eventBus.$on('new-booking', (booking) => {
      console.log('in bus');
      this.bookings.push(booking)
    })

    eventBus.$on('delete-booking', (id) => {
      const index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
      })

    BookingService.getBookings()
    .then(bookings => this.bookings = bookings)

  },
  
  components: {
    'guest-form': GuestFormVue,
    'guest-bookings': GuestBookingsVue
  }
}
</script>

<style>

</style>
