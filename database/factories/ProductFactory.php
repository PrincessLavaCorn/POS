<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word() . ' BBQ',
            'category' => fake()->randomElement(['Meals', 'Beverages', 'Add-ons']),
            'price' => fake()->randomFloat(2, 20, 150),
            'is_active' => true,
        ];
    }
}
