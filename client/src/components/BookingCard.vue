<template>
    <article>
        <section class="booking-info">
            <p><b>Name: </b> {{booking.name}}</p>
            <p><b>Email: </b> {{booking.email}}</p>

            <form v-if="!booking.checkedIn" @change.prevent="checkedIn">
                <label for="checkedIn">Checked In: </label>
                <input type="checkbox" name="checkedIn" id="checkedIn">
            </form>

            <button id="checkedIn" v-if="booking.checkedIn" @click="deleteBooking">Check Out</button>
            <button id="deleteButton" v-if="!booking.checkedIn" @click="deleteBooking" >Delete Booking</button>
            <br>
            
        </section>
    </article>
</template>

<script>
import BookingService from '@/services/BookingServices.js'

import {eventBus} from '@/main.js'

    export default {
        name: 'booking-card',
        props: ['booking'], 

        data(){
            return {
                currentStatus: null
            }
        },

        methods: {
            checkedIn(){
                let index = this.booking._id
                console.log('indexx', this.booking._id);
                BookingService.updateBooking(index)
                .then(result => eventBus.$emit('checked-in', index))
                
            },
            changeNumber(){
                let index = this.booking._id
                eventBus.$emit('update-number', index)
                console.log('index', index);
            },

            deleteBooking() {
                BookingService.deleteBooking(this.booking._id)
                .then(()=> eventBus.$emit('delete-booking', this.booking._id))
            }
            
        },
        computed:{
            getCheckoutStatus: function(){
                if (this.booking.checkedIn ==1){
                    this.currentStatus = "Check In"
                }
                if (this.booking.checkedIn ==2){
                    this.currentStatus = "Check Out"
                }
                if (this.booking.checkedIn ==3){
                    this.currentStatus = ""
                }
            }
        }
        
    }
</script>

<style lang="css" scoped>

article{
    
    background-color: lightgray;
    padding: 10px;
    margin: 10px;
    border: 10px outset lightslategray;
}

#deleteButton {
    margin-top: 5px;
    color: darkgray;
    background-color: gray;
    border: 3px outset white;
}

</style>