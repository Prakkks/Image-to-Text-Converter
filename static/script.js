// alert("hello")
const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");



inputFile.addEventListener("change",uploadImage);

function uploadImage(){
    // inputFile.files[0];
    let imgLink = URL.createObjectURL(inputFile.files[0]); //gives url of image
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.textContent="";
    imageView.style.border= 0;
    // inputFile.hidden = false;
}

dropArea.addEventListener("dragover", function(e){
    e.preventDefault();

})

dropArea.addEventListener("drop", function(e){
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();

})