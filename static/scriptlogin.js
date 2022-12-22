function myfunc(){
    var un= document.forms["myForm"]["uname"].value;
    var pw= document.forms["myForm"]["pass"].value;
    if(un==="gismagilova402@gmail.com"&&pw==="123456"){
    window.location.replace("/");
    }
    else{
      alert("Неверный логин или пароль");
    }
  }