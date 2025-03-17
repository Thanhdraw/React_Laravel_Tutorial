<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/{any}', function () {
    return View::make('welcome'); // Trả về trang chứa React
})->where('any', '.*');