let settings=document.querySelector(".settings-box")
let rotate=document.querySelector(".rotate")
let background=true
let backgroundInterval;
let optionBackground=document.querySelectorAll(".settings-box .background .optionBackground span")
let optionBullets=document.querySelectorAll(".settings-box .background .optionBullets span")


rotate.onclick=function(){
    rotate.children[0].classList.toggle("fa-spin")
    settings.classList.toggle("open")
}


//start color

//localsrorgeget

let colors=document.querySelectorAll(".colors li")

if(window.localStorage.getItem("color")){
    document.documentElement.style.setProperty("--main-color",JSON.parse(localStorage.getItem("color")))
    colors.forEach((e)=>{
        e.classList.remove("active")
        if(e.dataset.color===JSON.parse(localStorage.getItem("color"))){
            e.classList.add("active")
        }
    })
}

//setlocalStorge

colors.forEach((e)=>{
    e.onclick=(ele)=>{
        document.documentElement.style.setProperty("--main-color",e.dataset.color)
        window.localStorage.setItem("color",JSON.stringify(e.dataset.color))
        removeActiveAndAddActive(colors,e)

    }
})

//end color

// start background

checkBackround()


if(window.localStorage.getItem("back")){

    optionBackground.forEach((e)=>{
        e.classList.remove("active")
    })
    if(window.localStorage.getItem("back")==="true"){
        background = true
            document.querySelector(".settings-box .background .optionBackground span.yes").classList.add("active")
    }else{
        clearInterval(backgroundInterval)
            document.querySelector(".settings-box .background .optionBackground span.no").classList.add("active")
    }
}


optionBackground.forEach((e)=>{
    e.onclick=(ele)=>{
        // optionBackground.forEach((e)=>{
        //     e.classList.remove("active")
        // })
        removeActiveAndAddActive(optionBackground,e)
        // e.classList.add("active")
        if(e.textContent==="Yes"){
            background=true
            checkBackround()
            localStorage.setItem("back",true)
        }else{
            background=false
            clearInterval(backgroundInterval)
            localStorage.setItem("back",false)
        }
    }    
})


// /============
// option Bullets
let tooltip=document.querySelector(".navagitions")

if(window.localStorage.getItem("bullet")){

    optionBullets.forEach((e)=>{
        e.classList.remove("active")
    })
    if(window.localStorage.getItem("bullet")==="block"){
        tooltip.style.display="block"
        document.querySelector(".settings-box .background .optionBullets span.yes").classList.add("active")
    }else{
        tooltip.style.display="none"
            document.querySelector(".settings-box .background .optionBullets span.no").classList.add("active")
    }
}

optionBullets.forEach((e)=>{
    e.onclick=(ele)=>{
        removeActiveAndAddActive(optionBullets,e)
        if(e.dataset.gound==="yes"){
            tooltip.style.display="block"
            localStorage.setItem("bullet","block")
        }else{
            tooltip.style.display="none"
            localStorage.setItem("bullet","none")
        }
    }    
})
    //end background




//landing
let landing=document.querySelector(".landing-page")
let arrLanding=["imgs/279643.jpg","imgs/03.jpg","imgs/4503770.jpg","imgs/04.jpg","imgs/05.jpg"]

// console.log(randomBackground)

function checkBackround(){
    if(background = "true"){
        backgroundInterval=setInterval((e)=>{
            let randomBackground=arrLanding[Math.floor(Math.random()*arrLanding.length)]
        
            landing.style.backgroundImage=`url(${randomBackground})`
        },1000)
    }
}
// ======


// start skilles
let skilles=document.querySelector(".our-skilles")
let spanWidth=document.querySelectorAll(".our-skilles .box .info-skilles .score span")

window.onscroll=function(){
    // answer one

    // answer Two
    // let skillesOffsetTop=skilles.offsetTop
    // let skillesOffsetHeight=skilles.offsetHeight
    // let windoewHeight=this.innerHeight
    // let windoeScrollTop=this.pageYOffset
    if(window.scrollY>=skilles.offsetTop - 250){
        spanWidth.forEach((e)=>{
            e.style.width=e.dataset.width
        })
    }
}

//images
let images=document.querySelectorAll(".our-gallery .images img")
images.forEach((img)=>{
    img.onclick=()=>{
        let popUpOverflow=document.createElement("div")
        popUpOverflow.classList.add("pop-overflow")
        document.body.appendChild(popUpOverflow)
        let popUp=document.createElement("div")
        popUp.classList.add("popUp")
        if(img.alt!==null){
            let title=document.createElement("h3")
            title.innerHTML=img.alt
            popUp.appendChild(title)
        }
        let imgPop=document.createElement("img")
        imgPop.src=img.src
        popUp.appendChild(imgPop)
        document.body.appendChild(popUp)
        
        //close

        let closePop=document.createElement("span")
        closePop.innerHTML="X"
        closePop.classList.add("closePop")
        popUp.appendChild(closePop)
        
    }
})
// let as=document.querySelector(".closePop")
// console.log(as)

document.body.onclick=(e)=>{
    if(e.target.classList=="closePop"){
        
        document.querySelector(".popUp").remove()

        document.querySelector(".pop-overflow").remove()
    }
}

// start header

let links=document.querySelectorAll(".header .links a")

//end header

// navagitions

let bullet=document.querySelectorAll(".navagitions .bullet")

// end nav

function scroolToAnyWhere(elements){
    elements.forEach((ele)=>{
        ele.onclick=(e)=>{
            e.preventDefault()
            document.querySelector(`.${ele.dataset.section}`).scrollIntoView({
                behavior:"smooth"
            })
        }
    })
}
scroolToAnyWhere(bullet)
scroolToAnyWhere(links)


// fun remove active


function removeActiveAndAddActive(elements,add){
    elements.forEach((e)=>{
        e.classList.remove("active")
    })
    add.classList.add("active")
}

//  defualt

let reset=document.querySelector(".settings-box .resetOption")
reset.addEventListener("click",()=>{
    localStorage.clear()
    // localStorage.removeItem("bullet")
    // localStorage.removeItem("color")
    // localStorage.removeItem("back")
    window.location.reload()
})

// menu click
let clickMenu=document.querySelector(".landing-page .header .menu")
let addOPenInLink=document.querySelector(".header .links")

clickMenu.onclick = function(e){
    // if(check==="true"){
    //     clickMenu.classList.add("open")
    //     addOPenInLink.classList.add("open")
    //     check="false"
    // }else if(check==="false"){
    //     clickMenu.classList.remove("open")
    //     addOPenInLink.classList.remove("open")
    //     check="true"
    // }
    e.stopPropagation()
    addOPenInLink.classList.toggle("open")
    this.classList.toggle("open")
    
    
}



document.onclick=(e)=>{
    if(e.target!==clickMenu && e.target!==addOPenInLink){
        addOPenInLink.classList.remove("open")
        clickMenu.classList.remove("open")
    }
}
