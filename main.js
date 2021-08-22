

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
        },

        lastMonth(){
            this.dateContext = moment(this.dateContext).subtract(1, 'month');
        }
    },
})