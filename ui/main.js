// Counter code
var button = document.getElementById('counter');
var counter=0;

button.onclick = function(){
    
    //Make a request to the counter endpoint
    var request = XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(requset.readystate == XMLHttpRequest.DONE){
            //Take some action
            if(request.status == 200){
                var counter = request.responseText();
                var span = document.getElementById('count');
                span.innerHTML = counter-toString();
            }
        }
        //Not done yet
    };
    //Render the variable in a correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML=counter.toString();
};