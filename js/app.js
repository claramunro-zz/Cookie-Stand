'use strict';

var openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var firstAndPike =  {
  minCust: 23,
  maxCust: 65,
  avgCookiePerCust: 6.3,

  randomCustPerHour: function() {
    return Math.round( Math.random() * (this.maxCust - this.minCust) + this.minCust );
  },

  averagePerHour: function() {
    return Math.round (this.randomCustPerHour() * this.avgCookiePerCust );
  },

  generateList: function() {
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
    totalEl.textContent = `Total for the day: ${runningTotal}`;
    ulElement.appendChild(totalEl);
  }

};

var SeaTac =  {
  minCust: 3,
  maxCust: 24,
  avgCookiePerCust: 1.2,

  randomCustPerHour: function() {
    return Math.round( Math.random() * (this.maxCust - this.minCust) + this.minCust );
  },

  averagePerHour: function() {
    return Math.round (this.randomCustPerHour() * this.avgCookiePerCust );
  },

  generateList: function() {
    var ulElement = document.getElementById('Sea-Tac');
    var runningTotal = 0;

    for(var i = 0; i < openHours.length; i++){
      var liElement = document.createElement('li');
      var randomNum = this.averagePerHour();
      runningTotal += randomNum;
      liElement.textContent = `${openHours[i]}: ${randomNum} cookies!`;

      ulElement.appendChild(liElement);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total for the day: ${runningTotal}`;
    ulElement.appendChild(totalEl);
  }

};

firstAndPike.generateList();
SeaTac.generateList();
