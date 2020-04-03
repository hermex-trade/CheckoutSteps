import "../scss/stepper.scss"

Vue.component("stepper-widget",
{
    delimiters: ["((","))"],
    props: ['steps', 'children'],
    template: '<div class="stepper-navigation">' +
        '<div class="container">' +
            '<ul class="stepperbar">' +
                '<li :class="isActive(step.active)" v-for="(step, index) in steps">((step.title))</li>' +
            '</ul>' + 
        '</div>' + 
        '<div class="my-4 sm-12 step" :class="isActive(step.active)" v-for="(step, index) in steps">' +
            '<h1>((step.title))</h1>' +
            '<button v-if="index != 0" @click="prev(index)">Zurück</button>' +
            '<button v-if="index < steps.length - 1" @click="next(index)">Weiter</button>' +
        '</div>' +
    '</div>',
    created() {
        this.addActiveProps();
    },
    methods: {
        isActive(step) {
            if (step === true) {
                return "active"
            }
        },
        addActiveProps() {
            var steps = this.steps;
            steps[0].active = true;
            for (var i = 1; i < steps.length; i++) {
                steps[i].active = false;
            }
        },
        next(currentStepIndex) {
            var nextIndex = currentStepIndex + 1;
            this.switchActive(nextIndex, currentStepIndex);
        },
        prev(currentStepIndex) {
            var prevIndex = currentStepIndex - 1;
            this.switchActive(prevIndex, currentStepIndex);
        },
        switchActive(activeStepIndex, currentStepIndex) {
            var steps = this.steps;
            steps[activeStepIndex].active = true;
            steps[currentStepIndex].active = false;
            console.log(steps)
        },
        setActive(index) {
            var steps = this.steps;
            for (var i = 0; i < steps.length; i++) {
                steps[i].active = false;
            }
            steps[index].active = true;
        }
    },
});