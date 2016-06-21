var myApp = angular.module("myApp",['ngRoute']);

myApp.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'portfolio/views/front.html',
		controller: 'frontController'
	}).when('/technologies',{
		templateUrl: 'portfolio/views/technologies.html',
		controller: 'myController'
	}).when('/projects',{
		templateUrl: 'portfolio/views/projects.html',
		controller: 'myController'
	}).when('/contact',{
		templateUrl: 'portfolio/views/contact.html',
		controller: 'myController'
	}).when('/thankyou',{
		templateUrl: 'portfolio/views/thankyou.html',
		controller: 'myController'
	})
});

myApp.controller("myController", function($scope,$location){
});

myApp.controller("frontController", function($scope,$location){
  function typeItOut(sentence, id){
	    document.getElementById(id).innerHTML = '';
	      for(var i = 0; i < sentence.length; i++){
	        (function(index) {
	          setTimeout(function() {
	            document.getElementById(id).innerHTML+=sentence[index];
	          }, 60 * i);
	        })(i);
	      }
  }
  setTimeout(
    function(){
      typeItOut('Full Stack Web Developer', 'typing-header');
      setTimeout(
        function(){
          typeItOut('DigitalCrafts Immersive Code School', 'studentHeader');
          setTimeout(
            function(){
              typeItOut('June 2016', 'graduation');
              setTimeout(
                function(){
                  typeItOut('JavaScript', 'js');                       
                  setTimeout(
                	function(){
	                  typeItOut('PHP', 'php'); 
	                  setTimeout(
		                function(){
		                  typeItOut('MEAN STACK', 'mean'); 
		                  setTimeout(
			                function(){
			                  typeItOut('LAMP STACK', 'lamp'); 
			                  setTimeout(
			                    function(){
			                      typeItOut('B.A. University of Tennessee', 'univ');
			                      setTimeout(
			                        function(){
			                          typeItOut('Multilingual: Mandarin Chinese, Thai, Spanish, English', 'language');
			         					setTimeout(
			                      			function(){
			                      				typeItOut('<----This is the code that types ^everything above^ out. ;)', 'explain');
			                   		 	}, 2500);
			                      	}, 1500);
			                    }, 700);
			                }, 700);
			            }, 700);
			        }, 700);
			    }, 900);
	        }, 2100);
        }, 1600);
    }, 500);  
});
	