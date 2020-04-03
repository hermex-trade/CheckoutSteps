<?php

namespace CheckoutStepper\Providers;

use CheckoutStepper\Widgets\StepperWidget;
use IO\Helper\ResourceContainer;
use Plenty\Plugin\Events\Dispatcher;
use Plenty\Plugin\ServiceProvider;
use Plenty\Plugin\Templates\Twig;
use Plenty\Modules\ShopBuilder\Contracts\ContentWidgetRepositoryContract;

class StepperServiceProvider extends ServiceProvider {

    public function register()
    {
    }

    public function boot(Twig $twig, Dispatcher $eventDispatcher)
    {
        $widgetRepository = pluginApp(ContentWidgetRepositoryContract::class);
        $widgetRepository->registerWidget(StepperWidget::class);

        $eventDispatcher->listen('IO.Resources.Import', function (ResourceContainer $container)
        {
            $container->addScriptTemplate('CheckoutStepper::Content.Scripts');
        }, 0);
    }
}

?>