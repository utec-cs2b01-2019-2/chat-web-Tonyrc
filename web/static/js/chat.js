function sendMessage(){
   alert("HEEEEEY");
}

function get_all_users(){
   console.log("Traer todos los usuarios")
   $.getJSON("/users",function(data)){
   var i=0;
   $.each(data, function(){
      user_to = data[i]['id'];
      e = '<div class="alert" role="alert" >';
      e = e+'<div>'+data[i]['username']+'</div>';
      e = e+'</div>';
      i = i+1;
      $("<div/>",{html:e}).appendTo("#users");
      ));
   });
}

