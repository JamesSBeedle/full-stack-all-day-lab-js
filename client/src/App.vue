<template>
  <div id="app">
    <h1>Hotel Cecil</h1>
    <guest-form></guest-form>
    <!-- <choose-booking-list></choose-booking-list> -->
    <guest-bookings :bookings="bookings"></guest-bookings>
   
    
  </div>
</template>

<script>
import GuestFormVue from './components/GuestForm.vue'
import BookingService from '@/services/BookingServices.js'
import GuestBookingsVue from './components/GuestBookings.vue'

import {eventBus} from '@/main.js'

export default {
  name: 'App',
  data(){
    return {
      bookings: [],
      bookingListNumber: 0
    }
  },
  mounted(){  
    eventBus.$on('new-booking', (booking) => {
      console.log('in bus');
      this.bookings.push(booking)
    })

    eventBus.$on('checked-in', (id) => {
      return this.bookings.filter((booking) => {
        if (booking._id == id){
          booking.checkedIn = true
        }
      })
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
