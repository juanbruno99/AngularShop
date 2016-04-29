//whole code is wrapped in a closure, good practice
(function() {
	//angular is divided in modules [that could match the htms but not necessarily]
	var app= angular.module('store', [ ]); //second argument is array with dependencies list for our application, if we don't have any, still we need to send an empty array
	
	
	//A controller (for and) in our 'app' [module] with a function (anonymous for now)
	app.controller('StoreController', function() {
		//a property in the controller that references the data below, the var in the app, THIS will be accessed inside the html later (view)
		this.products = gems;
	});
	
	//A controller that holds the tabs' panel logic, to organise the page better
	app.controller('PanelController', function() {
		//set the initial tab as 1 
		this.tab = 1;
		
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		
		this.isSelected = function(selectedTab) {
			return this.tab === selectedTab;
		};
	});
	
	//a var in our app, data,js object notation
	var gems = [
	{
		name: 'Ruby',
		price: 12.15,
		description: 'Insert a description here',
		canPurchase: true,
		//Here we put and array with [] but we just only using one object inside the array
		images : [
			{
				//String property represents the path of the image in String
				full: 'http://zohararad.github.io/presentations/falling-in-love-with-ruby/presentation/images/ruby.png'
			}
		], 
		soldOut: false
	}
	,
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Insert a description here',
		canPurchase: true,
		images : [
			{
				//String property represents the path of the image in String
				full: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Dodecahedron.jpg/240px-Dodecahedron.jpg'
			}
		], 
		soldOut: false
	}
	]
	
	
})();
