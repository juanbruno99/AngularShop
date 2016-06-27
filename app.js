//whole code is wrapped in a closure, good practice
(function() {
	//angular is divided in modules [that could match the htms but not necessarily]
	var app= angular.module('store', [ ]); //second argument is array with dependencies list for our application, if we don't have any, still we need to send an empty array
	
	//A controller that holds the tabs' panel logic, to organise the page better
	app.controller('PanelController', function() {
		//set the initial tab as 1 
		this.tab = 1;
		
		//sets the id of a tab to this tab when user clicks on the dom element
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		
		this.isSelected = function(selectedTab) {
			return this.tab === selectedTab;
		};
	});
	
	//A controller (for and) in our 'app' [module] with a function (anonymous for now)
	app.controller('StoreController', function() {
		//a property in the controller that references the data below, the var in the app, THIS will be accessed inside the html later (view)
		this.products = gems;
	});
	
	//A controller for the form models submitted
	app.controller('ReviewController', function() {
		//create and initialise the object that will bind to the model, to be populated later in the html form object 
		this.review = {};
		
		//Function adds a review to an existing product [linking behind the scenes by angular for the specific product?]
		this.addReview = function(product) {
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {}; //reset the review object to clear the form fields in the html after adding.
		};
	});
	
	//a var in our app, data,js object notation
	var gems = [
	{
		name: 'Ruby',
		price: 12.15,
		description: 'Everybody knows what a ruby is.',
		canPurchase: true,
		//Here we put and array with [] but we just only using one object inside the array
		images: [
			{
				//String property represents the path of the image in String
				full: 'http://zohararad.github.io/presentations/falling-in-love-with-ruby/presentation/images/ruby.png'
			}
		], 
		soldOut: false,
		reviews: [
			//each of this in the collection is a review object
			{
			stars: 5,
			body: 'This product is great',
			author: 'joe@thomas.com',
			createdOn: 1397490980837
			}
		]
	}
	,
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'This Gem is geometrically complex and shiny',
		canPurchase: true,
		images: [
			{
				//String property represents the path of the image in String
				full: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Dodecahedron.jpg/240px-Dodecahedron.jpg'
			}
		], 
		soldOut: false,
		reviews: [
		{
			stars: 1,
			body: 'This product sucks',
			author: 'tim@hater.com',
			createdOn: 1397490980837			
		}, 
		{
			stars: 3,
			body: 'This product is acceptable',
			author: 'john@noone.com',
			createdOn: 1397490980837			
		}
		]
	}
	]
	
	
})();
