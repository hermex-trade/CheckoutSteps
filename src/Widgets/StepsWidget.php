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

        $this->create_color_settings($settings);

        $this->create_step_settings($settings);

        return $settings->toArray();
    }

    /**
     * @param $settings
     */
    private function create_color_settings($settings): void
    {
        $colors = $settings->createVerticalContainer("colors")
            ->withName("Widget.colorsLabel");

        $colors->children->createColor("primary")
            ->withName("Widget.primaryColorLabel")
            ->withDefaultValue("#000000")
            ->withToolTip("Widget.primaryColorTooltip");

        $colors->children->createColor("primaryText")
            ->withName("Widget.primaryTextColorLabel")
            ->withDefaultValue("#ffffff")
            ->withToolTip("Widget.primaryTextColorTooltip");

        $colors->children->createColor("secondary")
            ->withName("Widget.secondaryColorLabel")
            ->withDefaultValue("#cccccc")
            ->withToolTip("Widget.secondaryColorTooltip");

        $colors->children->createColor("secondaryText")
            ->withName("Widget.secondaryTextColorLabel")
            ->withDefaultValue("#ffffff")
            ->withToolTip("Widget.secondaryTextColorTooltip");
    }

    /**
     * @param $settings
     */
    private function create_step_settings($settings): void
    {
        $container = $settings->createVerticalContainer("steps")
            ->withName("Widget.stepsLabel")
            ->withList(1);

        $container->children->createText("title")
            ->withName("Widget.stepsNewStepInputName")
            ->withToolTip("Widget.stepsNewStepInputTooltip");

        $container->children->createUUID("uuid");
    }

}

?>