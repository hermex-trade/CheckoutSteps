<?php

namespace CheckoutStepper\Widgets;

use Ceres\Widgets\Helper\BaseWidget;

class StepperWidget extends BaseWidget {
    protected $template = "CheckoutStepper::Widgets.StepperWidget";

    protected function getTemplateData($widgetSettings, $isPreview)
    {
        $steps = $widgetSettings["steps"]["mobile"];
        if (empty($steps)) {
            return [
                "steps" => false
            ];
        };
        return [
            "steps" => $steps
        ];
    }
}

?>