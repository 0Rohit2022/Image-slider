const nextEl = document.querySelector(".next")
const imagecontainerEl = document.querySelector(".image-container");
const imageEl = document.querySelectorAll("img");
const prevEl = document.querySelector(".prev");

let currentImg = 1;
let timer;


nextEl.addEventListener("click", () => {
    
    currentImg++;
    clearTimeout(timer);
    updateImage();
});

prevEl.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timer);
    updateImage();
});
updateImage();

function updateImage() {
    if (currentImg > imageEl.length){
        currentImg = 1;
    }
    else if(currentImg < 1){
        currentImg = imageEl.length;

    }
    imagecontainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
   timer =  setTimeout(() => {
        currentImg++;
        updateImage();
    }, 5000);
}

