/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
/* eslint-disable prefer-template */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */

var consoleLog_Text = 'Trying `console.log()` - for `Hello World <):oD`';
var consoleLogWorked = false;
var getElmByID_Text = 'Trying `document.getElementById()` - for `basic-site-functionality`';
var getElmByIdWorked = false;
var createElm_Text = 'Trying `document.createElement()` - for `li`';
var createElmWorked = false;
var createTxtNode_Text = 'Trying `document.createTextNode()` - for `Appended Text?`';
var createTxtNoWorked = false;
var appendChild_Text = 'Trying `<ELEMENT>.appendChild()`';
var appendChiWorked = false;

// Setup and test
function isDefined(api, name) {
  if (typeof api === 'undefined') {
    throw Error(name + ' is not defined');
  }
  return true;
}
function isfunction(api, name) {
  if (typeof api === 'function') {
    return true;
  }
  throw Error(name + ' is not a function');
}
// Display info
function updateDOM(basicSiteListElement, text, boolean) {
  var worked = boolean ? 'TRUE' : 'FALSE ! ! !';
  basicSiteListElement.appendChild(
    document.createElement('li'),
  ).appendChild(
    document.createTextNode(worked + ' -=- ' + text),
  );
}
// Tada! or Opps :(
function logBasicSiteFunctionality() {
  console.log(consoleLogWorked, consoleLog_Text);
  console.log(getElmByIdWorked, getElmByID_Text);
  console.log(createElmWorked, createElm_Text);
  console.log(createTxtNoWorked, createTxtNode_Text);
  console.log(appendChiWorked, appendChild_Text);
}

// Lets do it! Well the basics anyway :P
try {
  // console.log()
  isDefined(console, 'console');
  isDefined(console.log, 'console.log');
  isfunction(console.log, 'console.log()');
  console.log('Hello World <):oD');
  consoleLogWorked = true;

  // document
  isDefined(document, 'document');

  // document.getElementById()
  isDefined(document.getElementById, 'document.getElementById');
  isfunction(document.getElementById, 'document.getElementById()');
  var basicSiteListElement = document.getElementById('basic-site-functionality'); // Old, but should have the best compatibility for testing.
  isDefined(basicSiteListElement, 'ELEMENT `basicSiteListElement`');
  getElmByIdWorked = true;

  // document.createElement()
  isDefined(document.createElement, 'document.createElement');
  isfunction(document.createElement, 'document.createElement()');
  var listItem = document.createElement('li');
  isDefined(listItem, 'ELEMENT `listItem`');
  createElmWorked = true;

  // document.createTextNode()
  isDefined(document.createTextNode, 'document.createTextNode');
  isfunction(document.createTextNode, 'document.createTextNode()');
  var listText = document.createTextNode('Appended Text?');
  isDefined(listText, 'ELEMENT `listText`');
  createTxtNoWorked = true;

  // ELEMENT.appendChild()
  isDefined(basicSiteListElement.appendChild, 'ELEMENT `basicSiteListElement`.appendChild');
  isfunction(basicSiteListElement.appendChild, 'ELEMENT `basicSiteListElement`.appendChild()');
  basicSiteListElement.appendChild(listItem).appendChild(listText);
  appendChiWorked = true;

  updateDOM(basicSiteListElement, consoleLog_Text, consoleLogWorked);
  updateDOM(basicSiteListElement, getElmByID_Text, getElmByIdWorked);
  updateDOM(basicSiteListElement, createElm_Text, createElmWorked);
  updateDOM(basicSiteListElement, createTxtNode_Text, createTxtNoWorked);
  updateDOM(basicSiteListElement, appendChild_Text, appendChiWorked);
} catch (error) {
  console.log('Basic tests failed, this may not help you, sorry and good luck :)', error.message, error);
  logBasicSiteFunctionality();
  throw error;
}

logBasicSiteFunctionality();
