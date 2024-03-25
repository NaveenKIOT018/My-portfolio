

let icon=document.getElementById("icon");
let iconText=document.getElementById("iconText");


  icon.onclick=function(){
      document.body.classList.toggle("dark-theme");

  if(document.body.classList.contains("dark-theme")){
      iconText.innerHTML="🔆";
  }

  else{
      iconText.innerHTML="🌙";
  }
}