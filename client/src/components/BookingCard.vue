<template>
    <article>
        <section class="booking-info">
            <p><b>Name: </b> {{booking.name}}</p>
            <p><b>Email: </b> {{booking.email}}</p>

            <form v-if="!booking.checkedIn" @submit.prevent="checkedIn">
                <label for="checkedIn">Checked In: </label>
                <input type="checkbox" name="checkedIn" id="checkedIn">
                <input type="submit" value="Save">
            </form>

            <button v-if="booking.checkedIn">Check Out</button>
            <button v-if="!booking.checkedIn">Delete Booking</button>
            <br>
            
        </section>
    </article>
</template>

<script>
import {eventBus} from '@/main.js'

    export default {
        name: 'booking-card',
        props: ['booking'],

        methods: {
            checkedIn(){
                // let index = this.booking._id
                // console.log('indexx', this.booking);
                // eventBus.$emit('checked-in', updatedBooking)
            }
            
        }
        
    }
</script>

<style lang="css" scoped>

</style>