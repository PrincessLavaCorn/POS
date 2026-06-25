<?php

namespace Database\Factories;

use App\Models\Order;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'total_amount' => fake()->randomFloat(2, 60, 500),
            'amount_paid' => fake()->randomFloat(2, 500, 1000),
            'change_returned' => fake()->randomFloat(2, 0, 440),
            'payment_method' => fake()->randomElement(['Cash', 'GCash', 'Maya']),
            'payment_reference' => null,
            'user_id' => User::factory(),
        ];
    }
}
