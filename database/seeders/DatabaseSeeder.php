<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Models\Contact;

use Storage;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $json = Storage::disk('local')->get('database.json');
        $data = json_decode($json);
        if(is_array($data) || is_object($data))
        {
            foreach ($data as $obj) {
                $contact = new Contact([
                    'first_name' => $obj->name,
                    'last_name' => "",
                    'email' => $obj->email_address,
                    'job_title' => $obj->job_title,
                    'city' => "",
                    'country' => "America"]);
                $contact->save();
        }
    }
    }
}
