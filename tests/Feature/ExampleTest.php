<?php

it('see Laravel-vite in welcome view', function () {
    // $this->withoutVite();
    $this->view('welcome')->assertSee('Laravel-vite');
});
