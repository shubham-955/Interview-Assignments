let currentPage = 1;

var imgContainer = document.getElementById("Image-grid");

window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
        ++currentPage;
        fetchImages(currentPage);
    }
});
fetchImages(currentPage);

async function fetchImages(page) {
    setTimeout(async () => {
        try {
            const result = await getImages(page);
            displayImages(result.data);
        } catch (error) {
            console.log(error.message);
        }
    }, 500);
}

function displayImages(data) {
    console.log(data.length);
    for (let i = 0; i < data.length; i++) {
        if (data[i].images) {
            var res = createCard(data[i]);
            imgContainer.append(res);
        }
    }
}

function createCard(d) {
    console.log(d.link);
    const div = document.createElement("div");
    div.classList.add("img-wrapper");

    // const img = document.createElement("img");
    // img.classList.add("imgur-img");

    // img.src = d.link;

    const p = document.createElement("p");
    p.innerHTML = d.title;

    div.appendChild(p);

    return div;
}
// Client secret:c9b5e01eef091992ba7b263cc984e1536bacc296
function getImages(page) {
    return fetch(
        `https://api.imgur.com/3/gallery/top/top/day/${page}?showViral=true&mature=true&album_previews=true`,
        {
            method: "GET",
            headers: { Authorization: "Client-ID 1645f7360df46f6" },
        }
    ).then(function (response) {
        return response.json();
    });
}