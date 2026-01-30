// Add your custom JavaScript here

const app = new Vue({
    el: '#app',
    data() {
        return {
            events: [
                {eventid: 'EVT10001', eventname: 'Tech Innovations Conference', category: 'Technology', durationhour: 8},
                {eventid: 'EVT10002', eventname: 'Startup Pitch Day', category: 'Business', durationhour: 6},
                {eventid: 'EVT10003', eventname: 'AI & Machine Learning Summit', category: 'Technology', durationhour: 10},
                {eventid: 'EVT10004', eventname: 'Cybersecurity Workshop', category: 'Technology', durationhour: 4},
                {eventid: 'EVT10005', eventname: 'Digital Marketing Bootcamp', category: 'Marketing', durationhour: 6},
                {eventid: 'EVT10006', eventname: 'Blockchain and Cryptocurrency', category: 'Finance', durationhour: 5},
                {eventid: 'EVT10007', eventname: 'Entrepreneurship Forum', category: 'Business', durationhour: 7},
                {eventid: 'EVT10008', eventname: 'Data Science Hackathon', category: 'Technology', durationhour: 12},
                {eventid: 'EVT10009', eventname: 'Leadership and Management Summit', category: 'Business', durationhour: 9},
                {eventid: 'EVT10010', eventname: 'E-commerce Strategies', category: 'Marketing', durationhour: 6},
                {eventid: 'EVT10011', eventname: 'AI for Business', category: 'Business', durationhour: 8},
                {eventid: 'EVT10012', eventname: 'IoT & Smart Devices Expo', category: 'Technology', durationhour: 7},
                {eventid: 'EVT10013', eventname: 'Brand Strategy and Growth', category: 'Marketing', durationhour: 5},
                {eventid: 'EVT10014', eventname: 'Investment and Wealth Management', category: 'Finance', durationhour: 6},
                {eventid: 'EVT10015', eventname: 'Financial Technology (FinTech) Summit', category: 'Finance', durationhour: 8},
                {eventid: 'EVT10016', eventname: 'AI Ethics and Regulations', category: 'Technology', durationhour: 4},
                {eventid: 'EVT10017', eventname: 'Business Analytics Workshop', category: 'Business', durationhour: 6},
                {eventid: 'EVT10018', eventname: 'SEO and Content Marketing', category: 'Marketing', durationhour: 7},
                {eventid: 'EVT10019', eventname: 'Cryptocurrency Investment Strategies', category: 'Finance', durationhour: 9},
                {eventid: 'EVT10020', eventname: 'Social Media Marketing Trends', category: 'Marketing', durationhour: 5}
            ],
            searchEventId: '',
            searchEventName: '',
            searchDuration: '',
            selectedCategory: 'All',
            username: '',
            password: '',
            confirmPassword: '',
            selectedEventCategory: 'Business',
            selectedEventName: '',
            registrationSummary: null,
            currentPage: 1,
            itemsPerPage: 5
        };
    },
    computed: {
        filteredEvents() {
            return this.events.filter(event => {
                return (this.searchEventId === '' || event.eventid.includes(this.searchEventId)) &&
                       (this.searchEventName === '' || event.eventname.toLowerCase().includes(this.searchEventName.toLowerCase())) &&
                       (this.searchDuration === '' || event.durationhour.toString().includes(this.searchDuration)) &&
                       (this.selectedCategory === 'All' || event.category === this.selectedCategory);
            });
        },
        paginatedEvents() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredEvents.slice(start, end);
        },
        totalPages() {
            return Math.ceil(this.filteredEvents.length / this.itemsPerPage);
        },
        pageNumbers() {
            const pages = [];
            if (this.totalPages <= 3) {
                for (let i = 1; i <= this.totalPages; i++) pages.push(i);
            } else if (this.currentPage <= 2) {
                pages.push(1, 2, '...');
            } else if (this.currentPage >= this.totalPages - 1) {
                pages.push('...', this.totalPages - 1, this.totalPages);
            } else {
                pages.push('...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...');
            }
            return pages;
        },
        eventNames() {
            return this.events
                .filter(event => event.category === this.selectedEventCategory)
                .map(event => event.eventname);
        },
        passwordMismatch() {
            return this.confirmPassword.length > 0 && this.password !== this.confirmPassword;
        }
    },
    mounted() {
        if (this.eventNames.length > 0) {
            this.selectedEventName = this.eventNames[0];
        }
    },
    watch: {
        searchEventId() {
            this.currentPage = 1;
        },
        searchEventName() {
            this.currentPage = 1;
        },
        searchDuration() {
            this.currentPage = 1;
        },
        selectedCategory() {
            this.currentPage = 1;
        },
        selectedEventCategory() {
            this.selectedEventName = this.eventNames[0] || '';
            this.currentPage = 1;
        }
    },
    methods: {
        submitRegistration() {
            if (this.passwordMismatch) {
                return;
            }
            this.registrationSummary = {
                username: this.username,
                category: this.selectedEventCategory,
                event: this.selectedEventName
            };
        },
        changePage(page) {
            if (page === '...') return;
            if (page > 0 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
        goToFirstPage() {
            this.currentPage = 1;
        },
        goToLastPage() {
            this.currentPage = this.totalPages;
        }
    }
});
