<template>
    <section>
        <form @submit.prevent="submitForm" method='post'>
            <div class="input-class">
                <label for="name">Enter name: </label>
                <input type="text" name="name" id="name" v-model="name">
            </div>
            
            <div class="input-class">
                <label for="email">Enter email: </label>
                <input type="email" name="email" id="email" v-model="email">
            </div>

            <div>
                <input id="button" type="submit" value="Add Booking">
            </div>

            <b><p id="error-message" v-if="this.errorMessage" >{{this.errorMessage}}</p></b>
            
            
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
                email: null,
                errorMessage: ""
            }
        },
        methods: {
            submitForm(){
                if (this.name && this.email){
                    const newBooking = {
                        name: this.name,
                        email: this.email,
                        checkedIn: false
                    }
                    BookingService.postNewBooking(newBooking)
                    .then(res => eventBus.$emit('new-booking', res))
                } else {
                    this.errorMessage = 'Enter a name and email'
                }
                
            }
        }
    
    }
</script>

<style lang="css" scoped>
*{
    font-family: cursive;
}
section{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.input-class{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

form{
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    background-color: plum;
    padding: 10px;
    border-radius: 20px;
}

#button {
    background-color: grey;
    margin-top: 10px;

}

#error-message{
    color: red;
    font-size: large;
}

</style>