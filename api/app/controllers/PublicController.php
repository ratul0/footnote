<?php 

class PublicController extends BaseController{


	public function home()
	{
		return View::make('home');
	}

	public function login()
	{
		return View::make('login')
						->with('title', 'Login');
	}

	public function doLogin()
	{
		$rules = array
		(
	    	'email' 	=> 'required',
	    	'password' 		=> 'required'
		);
		$allInput = Input::all();
		$validation = Validator::make($allInput, $rules);

		//dd($allInput);


		if($validation->fails())
		{

			return Response::json([
				'msg'	=>	$validation->messages()
			], 400);

			/*return Redirect::route('login')
								->withInput()
								->withErrors($validation);*/
		}
		else
		{
			
			$credentials = array
			(
				'email'		=>	Input::get('email'),
				'password'			=>	Input::get('password')
			);

			if (Auth::attempt($credentials))
			{

				//Session::put('role_title', Auth::user()->role->role_title);
				
				return Response::json([
					'msg'	=>	'Welcome, '.Auth::user()->email."."
				], 200);

			    //return Redirect::intended('dashboard');
			}
			else
			{

				return Response::json([
					'msg'	=>	'Error in Email Address/Password. Try again.'
				], 400);

				/*return Redirect::route('login')
									->withInput()
									->withErrors('Error in Email Address or Password.');*/
			}
		}
	}

	/**
	 * current User
	 * @return object
	 */
	public function currentUser()
	{
		if(Auth::check())
		{
			return Response::json([
				'data'		=>	Auth::user()
				
			], 200);
		}
		else
		{
			return Response::json([
				'data'	=>	'not-logged-in'
			], 200);
		}
	}


	/**
	 * logout a user
	 * @return redirection
	 */
	public function logout()
	{
		Auth::logout();

		return Response::json([
					'msg'	=>	'You have been logged out.'
				], 200);
	}


	public function doRegister()
	{
		$rules = array
		(
			
			'email'                 =>	'required|email|unique:users',
			'password'              =>	'required|confirmed',
			'password_confirmation' => 	'required'
		);
		$validator = Validator::make(Input::all(), $rules);
		
		if($validator->fails())
			return Response::json([
				'msg'	=>	$validator->messages()
			], 400);
		else
		{
			$user = new User;
			
			$user->email = Input::get('email');
			$user->password = Hash::make(Input::get('password'));
			$user->role_id = 2; //user
			
			if($user->save())
			{
				Auth::login($user);
				return Response::json([
						'msg'	=>	'Thank you. You account has been created.'
					], 200);
			}
			else
			{
				return Response::json([
					'msg'	=>	'Some error occured! Please, try again.'
				], 400);
			}
		}
	}
}