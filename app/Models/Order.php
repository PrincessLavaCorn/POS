<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable(['total_amount', 'amount_paid', 'change_returned', 'payment_method', 'payment_reference', 'user_id'])]
class Order extends Model
{
    use HasFactory;

    protected function casts(): array
    {
        return [
            'total_ammount' => 'decimal:2',
            'ammount_paid' => 'decimal:2',
            'change_returned' => 'decimal:2',
        ];
    }

    public function cashier(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function items(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }
}
