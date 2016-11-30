function upDate(previewImage) {
    'use strict';
    previewImage.style.opacity = "0.5";
    var newElement = document.createElement("h4"), text = previewImage.alt;
    newElement.innerHTML = text;
    if (previewImage.parentNode.children.length === 1) {previewImage.parentNode.appendChild(newElement); } else if (previewImage.parentNode.lastChild.innerHTML === "") {previewImage.parentNode.lastChild.innerHTML = text; }
}

function unDo(previewImage) {
    'use strict';
    previewImage.style.opacity = "1";
    previewImage.parentNode.lastChild.innerHTML = "";
}

function addClass() {
    'use strict';
    var num = document.getElementsByClassName("smallimg"), i = 0;
    for (i; i < num.length; i++) {
        console.log(num[i]);
        num[i].setAttribute("onmouseover", "upDate(this)");
        console.log(num[i]);
        num[i].setAttribute("onmouseout", "unDo(this)");
    }
}