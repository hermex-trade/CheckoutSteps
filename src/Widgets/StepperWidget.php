<?php

namespace CheckoutStepper\Widgets;

use Ceres\Widgets\Helper\BaseWidget;
use Ceres\Widgets\Helper\Factories\WidgetDataFactory;
use Ceres\Widgets\Helper\Factories\WidgetSettingsFactory;
use Ceres\Widgets\Helper\WidgetTypes;


class StepperWidget extends BaseWidget {

    protected $template = "CheckoutStepper::Widgets.StepperWidget";

    protected function getTemplateData($widgetSettings, $isPreview) 
    {
        $steps = $widgetSettings["steps"]["mobile"];
        $containers = $widgetSettings["steps"]["children"]["mobile"];

        if (empty($steps) || empty($containers)) 
        {
            return [
                "steps_data" => false
            ];
        }

        if ($steps && $containers) 
        {
            return [
                "steps_data" => [
                    "steps" => $steps,
                    "containers" => $containers
                ]
            ];
        }

        return [
            "steps_data" => false
        ];
    }

    public function getData() 
    {
        return WidgetDataFactory::make("CheckoutStepper::StepperWidget")
            ->withLabel("Widget.stepperLabel")
            ->withPreviewImageUrl("/images/widgets/stepper.svg")
            ->withMaxPerPage(1)
            ->withType(WidgetTypes::STATIC)
            ->toArray();
    }

    public function getSettings() 
    {
        $settings = pluginApp(WidgetSettingsFactory::class);

        $container = $settings->createVerticalContainer("steps")
            ->withList(1)
            ->withName("Widget.stepperNewStepLabel");

        $container->children->createText("title")
            ->withName("Widget.stepperNewStepInputName")
            ->withToolTip("Widget.stepperNewStepInputTooltip");

        $container->children->createUUID("uuid");

        return $settings->toArray();
    }

}

?>