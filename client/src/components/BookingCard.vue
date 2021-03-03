<template>
    <article>
        <section class="booking-info">
            <p><b>Name: </b> {{booking.name}}</p>
            <p><b>Email: </b> {{booking.email}}</p>
        </section>
    </article>
</template>

<script>
    export default {
        name: 'booking-card',
        props: ['booking']
        
    }
</script>

<style lang="css" scoped>

</style>