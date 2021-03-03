<template>
    <section>
        <button @click="arrivalButton">Arrivals</button>
        <button @click="checkInButton">Checked In</button>
        <button @click="checkOutButton">Checked Out</button>
    </section>
</template>

<script>
import {eventBus} from '@/main.js'

    export default {
        name: 'choose-booking-list',

        methods: {
            arrivalButton(){
                eventBus.$emit('booking-button', 1)
            },
            checkInButton(){
                eventBus.$emit('booking-button', 2)
            },
            checkOutButton(){
                eventBus.$emit('booking-button', 3)
            }
        }
    }
</script>

<style lang="css" scoped>

</style>