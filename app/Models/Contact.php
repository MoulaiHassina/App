<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = ['first_name',
        'last_name',
        'email',
        'job_title',
        'city',
        'country', 'gender'];

    use HasFactory;
}
