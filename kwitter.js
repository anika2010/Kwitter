function login(){
    user_name=document.getElementById("userName").value;
    localStorage.setItem("User Name",user_name);
    window.location="kwitter_room.html";
}