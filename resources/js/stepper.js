import '../css/stepper.scss'

Vue.component("stepper-widget", {
    template: `<div class="stepper-component"></div>`,
    props: {
        steps: {
            type: Array,
            required: true,
        },
        activeStepIndex: {
            type: Number,
            default: 0,
            required: true,
        }
    },

    methods: {
        nextStep() {
            const nextIndex = activeStepIndex + 1;
            setActiveStep(nextIndex);
        },
        prevStep() {
            const prevIndex = activeStepIndex - 1;
            setActiveStep(prevIndex);
        },
        setActiveStep(stepIndex) {

        }
    }

});
