const firebaseConfig = {
      apiKey: "AIzaSyAE_sFLZOauGlovzxE__QIM9MuycIOG4Uo",
      authDomain: "kwitter-8e3f6.firebaseapp.com",
      databaseURL: "https://kwitter-8e3f6-default-rtdb.firebaseio.com",
      projectId: "kwitter-8e3f6",
      storageBucket: "kwitter-8e3f6.appspot.com",
      messagingSenderId: "127101842565",
      appId: "1:127101842565:web:013c29afc33728056ba5ec"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("User Name");
    document.getElementById("Name").innerHTML="Welcome " + user_name;
    function add_room(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("Room Name", room_name);
      window.location="kwitter_page.html";
    }
/* function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+ Room_names+"onlick='redirection(this.id)'>"+  Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
     
      });});}
getData();
function redirection(name){
      localStorage.setItem("Room Name", name);   
      window.location="kwitter_page.html";
} */
function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("User Name");
      localStorage.removeItem("Room Name");
      window.location="index.html";
}
