/* eslint-disable comma-dangle */
/* eslint-disable prefer-template */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-unused-expressions */

// eslint-disable-next-line no-unused-vars
var theBasics = [
  {
    name: 'console',
    key: 'log',
    massage: 'Trying `console.log()` - for `Hello World <):oD` - ',
    worked: false
  },
  {
    name: 'document',
    key: 'getElementById',
    massage: 'Trying `document.getElementById()` - for `basic-site-functionality` - ',
    worked: false
  },
  {
    name: 'document',
    key: 'createElement',
    massage: 'Trying `document.createElement()` - for `li` - ',
    worked: false
  },
  {
    name: 'document',
    key: 'createTextNode',
    massage: 'Trying `document.createTextNode()` - for `Appended Text?` - ',
    worked: false
  },
  {
    name: '<ELEMENT>',
    key: 'createTextNode',
    massage: 'Trying `<ELEMENT>.appendChild()` - ',
    worked: false
  },
];

var consoleLog = 'Trying `console.log()` - for `Hello World <):oD`';
var consoleLogWorked = false;
var getElmByID = 'Trying `document.getElementById()` - for `basic-site-functionality`';
var getElmByIdWorked = false;
var createElm = 'Trying `document.createElement()` - for `li`';
var createElmWorked = false;
var createTxtNo = 'Trying `document.createTextNode()` - for `Appended Text?`';
var createTxtNoWorked = false;
var appendChi = 'Trying `<ELEMENT>.appendChild()`';
var appendChiWorked = false;

function logBasicSiteFunctionality() {
  console.log(consoleLogWorked, consoleLog);
  console.log(getElmByIdWorked, getElmByID);
  console.log(createElmWorked, createElm);
  console.log(createTxtNoWorked, createTxtNo);
  console.log(appendChiWorked, appendChi);
}

function updateDOM(basicSiteUL, text, boolean) {
  var worked = boolean ? 'TRUE' : 'FALSE ! ! !';
  basicSiteUL.appendChild(
    document.createElement('li'),
  ).appendChild(
    document.createTextNode(worked + ' -=- ' + text),
  );
}

function isDeffined(api, name) {
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

try {
  isDeffined(console, 'console');
  isDeffined(console.log, 'console.log');
  isfunction(console.log, 'console.log()');
  console.log('Hello World <):oD');
  consoleLogWorked = true;

  isDeffined(document, 'document');

  isDeffined(document.getElementById, 'document.getElementById');
  isfunction(document.getElementById, 'document.getElementById()');
  var basicSiteUL = document.getElementById('basic-site-functionality'); // Old, but should have the best compatibility for testing.
  isDeffined(basicSiteUL, 'ELEMENT `basicSiteUL`');
  getElmByIdWorked = true;

  isDeffined(document.createElement, 'document.createElement');
  isfunction(document.createElement, 'document.createElement()');
  var listItem = document.createElement('li');
  isDeffined(listItem, 'ELEMENT `listItem`');
  createElmWorked = true;

  isDeffined(document.createTextNode, 'document.createTextNode');
  isfunction(document.createTextNode, 'document.createTextNode()');
  var listText = document.createTextNode('Appended Text?');
  isDeffined(listText, 'ELEMENT `listText`');
  createTxtNoWorked = true;

  isDeffined(basicSiteUL.appendChild, 'ELEMENT `basicSiteUL`.appendChild');
  isfunction(basicSiteUL.appendChild, 'ELEMENT `basicSiteUL`.appendChild()');
  basicSiteUL.appendChild(listItem).appendChild(listText);
  appendChiWorked = true;

  updateDOM(basicSiteUL, consoleLog, consoleLogWorked);
  updateDOM(basicSiteUL, getElmByID, getElmByIdWorked);
  updateDOM(basicSiteUL, createElm, createElmWorked);
  updateDOM(basicSiteUL, createTxtNo, createTxtNoWorked);
  updateDOM(basicSiteUL, appendChi, appendChiWorked);
} catch (error) {
  console.log('Basic tests failed, this may not help you, sorry and good luck :)', error.message, error);
  logBasicSiteFunctionality();
  throw error;
}
logBasicSiteFunctionality();
