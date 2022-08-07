/*
Amin Ahmadi
Student ID: 040993411
Lab7 - Working with the Document Object Model
*/
//Question 2
var titleAlign = document.getElementById("mainTitle");
titleAlign.setAttribute("style", "text-align: center");
//Question 4
var image1 = document.getElementById("image1");
image1.setAttribute("align", "right");

/*
I used the tutorial in 
https://www.w3schools.com/jsref/met_node_appendchild.asp
to solve these parts of the assignment.
*/
//Question 5
var secondEl = document.createElement("li");
var scndElTxt = document.createTextNode("1.1 August 1996");
secondEl.appendChild(scndElTxt);
document.getElementById("list").insertBefore(secondEl, list.childNodes[2]);

//Question 6
var lastEl = document.createElement("li");
var lastElTxt = document.createTextNode("1.8.2 June 22, 2009");
lastEl.appendChild(lastElTxt);
document.getElementById("list").appendChild(lastEl);  
/*
I used the tutorial in  
https://www.w3schools.com/jsref/met_element_getelementsbytagname.asp
to solve this part of the assignment.
*/
//Question 7
var chngEl = document.getElementById("list").getElementsByTagName("li")[5];
chngEl.innerHTML = "1.6 November 2005";
 /*
I used the tutorial in  
https://www.w3schools.com/jsref/prop_nodelist_length.asp
to solve this part of the assignment.
*/
//Question 8
var countLiEl = document.getElementById("list").getElementsByTagName("li").length;
document.write("The number of 'li' tags in the 'list' are: " + countLiEl);