/* eslint-disable prefer-template */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */

function updateDOM(basicSiteUL, text, boolean) {
  var worked = boolean ? 'TRUE' : 'FALSE ! ! !';
  basicSiteUL.appendChild(
    document.createElement('li'),
  ).appendChild(
    document.createTextNode(worked + ' -=- ' + text),
  );
}

function isDefined(api, name) {
  if (typeof api === 'undefined') {
    throw new Error('OPPS! ' + name + ' is not defined');
  }
  return true;
}

function isfunction(api, name) {
  if (typeof api === 'function') {
    return true;
  }
  throw new Error('OPPS! ' + name + ' is not a function');
}
