const char_info = document.getElementById("char_info");
const darth_vader = document.getElementById("darth_vader");

function getDarthVader() {
  fetch("https://swapi.co/api/people/4")
    .then(response => response.json())
    .then(parsedResponse => {
      char_info.innerHTML = JSON.stringify(parsedResponse);
    });
}

function getLukeSkywalker() {
  fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(parsedResponse => {
      char_info.innerHTML = JSON.stringify(parsedResponse);
    });
}

darth_vader.addEventListener("click", function() {
  getDarthVader();
});

getLukeSkywalker();
