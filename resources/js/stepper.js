import "../scss/stepper.scss"

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

Vue.component("step-widget", {
    delimiters: ["((", "))"],
    props: ['steps'],
    component: ['step-content'],
    template: '<div>' +
        '<div class="step-list clickable col-xs-12" v-for="(step, index) in steps" @click="setActive(index, $event)">' +
            '<h1 class="step" :class="isActive(index)">((step.title))</h1>' +
        '</div>' +
        '<slot></slot>' +
        '<button class="col-3 btn btn-primary" @click="prev">Zurück</button>' +
        '<button class="col-3 btn btn-primary" @click="next">Weiter</button>' +
    '</div>',
    data: function() {
        return {
            'activeIndex': 0
        }
    },
    methods: {
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