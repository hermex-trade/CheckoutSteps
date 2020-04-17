import "../scss/steps.scss"

Vue.component("steps-widget", {
    delimiters: ["((", "))"],
    props: ['steps'],
    component: ['step-content'],
    template: '<div>' +
        '<div v-if="!isMobile()" v-on class="step-list col-12">' +
            '<h1 class="step col-lg-3" v-for="(step, index) in steps" @click="setActive(index, $event)" :class="isActive(index)">((step.title))</h1>' +
        '</div>' + 
        '<div v-else class="step-list col-12">' +
            '<h1 v-if="activeIndex === index" class="step mobile col-lg-12" v-for="(step, index) in steps" @click="setActive(index, $event)" :class="isActive(index)">((step.title))</h1>' +
        '</div>' + 
        '<slot></slot>' +
        '<button v-if="activeIndex !== 0" class="col-3 btn btn-primary mr-1" @click="prev">Zurück</button>' +
        '<button v-if="activeIndex !== steps.length - 1"class="col-3 btn btn-primary" @click="next">Weiter</button>' +
    '</div>',
    data: function() {
        return {
            'activeIndex': 0,
            'width': window.innerWidth
        }
    },
    mounted: function() {
        window.addEventListener('resize', this.handleResize)
    }, 
    beforeDestroy: function() {
        window.addEventListener('resize', this.handleResize)
    },
    methods: {
        handleResize(event) {
            this.width = event.currentTarget.innerWidth
        },
        isMobile() {
            if (this.width <= 768) {
                return true;
            } else {
                return false;
            }
        },
        next() {
            if (this.activeIndex !== this.steps.length - 1) {
                this.activeIndex +=1
            }
        },
        setActive(index) {
            this.activeIndex = index;
        },
        prev() {
            if (this.activeIndex !== 0) {
                this.activeIndex -=1
            }
        },
        isActive: function(index) {
            console.log("called is active")
            return {
                active: this.activeIndex === index
            }
        }
    }
});

Vue.component("step-content", {
    props: ['index'],
    delimiters: ["((", "))"],
    template: '<div v-if="isActiveStep">' +
        '<slot></slot>' +
    '</div>',
    computed: {
        isActiveStep() {
            return this.$parent.activeIndex === this.index
        }
    }
})