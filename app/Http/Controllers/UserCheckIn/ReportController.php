<?php
/**
 * Created by PhpStorm.
 * User: fabersoft
 * Date: 10/10/18
 * Time: 11:24
 */

namespace UniEventos\Http\Controllers\UserCheckIn;

use UniEventos\Http\Controllers\Controller;
use UniEventos\Models\Programming;

class ReportController extends Controller
{
    public function participants(Programming $programming)
    {
        return $programming->checkIns;
    }
}