function addingEventListener() {
  const input = document.getElementById('input');
  input.addEventListener('click', addingEventListener() {
    alert('I was clicked!');
  });
}
