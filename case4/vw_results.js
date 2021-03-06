"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Samuel Harris
   Date: 02/23/20  
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
var reportHTML = "<h1>"+raceTitle+"</h1>"
 
for(var i=0; i<race.length; i++){
  
   var totalVotes = 0;
  
  votes[i].forEach(calcSum)
  
  reportHTML += "<table><caption>" + race[i] + "</caption><tr><th>Candidates</th><th>Votes</th></tr>"
  
  reportHTML += candidateRows(i, totalVotes);
  
  reportHTML += "</table>";
}
 
document.getElementsByTagName("section")[0].innerHTML = reportHTML
 
function candidateRows(raceNum, totalVotes) {
  var rowHTML = ""
  for(var j=0; j<3; j++){
     
   var candidateName = candidate[raceNum][j];
     
     var candidateParty = party[raceNum][j];
     
     var candidateVotes = votes[raceNum][j];
     
     var candidatePercent = calcPercent(candidateVotes, totalVotes);
     
     rowHTML += "<tr><td>" + candidateName + "(" + candidateParty + ")</td><td>" + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + ")</td>"
     for(var k = 0; k<candidatePercent; k++){
        rowHTML += createBar(candidateParty);
     }
     rowHTML += "</tr>";
  }
  return rowHTML;
}
 
 
function calcSum(value) {
  totalVotes += value;
}
 
function calcPercent(value, sum) {
  return (100*value/sum);
} 

function createBar(partyType){
  var barHTML = "";
  if(partyType === "D"){
   barHTML += "<td class='dem'></td>"
  }else if(partyType === "R"){
   barHTML += "<td class='rep'></td>"
  }else if(partyType === "I"){
   barHTML += "<td class='ind'></td>"
  }
  return barHTML;
}

function calcSum(value) {
   totalVotes += value;
}

function calcPercent(value, sum) {
   return (100*value/sum);
}

