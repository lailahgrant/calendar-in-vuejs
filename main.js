

var app = new Vue({
    el: "#app",
    
    data: {
        heading: "Calendar",
        today: moment(),
        dateContext: moment(),
        days: ['S', 'M', 'T', 'W', 'T', 'F','S']
    },
    
    methods: {
        // on the arrows to next month or previous month
        nextMonth() {
            this.dateContext = moment(this.dateContext).add(1, 'month');
        },

        lastMonth(){
            this.dateContext = moment(this.dateContext).subtract(1, 'month');
        }
    },

    computed: {
        year() {
            return  this.dateContext.format('YYYY');
        },

        month() {
            return this.dateContext.format('MMMM');
        },

        daysInMonth: function () {
            return this.dateContext.daysInMonth();
        },

        currentDate() {
            return this.dateContext.get('date');
        },

        firstDayOfMonth() {
            var firstDay = moment(this.dateContext).subtract((this.currentDate - 1), 'days');
            return firstDay.weekday();
        }
    }
})