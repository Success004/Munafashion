const btnHammburger = document.querySelector('#btnHamburger');
const header = document.querySelector(".header");
const overlay = document.querySelector('.overlay');
const Elemens = document.querySelectorAll('.has-fade')
btnHammburger.addEventListener('click', function(){
    //console.log("click harmbuger")
    if(header.classList.contains("open")){
        header.classList.remove("open");
        Elemens.forEach(function(element){
            element.classList.remove("fade-in")
            element.classList.add("fade-out")

        })
    }
    else{
        header.classList.add("open");
        Elemens.forEach(function(element){
         element.classList.add("fade-in")
         element.classList.remove("fade-out")

        })
    }

})