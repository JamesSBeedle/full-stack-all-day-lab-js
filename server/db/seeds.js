use hotel_bookings
db.dropDatabase()

db.bookings.insertMany([
    {
        name: 'James Beedle',
        email: 'james.beedle@codecland.com',
        checkedIn: false
    },
    {
        name: 'Andrew Hunter',
        email: 'andrew.hunter@codecland.com',
        checkedIn: false
    },
    {
        name: 'Harrison Booth',
        email: 'harrison_loves_jaguars@codecland.com',
        checkedIn: true
    },
])
