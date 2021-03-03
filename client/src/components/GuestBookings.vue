<template>
    <article>
        <h1>All Bookings</h1>
        <booking-card v-for="(booking, index) in bookings" :key="index" :booking="booking">
        </booking-card>
    </article>
</template>

<script>
import BookingCardVue from './BookingCard.vue'
    export default {
        name: 'guest-bookings',
        props: ['bookings'],

        components:{
            'booking-card': BookingCardVue
        }

        
    }
</script>

<style lang="css" scoped>
</style>