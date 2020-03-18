import '../css/stepper.scss'

Vue.component("stepper-widget", {
    template: `<div class="stepper-component"></div>`,
    props: {
        steps: {
            type: Array,
            required: true,
        }
    },

});

Vue.component("step", {
    template: `<li class="step"></li>`,
    props: {
        index: {
            type: Number,
            required: true,
        },
        isActive: {
            type: Boolean,
            required:true,
        }
    }
});