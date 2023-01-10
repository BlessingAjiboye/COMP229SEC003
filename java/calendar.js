
/*
  Author: 
*/

var food = [
			"Bruschetta", "Focaccia Bread", "Dosa", "Mushroom Risotto", 
			"Briyani", "Tandoori Chicken", "Bruschetta", "Tandoori Chicken", 
			"Fish Curry	", "Focaccia Bread", "Fish Curry", "Butter Chicken", 
			"Dosa", "Margherita Pizza", "Fish Curry	", "Dosa", 
			"Dosa", "Butter Chicken", "Margherita Pizza", "Margherita Pizza",
			"Briyani", "Tandoori Chicken", "Mushroom Risotto", "Dosa", 
			"Mushroom Risotto", "Focaccia Bread", "Briyani", "Fish Curry" 
			];
		
var names = [
			"John", "Jenny", "Jose", "Jack", 
			"Tim", "Wong", "Linda", "Peter",
			"Liz", "Angel", "Sousa", "Philip", 
			"Maya", "Mark", "Rani", "Patrick", 
			"Janet", "Meena", "Marie", "Kim", 
			"Henry", "Rock", "Helen", "Kyle", 
			"Roy", "Raj", "Valerie", "Lucy" 
			];

var delivery = [
			"Take-away", "Eat-in", "Eat-in", "Eat-in", 
			"Eat-in", "Eat-in", "Eat-in", "Eat-in", 
			"Eat-in", "Take-away", "Eat-in", "Take-away", 
			"Eat-in", "Eat-in", "Eat-in", "Eat-in", 
			"Eat-in", "Take-away", "Take-away", "Eat-in", 
			"Take-away", "Eat-in", "Eat-in", "Take-away", 
			"Eat-in", "Take-away", "Eat-in", "Eat-in"];
			
			

//function to add days of week to the column headers
function addColumnHeaders() {
	var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	for (var i = 0; i < 7; i++) {
		document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
	}
}


//function to add calendar date
function addCalendarDates() {
	
	var i = 1;
	var paragraphs = "";
	
	do {
	
	var tableCell = document.getElementById("08-" + i);
	paragraphs = tableCell.getElementsByTagName("p");
	paragraphs[0].innerHTML = i;
	i++;
	} while (i <= 28); 
	
}

//function to add food
function addFood() {

	var paragraphs = "";
	for (var i = 0; i < 28; i++) {

		var date = i + 1;
		var tableCell = document.getElementById("08-" + date);
		paragraphs = tableCell.getElementsByTagName("p");
		paragraphs[1].innerHTML += food[i];
	}
}

//function to add names
function addNames() {

	var paragraphs = "";
	for (var i = 0; i < 28; i++) {

		var date = i + 1;
		var tableCell = document.getElementById("08-" + date);
		paragraphs = tableCell.getElementsByTagName("p");
		paragraphs[2].innerHTML += names[i];
	}
}

//function to add delivery option
function addDelivery() {

	var paragraphs = "";
	for (var i = 0; i < 28; i++) {

		var date = i + 1;
		var tableCell = document.getElementById("08-" + date);
		paragraphs = tableCell.getElementsByTagName("p");
		paragraphs[3].innerHTML += delivery[i];
	}
}


//function to populate calendar
function setUpPage() {

addColumnHeaders();
addCalendarDates();
addFood();
addNames();
addDelivery();


} window.addEventListener("load", setUpPage, false);