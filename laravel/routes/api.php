<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StateController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('tasks', 'TaskController')->except(['create', 'edit']);
Route::post('tasks/{task}/like', 'LikeController@like');
Route::get('states', [StateController::class, 'index']);
Route::delete('tasks/{task}', 'TaskController@destroy');