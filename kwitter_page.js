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
  room_name=localStorage.getItem("Room Name");

  function send(){
    msg=  document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0

    });
    document.getElementById("msg").value="";  
      
  }
  function logout(){
      localStorage.removeItem("User Name");
      localStorage.removeItem("Room Name");
      window.location="index.html";
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4 class='message_h4'>"+name+"<img class='user_tick'src='tick.png'></h4>";
msg_with_tag="<h4 class'message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id +"value="+like+"onclick='updateLikes(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span> </button> <hr>";
row=name_with_tag+msg_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
 } });  }); }
getData();

function updateLikes(message_id){
  button_id=message_id;
  likes=document.getElementById(button_id).value;
  update_likes=Number(likes)+1;
  firebase.database().ref(room_name).child(message_id).update({ like:update_likes

  });
}