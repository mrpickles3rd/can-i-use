/* eslint-disable no-console */
/* eslint-disable vars-on-top */
/* eslint-disable comma-dangle */
/* eslint-disable no-var */
var theBasics = [
  {
    name: 'console',
    key: 'log',
    message: 'Trying `console.log()` - for `Hello World <):oD` - ',
    worked: false
  },
  {
    name: 'document',
    key: 'getElementById',
    message: 'Trying `document.getElementById()` - for `basic-site-functionality` - ',
    worked: false
  },
  {
    name: 'document',
    key: 'createElement',
    message: 'Trying `document.createElement()` - for `li` - ',
    worked: false
  },
  {
    name: 'document',
    key: 'createTextNode',
    message: 'Trying `document.createTextNode()` - for `Appended Text?` - ',
    worked: false
  },
  {
    name: '<ELEMENT>',
    key: 'createTextNode',
    message: 'Trying `<ELEMENT>.appendChild()` - ',
    worked: false
  },
  {
    name: 'for',
    key: 'LOOP',
    message: 'Trying `for (;;) {}` - ',
    worked: false
  }
];

try {
  var idx;

  isDefined(console, 'console');
  isDefined(console.log, 'console.log');
  isfunction(console.log, 'console.log()');
  console.log('Hello World <):oD');
  theBasics[0].worked = true;

  isDefined(document, 'document');
  isDefined(document.getElementById, 'document.getElementById');
  isfunction(document.getElementById, 'document.getElementById()');
  var basicSiteUL = document.getElementById('basic-site-functionality'); // Old, but should have the best compatibility for testing.
  isDefined(basicSiteUL, 'ELEMENT `basicSiteUL`');
  theBasics[1].worked = true;

  isDefined(document.createElement, 'document.createElement');
  isfunction(document.createElement, 'document.createElement()');
  var listItem = document.createElement('li');
  isDefined(listItem, 'ELEMENT `listItem`');
  theBasics[2].worked = true;

  isDefined(document.createTextNode, 'document.createTextNode');
  isfunction(document.createTextNode, 'document.createTextNode()');
  var listText = document.createTextNode('Appended Text?');
  isDefined(listText, 'ELEMENT `listText`');
  theBasics[3].worked = true;

  isDefined(basicSiteUL.appendChild, 'ELEMENT `basicSiteUL`.appendChild');
  isfunction(basicSiteUL.appendChild, 'ELEMENT `basicSiteUL`.appendChild()');
  basicSiteUL.appendChild(listItem).appendChild(listText);
  theBasics[4].worked = true;

  for (idx = 0; idx < 2; idx += 1) {
    console.log('Trying `for (var i = 0; i < 2; i += 1) {}` - ', idx);
  }
  theBasics[5].worked = true;

  for (idx = 0; idx < theBasics.length; idx += 1) {
    updateDOM(basicSiteUL, theBasics[idx].message, theBasics[idx].worked);
    console.log(theBasics[idx].worked, theBasics[idx].message);
  }
} catch (error) {
  console.log('Basic tests failed, this may not help you, sorry and good luck :)', error.message, error);
  console.log(theBasics);
  throw error;
}
