<?php

namespace CheckoutSteps\Widgets;

use Ceres\Widgets\Helper\BaseWidget;
use Ceres\Widgets\Helper\Factories\WidgetDataFactory;
use Ceres\Widgets\Helper\Factories\WidgetSettingsFactory;
use Ceres\Widgets\Helper\WidgetTypes;
use Plenty\Plugin\ConfigRepository;
use IO\Services\TemplateConfigService;




class StepsWidget extends BaseWidget {

    protected $template = "CheckoutSteps::Widgets.StepsWidget";

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

        $container = $settings->createVerticalContainer("steps")
            ->withList(1)
            ->withName("Widget.stepsNewStepLabel");

        $container->children->createText("title")
            ->withName("Widget.stepsNewStepInputName")
            ->withToolTip("Widget.stepsNewStepInputTooltip");

        $container->children->createUUID("uuid");

        return $settings->toArray();
    }

}

?>