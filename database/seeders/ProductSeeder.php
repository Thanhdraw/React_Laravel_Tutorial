<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('products')->insert([
            [
                'name' => 'Smartphone',
                'image' => 'smartphone.jpg',
                'price' => 500.00,
                'category_id' => 1, // Electronics
            ],
            [
                'name' => 'T-Shirt',
                'image' => 'tshirt.jpg',
                'price' => 20.00,
                'category_id' => 2, // Fashion
            ],
            [
                'name' => 'Laptop',
                'image' => 'laptop.jpg',
                'price' => 1000.00,
                'category_id' => 1, // Electronics
            ],
            [
                'name' => 'Cookbook',
                'image' => 'cookbook.jpg',
                'price' => 15.00,
                'category_id' => 3, // Books
            ],
        ]);

    }
}
