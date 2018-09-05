<?php

use Illuminate\Database\Seeder;

class Articleseeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        for($i=0; $i<50; $i++){
            DB::table('articles')->insert([
                'title' => str_random(10),
                'body' => str_random(10).'@gmail.com',
            ]);
        }

    }
}
