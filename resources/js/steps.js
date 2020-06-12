import "../scss/steps.scss";

Vue.component("steps-widget", {
    delimiters: ["((", "))"],
    props: [
        'steps',
        'primaryColor',
        'secondaryColor',
        'primaryTextColor',
        'secondaryTextColor',
        'stepsBackgroundColor'
    ],
    component: ['step-content'],
    template: '<div>' +
        '<div v-if="!isMobile()" class="step-list col-12">' +
            '<h1 class="step col-lg-3" v-for="(step, index) in steps" @click="setActive(index, $event)" :class="isActive(index)">((step.title))</h1>' +
        '</div>' +
        '<div v-else class="step-list col-12">' +
            '<h1 v-if="activeIndex === index" class="step mobile col-lg-12" v-for="(step, index) in steps" @click="setActive(index, $event)" :class="isActive(index)">((step.title))</h1>' +
        '</div>' +
        '<slot></slot>' +
        '<div class="text-right">' +
            '<button v-if="activeIndex !== 0" class="col-3 btn btn-primary mr-1" @click="prev">Zurück</button>' +
            '<button v-if="activeIndex !== steps.length - 1" class="col-3 btn btn-primary" @click="next">Weiter</button>' +
        '</div>' +
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
    computed: {
        cssVars() {
            return {
                '--primaryColor': primaryColor,
                '--secondaryColor': secondaryColor,
                '--primaryTextColor': primaryTextColor,
                '--secondaryTextColor': secondaryTextColor,
                '--stepsBackgroundColor': stepsBackgroundColor,
            }
        },
        styles() {
            return {
                cssStyle
            }
        }
    },
    methods: {
        handleResize(event) {
            this.width = event.currentTarget.innerWidth
        },
        isMobile() {
            return this.width <= 768;
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