'use strict';

// Global Variables
var openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var storeTable = document.getElementById('table');

// Constructor Functions
function Construct(minCust, maxCust, avgCookiePerCust) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
}


// Methods
// Find the random customer per hour
Construct.prototype.randomCustPerHour = function() {
  return Math.round( Math.random() * (this.maxCust - this.minCust) + this.minCust );
},

// Find the average customer per hour
Construct.prototype.averagePerHour = function() {
  return Math.round (this.randomCustPerHour() * this.avgCookiePerCust );
},

// Generate the list & append to table
Construct.prototype.generateList = function() {
  // create a tr
  var trEl = document.createElement('tr');

  // create a td
  var rdEl = document.createElement('td');

  // append elements to td
  for (var i = 0; i < openHours.length; i++) {
  // do this one time = average # of stuff
    for (var j = 0; j < WHAT ; i++){
    }
    storeTable.appendChild(trEl);
  }




  var ulElement = document.getElementById('first-pike');
  var runningTotal = 0;

  for(var i = 0; i < openHours.length; i++){
    var liElement = document.createElement('li');
    var randomNum = this.averagePerHour();
    runningTotal += randomNum;
    liElement.textContent = `${openHours[i]}: ${randomNum} cookies!`;

    ulElement.appendChild(liElement);
  }
  var totalEl = document.createElement('li');
  totalEl.textContent = `Daily Location Total: ${runningTotal}`;
  ulElement.appendChild(totalEl);
};




Dog.renderHeader = function() {
  var headerRow = document.createElement('tr');

  var headings = ['1st & Pike','SeaTac Airport','Seattle Center', 'Capitol Hill', 'Alki'];
  
  for( var i = 0; i < openHours.length; i++) {
  var thEl = document.createElement('th');
  thEl.textContent = headings[1];
  headerRow.appendChild(thEl);

  }
// append row to the table
dogtable.appendChild(headerRow);

}


Dog.renderFooter = function() {
  // create th element
  var headerRow = document.createElement('tr');

  var headings = ['Name','Color','Breed', 'Nickname'];
  
  for( var i = 0; i < openHours.length; i++)

}




// instances
var firstAndPike = new Construct(23, 65, 6.3);
var seaTac = new Construct(3, 24, 1.2);
var seattleCenter = new Construct(11, 38, 3.7);
var capitolHill = new Construct(20, 38, 2.3);
var alki = new Construct(2, 16, 4.6);


// invoke methods
dog.renderHeader();

firstAndPike.generateList();
seaTac.generateList();
seattleCenter.generateList();
capitolHill.generateList();
alki.generateList();

dog.renderFooter();