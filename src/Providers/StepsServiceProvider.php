<?php

namespace CheckoutSteps\Providers;

use CheckoutSteps\Widgets\StepsWidget;
use IO\Helper\ResourceContainer;
use Plenty\Plugin\Events\Dispatcher;
use Plenty\Plugin\ServiceProvider;
use Plenty\Plugin\Templates\Twig;
use Plenty\Modules\ShopBuilder\Contracts\ContentWidgetRepositoryContract;

class StepsServiceProvider extends ServiceProvider {

    public function register()
    {
    }

    public function boot(Twig $twig, Dispatcher $eventDispatcher)
    {
        $widgetRepository = pluginApp(ContentWidgetRepositoryContract::class);
        $widgetRepository->registerWidget(StepsWidget::class);

        $eventDispatcher->listen('IO.Resources.Import', function (ResourceContainer $container)
        {
            $container->addScriptTemplate('CheckoutSteps::Content.Scripts');
        }, 0);
    }
}

?>