<?php

namespace CheckoutSteps\Widgets;

use Ceres\Widgets\Helper\BaseWidget;
use Ceres\Widgets\Helper\Factories\WidgetDataFactory;
use Ceres\Widgets\Helper\Factories\WidgetSettingsFactory;
use Ceres\Widgets\Helper\WidgetTypes;


class StepsWidget extends BaseWidget {

    protected $template = "CheckoutSteps::Widgets.StepsWidget";

    protected function getTemplateData($widgetSettings, $isPreview) 
    {
        $steps = $widgetSettings["steps"]["mobile"];
        $containers = $widgetSettings["steps"]["children"]["mobile"];
        $colors = $widgetSettings["colors"]["children"]["mobile"];

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
                    "containers" => $containers,
                    "colors" => $colors,
                ]
            ];
        }

        return [
            "steps_data" => false
        ];
    }

    public function getData() 
    {
        return WidgetDataFactory::make("CheckoutSteps::StepsWidget")
            ->withLabel("Widget.stepsLabel")
            ->withPreviewImageUrl("/images/widgets/steps.svg")
            ->withMaxPerPage(1)
            ->withType(WidgetTypes::STATIC)
            ->toArray();
    }

    public function getSettings() 
    {
        $settings = pluginApp(WidgetSettingsFactory::class);

        $settings->createCustomClass();

        $colors = $settings->createVerticalContainer("colors")
            ->withName("Widget.colorsLabel");

        $colors->children->createColor("primary")
            ->withName("Widget.primaryColorLabel")
            ->withToolTip("Widget.primaryColorTooltip");

        $colors->children->createColor("secondary")
            ->withName("Widget.secondaryColorLabel")
            ->withToolTip("Widget.secondaryColorTooltip");

        $container = $settings->createVerticalContainer("steps")
            ->withList(1)
            ->withName("Widget.stepsLabel");

        $container->children->createText("title")
            ->withName("Widget.stepsNewStepInputName")
            ->withToolTip("Widget.stepsNewStepInputTooltip");

        $container->children->createUUID("uuid");

        return $settings->toArray();
    }

}

?>