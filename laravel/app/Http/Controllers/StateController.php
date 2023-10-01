<?php

namespace App\Http\Controllers;

use App\State;

class StateController extends Controller
{
    public function index()
    {
        $states = State::pluck('name')->toArray();

        return response()->json(['states' => $states]);
    }
}
