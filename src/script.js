// when user clicks button toggle between hiding and showing the dropdown thangs

const menuFunction = function() {
  document.getElementById("myDropdown").classList.toggle("show");
  console.log(menuFunction, "menuFunction");
}

// close dropdown when clicked outside of button
window.onclick = function(event){
  if(!event.target.matches('.menu-btn') ){
    let dropDowns =  document.getElementsByClassName("dropdown-content");
    for(let i =0; i<dropDowns.length; i++){
      let openDropdown = dropDowns[i];
      if(openDropdown.classList.contains('show') ){
        openDropdown.classList.remove('show');
      }
    }
  }
}