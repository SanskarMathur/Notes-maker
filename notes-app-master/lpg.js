document.querySelector("button").onclick = function () {
  document.querySelector("textarea").select();
  document.execCommand('copy');
};

displayNotes();

let addnotebtn = document.getElementById("addnotebtn");
addnotebtn.addEventListener("click", function (e) {
  let text = document.getElementById("textarea");
  let prev = localStorage.getItem("prevnotes");
  if (prev == null) {
    prevarr = [];
  } else {
    prevarr = JSON.parse(prev);
  }
  prevarr.push(text.value);
  localStorage.setItem("prevnotes", JSON.stringify(prevarr));
  text.value = "";
  displayNotes();
});

function displayNotes() {
  let prev = localStorage.getItem("prevnotes");
  if (prev == null) {
    prevarr = [];
  } else {
    prevarr = JSON.parse(prev);
  }
  let html = "";
  prevarr.forEach(function (element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <p id="demo"></p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="button">Delete Note</button>
                    </div>
                </div>`;
  });
  let displayElm = document.getElementById("prevnotes");
  if (prevarr.length != 0) {
    displayElm.innerHTML = html;
  } else {
    displayElm.innerHTML = `No previously added notes. Write something in above textarea and click on the Add notes button.`;
  }
}


function deleteNote(index) {

  let prev = localStorage.getItem("prevnotes");
  if (prev == null) {
    prevarr = [];
  } else {
    prevarr = JSON.parse(prev);
  }

  prevarr.splice(index, 1);
  localStorage.setItem("prevnotes", JSON.stringify(prevarr));
  displayNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

  let inputVal = search.value.toLowerCase();

  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }

  })
})




var toggled = false;

var hTag = document.getElementsByTagName("h1")[0];
var bodyTag = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");

document.getElementById("toggle").onclick = function () {

  if (!toggled) {

    hTag.classList.add("color-white");
    bodyTag.classList.add("bck-color-black");
    circle.style.marginLeft = "100px";

    toggled = true;

  } else {

    hTag.classList.remove("color-white");
    bodyTag.classList.remove("bck-color-black");
    circle.style.marginLeft = "1px";

    toggled = false;

  }

}