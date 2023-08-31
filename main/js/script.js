function validateForm(){
    const name = document.forms['user-form']['name'].value 
    const popupForm = document.querySelector('.popup')
    
    if(name == "") {
        document.getElementById("error-name").innerHTML = "Name cannot be empty!"
        
        return false
    }
    document.getElementById("error-name").innerHTML = ""
    setName(name)

    popupForm.classList.toggle('close')
    return false;
}

function setName(name) {
    document.getElementById("user-name").innerHTML = name
}

const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropdownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle('open')
}

var slideIndex = 1

setInterval(function(){
    plusIndex(1)
}, 3000)

function plusIndex(index){
    showImage(slideIndex += index)
}
function showImage(index){
    var imgList = document.getElementsByClassName("auto-slide")
    var i;
    if (index > imgList.length){slideIndex = 1}
    if(index < 1) {slideIndex = imgList.length}

    for(i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none"
    }
    imgList[slideIndex -1].style.display = "block"
}
