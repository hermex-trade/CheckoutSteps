import "../scss/stepper.scss"

Vue.component("test-widget", {
    delimiters: ["((", "))"],
    props: ['steps', 'children'],
    template: '<div>' +
        '<div v-for="step in steps">' + 
            '<p>((step.title))</p>' +
            '<p>((step.active))</p>' +
            '<p>((step.uuid))</p>' +
        '</div>' +
    '</div>'
});

Vue.component("step-widget", {
    delimiters: ["((", "))"],
    props: ['steps'],
    template: '<div>' +
        '<div class="step-list" v-for="(step, index) in steps">' +
            "<step-list class='step' v-if='index === 0' :title='((step.title))' :uuid='((step.uuid))' :active='true' />" +
            "<step-list class='step' v-else :title='((step.title))' :uuid='((step.uuid))' />" +
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
        prev() {
            if (this.activeIndex != 0) {
                this.activeIndex -= 1;
            }
        },
    }
});

Vue.component("step-list", 
{
    delimiters: ["((","))"],
    template: '<div :class="{active: isActive}" @click="setActive"><p>((title))</p></div>',
    props: {
        title: String,
        uuid: String, 
        active: {
            type: Boolean,
            default: false,
        }
    },
    data: function() {
        return {
            isActive: false
        }
    },
    watch: {
        active: {
            handler(newValue) {
                this.isActive = newValue;
            },
            immediate: true,
        }
    },
    methods: {
        setActive() {
            this.$emit('isActive', this.isActive);
        }
    },
});

Vue.component("step-content", 
{
    delimiters: ["((", "))"],
    props: {
        title: String,
        uuid: String, 
        active: {
            type: Boolean,
            default: false,
        },
        content: {},
    },
    template: '<div class="content" :class="{active: active}">' +
        '<h1>((title))</h1>' +
        '<slot></slot>' +
    '</div>'
});