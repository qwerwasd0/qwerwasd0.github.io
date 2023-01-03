
//
var exampleItem = ["res/IMG_2339.jgp", "res/example-shirt 2", "res/example-shirt 3"]

// Items
var lightMocha = ["res/LightMochaFront.png", "res/LightMochaBack.png"]

var blackSweatshirt = ["res/BlackFront.jpg", "res/BlackBack.jpg"]



// Controls behavior when left/right arrow is pressed
function rightArrow(s) {

    var path = document.getElementById(s).getElementsByClassName("img")[0].src.split("/");
    var currentImage = path[path.length - 2] + "/" + path[path.length - 1];

    if (s == "light-mocha") {
        // Only change this one
        targetItem = lightMocha;
        //

        var index = targetItem.indexOf(currentImage);
        var i = index + 1;
        if (index == targetItem.length - 1) {
            i = 0;
        }
        document.getElementById(s).getElementsByClassName("img")[0].src = targetItem[i];

    } else if (s == "black-sweatshirt") {
        // Only change this one
        targetItem = blackSweatshirt;
        //

        var index = targetItem.indexOf(currentImage);
        var i = index + 1;
        if (index == targetItem.length - 1) {
            i = 0;
        }
        document.getElementById(s).getElementsByClassName("img")[0].src = targetItem[i];

    }



}

function leftArrow(s) {
    var path = document.getElementById(s).getElementsByClassName("img")[0].src.split("/");
    var currentImage = path[path.length - 2] + "/" + path[path.length - 1];

    if (s == "light-mocha") {
        // Only change this one
        targetItem = lightMocha;
        //

        var index = targetItem.indexOf(currentImage);
        var i = index - 1;
        if (index == 0) {
            i = targetItem.length - 1;
        }
        document.getElementById(s).getElementsByClassName("img")[0].src = targetItem[i];

    } else if (s == "black-sweatshirt") {
        // Only change this one
        targetItem = blackSweatshirt;
        //

        var index = targetItem.indexOf(currentImage);
        var i = index - 1;
        if (index == 0) {
            i = targetItem.length - 1;
        }
        document.getElementById(s).getElementsByClassName("img")[0].src = targetItem[i];
    }
}


// Mailing
async function sendMail() {
    var inputName = document.getElementById("inputName").value;
    var inputEmail = document.getElementById("inputEmail").value;
    var inputComment = document.getElementById("inputComment").value;

    const data = {
        name: inputName,
        email: inputEmail,
        message: inputComment,
    };

    const url = 'https://script.google.com/macros/s/AKfycbylH5Itay7KcyytIuguiKv3YbR2IuMZuUs1piekVBQmeYmM7d55fYKP14OPZgfCj7fUBQ/exec';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(data),
    })
        .then((res) => res.json())
        .then((data) => console.log('data', data))
        .catch((err) => console.log('err', err));

}

//Scroll Header
function scrollPage(s) {
    if (s == "lookbook") {
        document.getElementById("lookbook").scrollIntoView({behavior: "smooth"});

    } else if (s == "contact") {
        document.getElementById("socials").scrollIntoView({behavior: "smooth"});

    }

}
