window.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('num1').addEventListener("change", sumEvent);
  document.getElementById('num2').addEventListener("change", sumEvent);
  document.getElementsByName('skills')[0].addEventListener("change", skillConfirm);
  for (const iterator of document.getElementsByName('favoriteColor')) {
    iterator.addEventListener("mousedown", favoriteColor);
  }
  for (const iterator of document.getElementsByClassName('empName')) {
    iterator.addEventListener("mouseenter", empHide);
  }
  document.getElementById('helloWorld').addEventListener("click", waitColor);
});
window.oldFavoriteColor = 'old';

/** 1. USA
Define function getUSA()
Find the html element that contains "USA".
Print that element's contents. */
function getUSA(){
  //get a colletion of every single html element on page to search through
  const domCollection = document.querySelectorAll("*");

  for (const element in domCollection) {
    if (domCollection[element].innerText === 'USA') {
      console.log(`Problem 1: Contents of element that contains 'USA': ${domCollection[element].innerHTML}`);
      console.log('\n');
      break;
    }
  }
}

/** 2. Sales
Define function getPeopleInSales()
Print the names of all the people in the sales department. */
function getPeopleInSales() {
  const domCollection = document.querySelectorAll("*");
  let salesEmp = '';

  for (const element in domCollection) {
    if (domCollection[element].innerText === 'Sales') {
      salesEmp = salesEmp + domCollection[element-1].innerText + ', ';
    }
  }
  console.log(`Problem 2: Names of Sales Department employees: ${salesEmp}`);
  console.log('\n');
}

/** 3. Click Here
Define function getAnchorChildren()
Find all anchor elements with a <span> child.
Print the contents of <span> */
function getAnchorChildren() {
  const domCollection = document.getElementsByTagName("a");
  console.log (`Problem 3: The contents of the <span> children of <a> elements are:`);
  for (let elementA = 0; elementA < domCollection.length; elementA++) {
    let childCollection = domCollection[elementA].getElementsByTagName("span");
    if (childCollection.length > 0) {
      for (let elementSpan = 0; elementSpan < childCollection.length; elementSpan++) {
        console.log(childCollection[elementSpan].innerText);
      }
    }
  }
  console.log('\n');
}

/** 4. Hobbies
Define function getHobbies()
Find all checked options in the 'hobbies' select element.
Print the value and the contents.
*/
function getHobbies() {
  //Get element named 'hobbies'
  const domCollection = document.getElementsByName("hobbies");
  console.log('Problem 4: The Values and Contents of the selected hobbies are:');
  // Drill down to separate all <option> tagged elements
  for (element of domCollection) {
    let childCollection = element.getElementsByTagName('option');
    //Print value and contents
    for (iterator of childCollection) {
      if(iterator.hasAttribute('selected')) {
        console.log(`Value: ${iterator.value} / Contents: ${iterator.innerText} / Selected: ${iterator.selected}`);
      }
    }
  }
  console.log('\n');
}

/** 5. Custom Attribute
Define function getCustomAttribute()
Find all elements with "data-customAttr" attribute
Print the value of the attribute.
Print the element that has the attribute.
*/
function getCustomAttribute() {
  //get a colletion of every single html element on page to search through
  const domCollection = document.querySelectorAll("*");//.hasAttribute('data-customAttr');
  console.log('Problem 5:');

  for (element of domCollection) {
    if (element.hasAttribute('data-customAttr')) {
      console.log('Attribute Value: "' + element.getAttribute('data-customAttr') + '" / Element appears below:');
      console.log(element);
    }
  }
  console.log('\n');
}

/** 6. Sum Event
NOTE: Write unobtrusive Javascript
Regarding these elements:
	<input id="num1" class="nums" type="text"/>
	<input id="num2" class="nums" type="text"/>
	<h3>Sum: <span id="sum"></span></h3>

Define onchange event handler.
Add <input> element values.
Put the sum in the <span> element.
If values cannot be added, put "Cannot add" in the <span> element
*/
function sumEvent() {
  let num1 = Number(document.getElementById('num1').value);
  let num2 = Number(document.getElementById('num2').value);
  let sum = document.getElementById('sum');
  // Check if result is a number or not
  if(Number.isNaN(num1 + num2)) {
    sum.innerText = 'Cannot add';
  } else {
    sum.innerText = num1 + num2;
  }
}

/** 7. Skills Event
NOTE: Write unobtrusive Javascript
When user selects a skill, create an alert with a message similar to:
	"Are you sure CSS is one of your skills?"
NOTE: no alert should appear when user deselects a skill.*/
function skillConfirm() {
  //Get all elements with name of 'skills'.
  const skillSelected = document.getElementsByName('skills');
  //Drill down to get the actual option selected.
  for (childCollection of skillSelected) {
    for (const element of childCollection) {
      if(element.selected) {
        alert(`Are you sure ${element.innerHTML} is one of your skills?`);
      }
    }
  }
  //console.log('\n');
}

/** 8. Favorite Color Event
NOTE: Write unobtrusive Javascript
NOTE: This is regarding the favoriteColor radio buttons.
When a user selects a color, create an alert with a message similar to:
	"So you like green more than blue now?"
In this example, green is the new value and blue is the old value.
Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor*/
function favoriteColor() {
  const domCollection = document.getElementsByName('favoriteColor');
  for (element of domCollection) {
    if (element.value === this.value && oldFavoriteColor === 'old') {
        confirm(`Your favorite color is ${this.value}?`);
    } else if (element.value === this.value && oldFavoriteColor !== 'old') {
        confirm(`Your favorite color is ${this.value} instead of ${oldFavoriteColor} now?`);
    } else {
    }
  }
  document.body.style.backgroundColor = this.value;
  oldFavoriteColor = this.value;
  console.log('End of Function \n');
}

/** 9. Show/Hide Event
NOTE: Write unobtrusive Javascript
When user hovers over an employees name:
	Hide the name if shown.
  Show the name if hidden.*/
function empHide() {
  //console.log('event listener working');
  const domCollection = document.getElementsByClassName('empName');
  //console.log(this.style.visibility.value);
  for (const element of domCollection) {
    if (element === this) {
      if (this.style.color === 'white') {
        this.style.color = "black"
      } else if (this.style.color === 'black') {
        this.style.color = "white"
      } else {
        this.style.color = 'white';
      }
    }
  }
}

/** 10. Current Time
Regarding this element:
	<h5 id="currentTime"></h5>
Show the current time in this element in this format: 9:05:23 AM
The time should be accurate to the second without having to reload the page.*/
function currentTimeFormat() {
  const formatTime = document.getElementById('currentTime');
  function updateDisplay() {
    let currentTime=new Date();
    let currentHours=currentTime.getHours();
    let currentMinutes=currentTime.getMinutes();
    let currentSeconds=currentTime.getSeconds();
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
    let timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;
    let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    formatTime.innerHTML = currentTimeString;
    let interval = setTimeout(updateDisplay, 1000);
  }
  return updateDisplay();
}

/** 11. Delay
Regarding this element:
	<p id="helloWorld">Hello, World!</p>
Three seconds after a user clicks on this element, change the text to a random color.*/
function waitColor() {
  console.log('Clicked');
  setTimeout(randomColor, 3000);
}
function randomColor() {
  console.log('Changed');
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  document.getElementById('helloWorld').style.color = `rgb(${red}, ${green}, ${blue})`;
  console.log(`rgb(${red}, ${green}, ${blue})`);
}

/** 12. Walk the DOM
Define function walkTheDOM(node, func)
This function should traverse every node in the DOM. Use recursion.
On each node, call func(node).*/
function walkTheDOM(node, leaf) {
  if (leaf === 0) {
    console.log('Problem 12: Walk the DOM initializing:');
  }
  if (node.length > leaf) {
    //console.log(node);
    console.log(node[leaf]);
    leaf = leaf + 1;
    //console.log(leaf);
    walkTheDOM(document.querySelectorAll("*"), leaf);
  }
}


getUSA();
getPeopleInSales();
getAnchorChildren();
getHobbies();
getCustomAttribute();
currentTimeFormat();
walkTheDOM(document.querySelectorAll("*"),0);
console.log('\n');
console.log('Homework finished.');