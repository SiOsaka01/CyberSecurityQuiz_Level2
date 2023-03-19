
document.getElementById("form1").onsubmit=function() {
       variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
	   sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
	   con = parseInt(document.querySelector('input[name = "con"]:checked').value);
	   ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);
     ifstate = parseInt(document.querySelector('input[name = "q5"]:checked').value);
     ifstate = parseInt(document.querySelector('input[name = "q6"]:checked').value);
     ifstate = parseInt(document.querySelector('input[name = "q7"]:checked').value);
     ifstate = parseInt(document.querySelector('input[name = "q8"]:checked').value);
     ifstate = parseInt(document.querySelector('input[name = "q9"]:checked').value);
     ifstate = parseInt(document.querySelector('input[name = "q10"]:checked').value);
     

	   result = variable + sub + con + ifstate;

	document.getElementById("grade").innerHTML = result;



return false; // required to not refresh the page; just leave this here
} //this ends the submit function



grading = [
    {score:0,feedback:"I don't think you studied", image: "none.jpg"},
    {score:25,feedback:"You need to spend more time. Try again", image: "poor.jpg"},
    {score:50,feedback:"I think you could do better. Try again.", image: "avg.jpg"},
    {score:75,feedback:"So close. Try again.", image: "above.jpg"},
    {score:100,feedback:"Excellent! You're a JavaScript pro!", image: "excellent.jpg"}
    ];

for(i=0; i<grading.length; i++) {
 if(result == grading[i].score) {
 result2 = grading[i].feedback + "<br /><img src='" + grading[i].image + "' width='300'  />";
   }
   }


