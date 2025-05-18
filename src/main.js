const { invoke } = window.__TAURI__.core;

function toggleSubMenu(button){
  button.nextElementSibling.classList.toggle('show');
  button.classList.toggle('rotate');
}
