'use strict';

var months = ['May','June','July','August','September'];

var twoThousandEighteen = {
  miles: [54, 12, 9000, 8, 52],

  render: function() {
    var ulElement = document.getElementById('list2018');

    // Goal: create list items and add them to the DOM
    for(var i = 0; i < this.miles.length; i++){

      // 1. Access / create the element
      var liElement = document.createElement('li');

      // 2. Give the element content
      liElement.textContent = `In ${months[i]}, I hiked ${this.miles[i]} miles.`;

      // 3. Append the element to its parents (usually to its parent)
      ulElement.appendChild(liElement);
    }

  }
};

twoThousandEighteen.render();
