About
———————
A Really simple Angular Frontend and Java Backend That uses the giphy API
to search for gifs and stores them in the Database as "Lists" that can be
reterived later.


Installation
——————————————
* My SQL
	Use the provided sql backup file 
	OR 
	Just create a database 'angular' 
	with table 'urldata' with two varchar fields
	'Username' and 'URL' (All fields are primary key)

* Backend
	Open WebApplication2 in Netbeans and Press the run button.
	URL http://localhost:8080/WebApplication2/ should show some generic
	html in the browser

* Frontend
	An Angular Project is stored in frontend. Use "ng serve" command
	to start it.	
	
Usage
———————

This is a simple single page web app. The first text box is to search in 
giphy, the next one is to retrieve lists from the database.

After pressing the search button, one can add the gif's url to a specified
list (or the "default" one) by pressing the Add button under each gif.

Search results from giphy has simple pagination support using the limit and 
offset fields.

The list of stored gifs is displayed below the search results.