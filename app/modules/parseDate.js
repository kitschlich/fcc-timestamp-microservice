'use strict';

module.exports = function (string) {
  
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  
  var unix, natural = null;

  var naturalDate = new Date(string);
  var unixDate = new Date(string*1000);
  
  if (Date.parse(naturalDate)) setDate(naturalDate); 
  else if (Date.parse(unixDate)) setDate(unixDate);
  
  var data = {
    "unix": unix,
    "natural": natural
  }
  return data;
  
  function setDate(date) {
    unix = Date.parse(date) / 1000; 
    natural = monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  }
};