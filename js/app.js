'use strict';

// Global Variables
var storeTable = document.getElementById('table');

// Constructor Functions
function Cookies(name, minCust, maxCust, avgCookiePerCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  Cookies.openHours.push(this);
}

Cookies.openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

// Methods
// Find the random customer per hour
Cookies.prototype.randomCustPerHour = function() {
  return Math.round( Math.random() * (this.maxCust - this.minCust) + this.minCust );
},

// Find the average customer per hour
Cookies.prototype.averagePerHour = function() {
  return Math.round (this.randomCustPerHour() * this.avgCookiePerCust );
},

// Generate the list & append to table
Cookies.prototype.generateList = function() {
  // create a tr
  var trEl = document.createElement('tr');
  // create a td
  var tdEl = document.createElement('td');

  // append various elements to td
  for (var i = 0; i < Cookies.openHours.length; i++) {
  // do this one time = average # of stuff
    for (var j = 0; j < Cookies.openHours.length ; i++){
      // something
      
    }
    storeTable.appendChild(trEl);
  }
};




Cookies.renderHeader = function() {
  var headerRow = document.createElement('tr');

  var headings = ['1st & Pike','SeaTac Airport','Seattle Center', 'Capitol Hill', 'Alki'];

  for( var i = 0; i < Cookies.openHours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = headings[1];
    headerRow.appendChild(thEl);

  }
  // append row to the table
  storeTable.appendChild(headerRow);

};

Cookies.renderFooter = function() {

  var ulElement = document.getElementById('first-pike');
  var runningTotal = 0;

  for(var i = 0; i < Cookies.openHours.length; i++){
    var liElement = document.createElement('li');
    var randomNum = this.averagePerHour();
    runningTotal += randomNum;
    liElement.textContent = `${Cookies.openHours[i]}: ${randomNum} cookies!`;

    ulElement.appendChild(liElement);
  }
  var totalEl = document.createElement('li');
  totalEl.textContent = `Daily Location Total: ${runningTotal}`;
  ulElement.appendChild(totalEl);
  
}





// instances
new Cookies('1st & Pike', 23, 65, 6.3);
new Cookies('SeaTac Airport', 3, 24, 1.2);
new Cookies('Seattle Center', 11, 38, 3.7);
new Cookies('Capitol Hill', 20, 38, 2.3);
new Cookies('Alki', 2, 16, 4.6);


// invoke methods
Cookies.renderHeader();

// firstAndPike.generateList();
// seaTac.generateList();
// seattleCenter.generateList();
// capitolHill.generateList();
// alki.generateList();

Cookies.renderAll = function () {
  for(var i = 0; i < openHours.length; i++){
    Cookies.openHours[i].render();
  }
};

Cookies.renderAll();

// Cookies.renderFooter();
