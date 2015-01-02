<?php

class RolesTableSeeder extends Seeder {

    public function run()
    {
        DB::table('roles')->delete();

        

		$roles = [
			[
				'role_title'	=>	'Admin',
				'system_delete' => true
			],

			[
				'role_title'	=>	'User',
				'system_delete' => false
			]



		];

        DB::table('roles')->insert($roles);
    }

}