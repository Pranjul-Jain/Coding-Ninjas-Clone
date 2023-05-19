document.addEventListener('scroll',()=>{
    const element = document.querySelector(".nav-header");    
    if(window.scrollY > 0 && element.style.backgroundColor !== "#2f154c"){
        element.style.backgroundColor = "#2f154c";
    }
    else if( element.style.backgroundColor !== "transparent" ){
        element.style.backgroundColor = "transparent";
    }

})

document.querySelectorAll("footer a").forEach(element=>{
    element.addEventListener("mouseenter",(event)=>{
        element.childNodes[1].classList.add("slide-anchor-border")
    })

    element.addEventListener("mouseleave",(event)=>{
        element.childNodes[1].classList.remove("slide-anchor-border")
    })
})

document.querySelectorAll(".section-info-box a").forEach(element=>{
    element.addEventListener("mouseenter",(event)=>{
        element.childNodes[1].classList.add("slide-anchor-border")
    })

    element.addEventListener("mouseleave",(event)=>{
        element.childNodes[1].classList.remove("slide-anchor-border")
    })
})