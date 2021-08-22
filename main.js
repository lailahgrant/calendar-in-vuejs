import moment from 'https://cdn.jsdelivr.net/npm/vue-moment@4.0.0-0/vue-moment.min.js'



var app = new Vue({
    el: "#app",
    
    data: {
        heading: "Calendar",
        today: moment(),
        dateContext: moment(),
        days: ['S', 'M', 'T', 'W', 'T', 'F','S']
    },
    
    methods: {
        nextMonth() {
            this.dateContext = moment(this.dateContext).add(1, 'month');
        }
    },
})