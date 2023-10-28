const searchForm = document.getElementById("searchForm");
const searchBox = document.getElementById("searchBox");
const searchResult = document.getElementById("searchResult");
const showMoreBtn = document.getElementById("showMoreBtn");


let keyword = ""
let page = 1;
const accessKey = 'l2IYDlGBO8w0kFJcemaDFXwCMpHn7pIuouvzZHR7Sro'

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const responce = await fetch(url);
    const data = await responce.json();

    if(page===1){
        searchResult.innerHTML="";
    }
    // console.log(data);

    const results = data.results;
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);

        searchResult.appendChild(imageLink);
        // console.log("clicked");
    })
    showMoreBtn.style.display = 'block';



}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});


showMoreBtn.addEventListener("click", function () {
    page++;
    searchImages();
})
