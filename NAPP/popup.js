var textContainer, textareaSize, input;
var autoSize = function () {
  // also can use textContent or innerText
  textareaSize.innerHTML = input.value + '\n';
};

document.addEventListener('DOMContentLoaded', function () {
  textContainer = document.querySelector('.textarea-container');
  textareaSize = textContainer.querySelector('.textarea-size');
  input = textContainer.querySelector('textarea');

  autoSize();
  input.addEventListener('input', autoSize);
});

// Pure JS:
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("addCheck").addEventListener("click", handler);
});

// The handler also must go in a .js file
function handler() {
  var checkBox = document.getElementById("auxCheck");
  //console.log(checkBox.checked);
  // Get the output text
  var add_button = document.getElementById("Adicionar");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    document.getElementById("Adicionar-button").style.visibility = "visible";
    document.getElementById("box3").style.visibility = "visible";
    document.getElementById("Responder").style.visibility = "hidden";
    document.getElementById("Progresso").style.visibility = "hidden";
  } else {
    document.getElementById("box3").style.visibility = "hidden";
    document.getElementById("Adicionar-button").style.visibility = "hidden";
    document.getElementById("Responder").style.visibility = "visible";
    document.getElementById("Progresso").style.visibility = "visible";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("Adicionar-button").addEventListener("click", AdicionarFunction);
});

// The handler also must go in a .js file
function AdicionarFunction() {
  add_p = document.getElementById("adicionar-pergunta").value
  add_r = document.getElementById("adicionar-resposta").value
  if (add_p == "" || add_r == "") {
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      console.log(localStorage.getItem(localStorage.key(i)));
      console.log(localStorage.key(i));
    }
  } else {
    document.getElementById("adicionar-pergunta").value = ""
    document.getElementById("adicionar-resposta").value = ""

    var meta = {'resposta':add_r,'acertos':0,'total':0};
    localStorage.setItem(add_p, JSON.stringify(meta));
  }
}

// Pure JS:
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("Responder").addEventListener("click", ResponderFunction);
});

// The handler also must go in a .js file
function ResponderFunction() {
  var rR = Math.floor(Math.random() * localStorage.length);
  console.log(localStorage.length);
  console.log(rR);
  console.log(document.getElementById("Pergunta").value);
  console.log(document.getElementById("Pergunta").textContent);
  console.log(localStorage.getItem(localStorage.key(rR)));
  document.getElementById("Pergunta").textContent= localStorage.key(rR);
  //document.getElementById("Resposta").textContent = localStorage.getItem(localStorage.key(rR));
  //document.getElementById("resposta2").textContent = localStorage.getItem(localStorage.key(rR));
  var meta1 = JSON.parse(localStorage.getItem(localStorage.key(rR)));
  document.getElementById("resposta2").textContent = meta1['resposta'];
}
/*
var dict = [];
var add_p = 'oi';
var add_r = 'ola';
var meta = {'resposta':'ola','acertos':0,'total':0};
localStorage.setItem("meta", JSON.stringify(meta));
var meta1 = JSON.parse(localStorage.getItem("meta"));

localStorage.setItem(add_p, dict);
document.getElementById("resposta").textContent = meta1['total'];
//document.getElementById("resposta").textContent = localStorage.getItem(localStorage.key(0));*/