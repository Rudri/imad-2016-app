// Counter code
var button = document.getElementById('counter');

button.onclick = function(){
    
    //Create a request object
    var request = XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(requset.readystate == XMLHttpRequest.DONE){
            //Take some action
            if(request.status == 200){
                var counter = request.responseText();
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //Not done yet
    };
    //Make the request
    request.open('GET','http://rudri.imad.hasura-app.io',true);
    request.send(null);
    
};
