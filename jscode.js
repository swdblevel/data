

    
    function a() {
    window.open("trial4.html");
    var username = document.getElementById("user_name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    
      
    var a = new Vue({el:"demo" , data:{text:[
    {message: "Hi" + username + "nice to meet you"},
    {message: "We will send you a verification message shortly to your gmail account:" +email},
    {message: "Your password is:" +password }
    ]}});
    
    }
    
    
    