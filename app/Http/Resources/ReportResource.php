<?php
/**
 * Created by PhpStorm.
 * User: fabersoft
 * Date: 10/11/18
 * Time: 13:57
 */

namespace UniEventos\Http\Resources;

use UniEventos\Support\Resources\ApiResource;

/**
 * Class ReportResource
 * @package UniEventos\Http\Resources
 */
class ReportResource extends ApiResource
{
    /**
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return (array)$this->resource;
    }
}