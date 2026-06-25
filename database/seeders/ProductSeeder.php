<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Pork BBQ Cup w/ Rice',
                'category' => 'Meals',
                'price' => '60.00',
                'is_active' => true,
            ],
            [
                'name' => 'Chicken BBQ Cup w/ Rice',
                'category' => 'Meals',
                'price' => 60.00,
                'is_active' => true,
            ],
            [
                'name' => 'Extra Rice',
                'category' => 'Add-ons',
                'price' => 15.00,
                'is_active' => true,
            ],
            [
                'name' => 'Coke Mismo',
                'category' => 'Beverages',
                'price' => 30.00,
                'is_active' => true,
            ],
            [
                'name' => 'Bottled Water',
                'category' => 'Beverages',
                'price' => 20.00,
                'is_active' => true,
            ],

        ];

        foreach ($products as $product) {
            Product::updateOrCreate(['name' => $product['name']], $product);
        }
    }
}
