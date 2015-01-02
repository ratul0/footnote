app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'partials/pages/home.html'
		})
		.when('/contact', {
			templateUrl : 'partials/pages/contact.html',
			controller : 'ContactCtrl'
		})
		.when('/login',{
			templateUrl : 'partials/auth/login.html',
			controller : 'LoginCtrl',
			resolve: {
				isGuest : function(AuthService) {
					return AuthService.is('guest');
				}
			}
		})
		.when('/logout', {
			template : ' ',
			controller : 'LogoutCtrl',
			resolve: {
				isAuth : function(AuthService) {
					return AuthService.is('auth');
				}
			}
		})
		.when('/register', {
			templateUrl : 'partials/auth/register/register.html',
			controller : 'RegisterCtrl',
			resolve: {
				isGuest : function(AuthService) {
					return AuthService.is('guest');
				}
			}
		})

		.otherwise({
			redirectTo: '/'
		});
}]);