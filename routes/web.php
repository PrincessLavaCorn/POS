<?php

use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::inertia('pos', 'pos')->name('pos');

    Route::get('pos', function () {
        return Inertia::render('pos', [
            'products' => Product::where('is_active', true)
            ->orderBy('category')
            ->orderBy('name')
            ->get(['id', 'name', 'category', 'price']),
        ]);
    })->name('pos');
});

require __DIR__.'/settings.php';
