import "../scss/stepper.scss"

Vue.component("step-content", {
    props: ['index'],
    delimiters: ["((", "))"],
    template: '<div v-if="isActiveStep">' +
        '<slot></slot>' +
        '<p>((index))</p>' +
    '</div>',
    computed: {
        isActiveStep() {
            return this.$parent.activeIndex === this.index
        }
    }
})

Vue.component("stepper-widget", {
    delimiters: ["((", "))"],
    props: ['steps'],
    component: ['step-content'],
    template: '<div>' +
        '<div class="step clickable" v-for="(step, index) in steps" @click="setActive(index, $event)"><h1>((step.title))</h1></div>' +
        '<slot></slot>' +
        '<button @click="prev">Zurück</button>' +
        '<button @click="next">Weiter</button>' +
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
        }
    }
});

Vue.component("step-widget", {
    delimiters: ["((", "))"],
    props: ['steps'],
    template: '<div>' +
        '<div class="step-list" v-for="(step, index) in steps">' +
            "<step-list class='step' v-if='index === activeIndex' :title='((step.title))' :uuid='((step.uuid))' :active='true' />" +
            "<step-list class='step' @click='setActive(index)' v-else :title='((step.title))' :uuid='((step.uuid))' />" +
        '</div>' +
        '<slot></slot>' +
        '<button @click="prev">Zurück</button>' +
        '<button @click="next">Weiter</button>' +
    '</div>',
    data: function() {
        return {
            'activeIndex': 0
        }
    },
    methods: {
        next() {
            if (this.activeIndex < this.steps.length - 1) {
                this.activeIndex += 1;
            }
        }, 
        setActive(index) {
            thiss.activeIndex = index;
        },
        prev() {
            if (this.activeIndex != 0) {
                this.activeIndex -= 1;
            }
        },
    }
});