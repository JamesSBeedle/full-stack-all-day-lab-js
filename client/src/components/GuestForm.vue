<template>
    <section>
        <form @submit.prevent="submitForm" method='post'>
            <label for="name">Enter guest name: </label>
            <input type="text" name="name" id="name" v-model="name">

            <label for="email">Enter guest email: </label>
            <input type="email" name="email" id="email" v-model="email">
            <input type="submit" value="Add Booking">
        </form>
    </section>
</template>

<script>
import BookingService from '@/services/BookingServices.js'

import {eventBus} from '@/main.js'
    export default {
        name: 'guest-form',
        data(){
            return {
                name: null,
                email: null
            }
        },
        methods: {
            submitForm(){
                const newBooking = {
                    name: this.name,
                    email: this.email,
                    checkedIn: false
                }
                eventBus.$emit('new-booking', newBooking)
                // BookingService.postNewBooking(newBooking)
                // .then(res => eventBus.$emit('new-booking', res))
                
            }
        }
    
    }
</script>

<style lang="css" scoped>

</style>