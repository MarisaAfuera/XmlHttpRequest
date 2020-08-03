var ajaxRequest;  // The variable that makes Ajax possible!

function validateUserId() {
    
    ajaxFunction();    
    // Here processRequest() is the callback function.
    ajaxRequest.onreadystatechange = processRequest;    
    let target = document.getElementById("userid");
    var url = "http://localhost:3000/users?name=" + escape(target.value);
    ajaxRequest.open("GET", url, true);   
    ajaxRequest.send();
    
 }

function ajaxFunction() {
   try {
      // Opera 8.0+, Firefox, Safari
      ajaxRequest = new XMLHttpRequest();
   } catch (e) {
   
      // Internet Explorer Browsers
      try {
         ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
      
         try {
            ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
         } catch (e) {
      
            // Something went wrong
            alert("Your browser broke!");
            return false;
         }
      }
   }
}

function processRequest() {    
    if (ajaxRequest.readyState == 4) {          
       if (ajaxRequest.status == 200) {
         var objeto = JSON.parse(ajaxRequest.responseText);          
         if (objeto[0]==undefined){
           message = false;
         } else {
            message=true;
         }
          setMessageUsingDOM(message);
       }
    }
    return; 
}

function setMessageUsingDOM(message) {
    var messageText;
    var userMessageElement = document.getElementById("userIdMessage");    
    if (message == false) {
       userMessageElement.style.color = "red";
       messageText = "Invalid User Id";
    } else {
       userMessageElement.style.color = "blue";
       messageText = "Valid User Id";
    }
    
    var messageBody = document.createTextNode(messageText);
        
    // if the messageBody element has been created simple 
    // replace it otherwise append the new element
    
    if (userMessageElement.childNodes[0]) {
       userMessageElement.replaceChild(messageBody, userMessageElement.childNodes[0]);       
    } else {        
       userMessageElement.appendChild(messageBody);       
    }
 }
