// alert("hello")
const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const submit = document.getElementById("submit");
const imageView = document.getElementById("img-view");
const cardContainer = document.getElementById("image-info");
// const home = document.getElementById("droparea");



inputFile.addEventListener("change",uploadImage);

function uploadImage(){
    // inputFile.files[0];
    file = inputFile.files[0];
    let imgLink = URL.createObjectURL(inputFile.files[0]); //gives url of image
     fileName = file.name;
     fileSize = (file.size / (1024 * 1024)).toFixed(2); // Size in MB
    // imageView.style.backgroundImage = `url(${imgLink})`;
    // var a = `url(${imgLink})`;
    // imageView.textContent="";
    // imageView.style.border= 0;
    createnewcard(imgLink,fileName,fileSize);
    
    cardContainer.hidden=false;
    submit.hidden = false;
}

function createnewcard(a,b,c)
{
    const newCard = document.createElement('div');
    newCard.innerHTML = ` 
    <div class="vertical-card">
      <div class="image-show">
        <img  src="${a}"  id="uploaded-img"  > 
        <span>
           ${b} 
           <br>
          
        </span>
      </div>
    <button type="button" class="btn-close"  aria-label="Close"></button>
    </div> `;
    // cardContainer.appendChild(newCard);
    cardContainer.insertBefore(newCard, cardContainer.firstChild);
    const closeButton = newCard.querySelector('.btn-close');
    closeButton.addEventListener('click', deleteCard);
}


function deleteCard(event) {
    const card = event.target.closest('.vertical-card');
    if (card) {
        card.remove();
    }
    if (document.querySelectorAll('.vertical-card').length === 0) {
        submit.hidden = true; // Hide the submit button
    cardContainer.hidden=true;

    }
}

dropArea.addEventListener("dragover", function(e){
    e.preventDefault();

})

dropArea.addEventListener("drop", function(e){
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();

})