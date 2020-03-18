<?php

namespace CheckoutStepper\Providers;

use IO\Helper\ResourceContainer;
use Plenty\Plugin\Events\Dispatcher;
use Plenty\Plugin\ServiceProvider;
use Plenty\Plugin\Templates\Twig;

class StepperServiceProvider extends ServiceProvider {

    public function register()
    {
    }
    public function boot(Twig $twig, Dispatcher $eventDispatcher)
    {
        $eventDispatcher->listen('IO.Resources.Import', function (ResourceContainer $container)
        {
            $container->addScriptTemplate('Checkout::Content.Scripts');
        }, 1);
    }
}

?>