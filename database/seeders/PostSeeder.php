<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
Use App\Models\Post;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('posts')->insert([
        //     'title' => 'Ini julu',
        //     'description' => 'Ini dekskripsi',
        //     'author_id' => 1,
        // ]);

        // Post::factory()->count(10)->create();
        \App\Models\Post::factory(10)->create();

    }
}
