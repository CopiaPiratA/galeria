const input = document.getElementById("uploader");
const uploadBtn = document.getElementById("upload-btn");
const imgName = document.getElementById("img-name");

const wallSection = document.getElementById("wallpapers");
const memesSection = document.getElementById("memes");
const epicSection = document.getElementById("epic");
const randomSection = document.getElementById("random-shit");

const categories = document.getElementById("categories-inp");


function AddImgToDom(categorie) {
    let blockDiv = document.createElement("div");
    categorie.appendChild(blockDiv);
    let imgTitle = document.createElement("h3");
    const close = document.createElement('button');
    close.className = "close-txt"
    let deleteTxt = document.createTextNode("Delete");
    close.appendChild(deleteTxt);
    let imgNameTxt = document.createTextNode(imgName.value);
    imgTitle.appendChild(imgNameTxt);
    let newImg = document.createElement("img");
    newImg.src = input.value;
    newImg.alt = imgName.value;
    blockDiv.appendChild(imgTitle);
    blockDiv.appendChild(newImg);
    blockDiv.appendChild(close);
    blockDiv.className = "block-img";

        close.addEventListener("click",()=>{
            if(confirm("Sure to delete this image?")){
                blockDiv.style.display = "none";
            }
        
        })
}

uploadBtn.addEventListener("click",()=>{
    if (categories.value === "1"){
        AddImgToDom(wallSection);
    }else if (categories.value === '2'){
        AddImgToDom(memesSection);
    }else if (categories.value === '3'){
        AddImgToDom(epicSection);
    }else {
        AddImgToDom(randomSection);
    }
        

        /*let blockImgDivs = wallSection.querySelectorAll(".block-img");
            if (blockImgDivs.length > 5){
                let viewAllBtn = document.createElement("button");
                viewAllBtn.className = "view-all"
                let viewAllTxt = document.createTextNode("View All");
                viewAllBtn.append(viewAllTxt);
                wallSection.appendChild(viewAllBtn);
                 if(blockImgDivs.length > 6){
                    blockDiv.style.display = "none";
                    viewAllBtn.style.display = "none"
                 }
            }*/
})

