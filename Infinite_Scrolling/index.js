window.addEventListener("load", function () {
    loadImages();
});

const container = document.querySelector(".container");

window.addEventListener("scroll", function () {
    if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight
    ) {
        throttleFunction(loadImages, 2000);
    }
});

function loadImages(numImages = 25) {
    let i = 0;
    while (i < numImages) {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                var div_main = document.createElement("div");
                div_main.setAttribute("class", "div_main");
                const img = document.createElement("img");
                img.src = `${data.message}`;
                div_main.append(img);
                container.appendChild(div_main);
            });
        i++;
    }
}

var timerId;
var throttleFunction = function (func, delay) {
    if (timerId) {
        console.log("present");
        return;
    }
    timerId = setTimeout(function () {
        func();
        timerId = undefined;
    }, delay);
};