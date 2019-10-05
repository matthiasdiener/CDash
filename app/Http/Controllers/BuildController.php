<?php
declare(strict_types=1);
namespace App\Http\Controllers;

use CDash\Model\Build;

class BuildController extends Controller
{
    public function summary($build_id = null)
    {
        $build = new Build();
        if ($build_id) {
            $build->FillFromId($build_id);
        }

        return view('build.summary')
            ->with('title', 'Build Summary')
            ->with('build', json_encode($build));
    }
}
