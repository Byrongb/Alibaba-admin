let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu');
btnMenu.addEventListener('click', function(){
  menu.classlist.toggle('mostrar');
});