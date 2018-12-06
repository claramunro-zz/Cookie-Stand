'use-strict';

// Global Variables

// Link table with id #table from HTML to a JS variable
var salesTable = document.getElementById('table');

// Store hours, X-axis
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// holds all of the footer #'s and store total #'s
var grandArray = [];

// Link form with id #new-form from HTML to a JS variable!!
var cookieForm = document.getElementById('new-form');


// Constructor Function
function BuildStore (name, minCust, maxCust, avgCookiePerSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerSale = avgCookiePerSale;
  this.totalCookiesPerStore = 0;
  this.cookiesPerHour = [];
  BuildStore.allStores.push(this);
}

BuildStore.allStores = [];

// render a ROW & add CELLS that are random number generated based on the array
BuildStore.prototype.render = function() {
  var trEl = document.createElement('tr'); // make a tr (row)
  var tdEl = document.createElement('td'); // make a td (cell)
  tdEl.textContent = this.name; // fill the td (cell) with the name
  trEl.appendChild(tdEl); // link the td (cell) to the tr (row)
  salesTable.appendChild(trEl); // link the tr (row) to the form (salesTable)

  for(var i = 0; i < hours.length; i++) { // for each hour index (x-axis), generate a random #)
    tdEl = document.createElement('td'); // make a td (cell)
    var randomNumber = Math.floor( (Math.floor( Math.random() * (this.maxCust - this.minCust) + this.minCust) ) * this.avgCookiePerSale );
    tdEl.textContent = randomNumber; // add this random # for the content to the td
    trEl.appendChild(tdEl); // add this td to the tr
    this.cookiesPerHour.push(randomNumber); // put each random # in the cookiesPerHour array
    this.totalCookiesPerStore += randomNumber; // add these #s up to equal the total cookies per day per store
  }
  //  this section ADDS THE #'s together and displays it's content in the CELL (AT THE END)
  tdEl = document.createElement('td'); // create a cell
  tdEl.textContent = this.totalCookiesPerStore; // add # total cookies per store to the td
  trEl.appendChild(tdEl); // link this td to the tr
  grandArray.push(this.totalCookiesPerStore); // put this # (each total cookies per store) into the grand total array
};


// render header ROW to salesTable
BuildStore.renderHeader = function() {
  var headerRow = document.createElement('tr'); // create a row

  for (var i = -1; i < hours.length; i++) { // for each index in the hours array
    var thEl = document.createElement('th'); // create a cell
    thEl.textContent = hours[i]; // assign the cell the array text content (which is the time)
    headerRow.appendChild(thEl); // add these cells to the headerRow
  }
  // make the end cell block with label
  thEl = document.createElement('th'); // make a cell
  thEl.textContent = 'Store Totals:'; // put 'Store Totals' in it
  headerRow.appendChild(thEl); // add it to the row of th's
  salesTable.prepend(headerRow); // add the whole row to the table
};


// Render the footer ROW (adds totals for EACH HOUR)
BuildStore.renderFooter = function() {
  // make the first cell with the label
  var footerRow = document.createElement('tr'); // make a row
  var tdEl = document.createElement('td'); // make a cell
  tdEl.textContent = 'Total Per Hour:'; // add text to the first cell
  footerRow.appendChild(tdEl); // all this cell to the row
  salesTable.appendChild(footerRow); // add this row to the table

  // iterate through the array, adding each total per hour, add to cell
  for (var x = 0; x < hours.length; x++) { // for each hour
    var counter = 0;
    for (var j = 0; j < BuildStore.allStores.length; j++) { // for each store
      counter += BuildStore.allStores[j].cookiesPerHour[x]; // j = each store index, x = each cookiePerHour index
    }

    tdEl = document.createElement('td'); // create a cell
    tdEl.textContent = counter; // put the counter # as text
    footerRow.appendChild(tdEl); // add cell to the row
  }


  // adds the end cell which is the GRAND TOTAL of the END ROW (footer) & END CELL (per store)
  var grandGrand = 0;
  for (var i = 0; i < grandArray.length; i++) { // for each # in the array
    grandGrand += grandArray[i]; // add everything in grandArray up to equal grandGrand
  }
  tdEl = document.createElement('td'); // make a cell
  tdEl.textContent = grandGrand; // put the total variable # in
  footerRow.appendChild(tdEl); // add it to the row
};


// RENDER ALL!
BuildStore.renderAll = function() {
  BuildStore.renderHeader();
  for (var i = 0; i < BuildStore.allStores.length; i++) {
    BuildStore.allStores[i].render();
  }
  BuildStore.renderFooter();
};


// we are defining this function that takes the event as parameter
BuildStore.addNewLocation = function (event) {
  event.preventDefault();

  var name = event.target.locationName.value;
  var minCust = event.target.minPerHour.value;
  var maxCust = event.target.maxPerHour.value;
  var avgCookiePerSale = event.target.avgCook.value;
  new BuildStore(name, minCust, maxCust, avgCookiePerSale);

  salesTable.textContent = '';
  BuildStore.renderHeader();
  BuildStore.renderAll();
  BuildStore.renderFooter();
};


new BuildStore('1st & Pike', 23, 65, 6.3);
new BuildStore('SeaTac Airport', 3, 24, 1.2);
new BuildStore('Seattle Center', 11, 38, 3.7);
new BuildStore('Capitol Hill', 20, 38, 2.2);
new BuildStore('Alki', 2, 16, 4.6);

BuildStore.renderAll();

// function fires when event occures, it's a method on the constructor itself -- a callback
cookieForm.addEventListener('submit', BuildStore.addNewLocation);

