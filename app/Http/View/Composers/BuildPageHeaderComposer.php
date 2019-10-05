<?php
declare(strict_types=1);

namespace App\Http\View\Composers;

use CDash\Model\Build;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;

class BuildPageHeaderComposer
{
    protected $build;

    public function __construct(Build $build)
    {
        $this->build = $build;
    }

    public function compose(View $view)
    {
        $user = Auth::user();
        $project = [
            'home' => 'viewProjects.php',
            'project' => 'CDash',
            'projectId' => 1234,
            'homeUrl' => 'https://www.cdash.org',
            'docUrl' =>  'https://public.kitware.com/Wiki/CDash',
            'vcsUrl' => 'https://github/Kitware/CDash',
            'bugUrl' => 'https://github/Kitware/CDash/issues',
            'today' => date('Y-m-d'),
        ];

        $url = url();

        $uri = [
            'current' => $url->current(),
            'previous' => $url->previous(),
            'login' => $url->route('login'),
            'logout' => $url->route('logout'),
            'register' => $url->to('register.php'),
            'home' => $url->to('viewProjects.php'),
            'api' => [
                'version' => 'v2'
            ],
        ];

        $view->with('user', json_encode((object)$user))
            ->with('project', json_encode((object)$project))
            ->with('uri', json_encode((object)$uri));
    }
}
