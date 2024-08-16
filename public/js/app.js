let myButtons = document.querySelectorAll(".btn-modal")
let myModals = document.querySelectorAll(".backdrop")


myButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        let modalData = btn.getAttribute("modal-data")
        myModals.forEach(modal => {
            // * show modal
            if (modal.id == modalData) {
                modal.style.display = "flex"
            }
            // ! close modal with button
            modal.querySelector(".close-modal").addEventListener("click", () => {
                modal.style.display = "none"
            })

            // ! close modal with backdrop press
            modal.addEventListener("click", () => {
                modal.style.display = "none"
            })

        });
    })
});

/*
let menu = document.querySelectorAll(".menu-btn")
let x = document.querySelector(".x")

menu.forEach(e => {
    e.addEventListener("click",()=>{

        if (e.textContent == "Starters") {
        x.textContent = "Starters"
    }
     else if (e.textContent == "Breakfast") {
        x.textContent = "Breakfast"
    }
    else if (e.textContent == "Lunch") {
        x.textContent = "Lunch"
    }
    else if (e.textContent == "Dinner") {
        x.textContent = "Dinner"
    }
    })
    
});*/

let starters = document.querySelector("#starters")
let breakfast = document.querySelector("#breakfast")
let lunch = document.querySelector("#lunch")
let dinner = document.querySelector("#dinner")
starters.addEventListener("click",()=>{
  document.getElementById("breakfast").style.borderBottom = "2px solid #c5bebe";
  document.getElementById("lunch").style.borderBottom = "2px solid #c5bebe";
  document.getElementById("dinner").style.borderBottom = "2px solid #c5bebe";
  document.getElementById("starters").style.borderBottom = "2px solid #c5bebe";
  let a = document.querySelector(".x")
  a.textContent = "Starters"
})

breakfast.addEventListener("click",()=>{
  document.getElementById("lunch").style.borderBottom = "2px solid #c5bebe";
  document.getElementById("dinner").style.borderBottom = "2px solid #c5bebe";
  document.getElementById("starters").style.borderBottom = "2px solid #c5bebe";
  document.getElementById("breakfast").style.borderBottom = "2px solid #c5bebe";

  let title = document.querySelector(".x")
  title.textContent = "Breakfast"
})
lunch.addEventListener("click",()=>{
  document.getElementById("dinner").style.borderBottom = "2px solid #c5bebe";
  document.getElementById("starters").style.borderBottom = "2px solid #c5bebe";
  document.getElementById("breakfast").style.borderBottom = "2px solid #c5bebe";
  document.getElementById("lunch").style.borderBottom = "2px solid #c5bebe";

  let title = document.querySelector(".x")
  title.textContent = "Dinner"
})
dinner.addEventListener("click",()=>{
  document.getElementById("starters").style.borderBottom = "2px solid #c5bebe";
  document.getElementById("breakfast").style.borderBottom = "2px solid #c5bebe";
  document.getElementById("lunch").style.borderBottom = "2px solid #c5bebe";
  document.getElementById("dinner").style.borderBottom = "2px solid #c5bebe";

  let title = document.querySelector(".x")
  title.textContent = "Lunch"
})



let nextBtns = document.querySelectorAll(".next");
let previousBtns = document.querySelectorAll(".previous");
let containers = document.querySelectorAll(".sec6-carousel");


//* sliding function
let currentIndex = 0;
const slideImage = (index, myBtn) => {
  let carouselBtnAttribute = myBtn.getAttribute("carouselBtn");
  console.log(carouselBtnAttribute);

  containers.forEach((container) => {
    if (container.id == carouselBtnAttribute) {
      //! variables  sal7in  ghir  l lelement  li mt7a9a9 fih chart dyalna
      let slides = container.querySelectorAll(".slide");
      let camera = container.querySelector(".box-carousel");
      let slideWidth = slides[0].clientWidth;
      //let indicators = container.querySelectorAll(".indicator");

      //* clikit 3la previous  o ana  aslan f awel image  khasni nmchi  l image lakhra
      if (index < 0) {
        index = slides.length - 1;
        //console.log(index);
      } else if (index >= slides.length) {
        //* clikit 3la next o ana  aslan f akhir image khasni nrje3  l image lewla
        index = 0;
        //console.log(index);
      }

      //indicators.forEach((indicator) => {
      //  indicator.classList.remove("activeIndicator");
      //});
      //indicators[index].classList.add("activeIndicator");

      //* hna bach n7arek l camera dyal lcarousel
      camera.style.transform = `translateX(-${slideWidth * index}px)`;
      currentIndex = index;
    }
  });
};

//* btn dyal next
nextBtns.forEach((next) => {
  next.addEventListener("click", (event) => {
    slideImage(currentIndex + 1, event.target);
    //console.log(event.target);
    //console.log(currentIndex + 1);
  });
});

//* btn dyal previous
previousBtns.forEach((previous) => {
  previous.addEventListener("click", (event) => {
    slideImage(currentIndex - 1, event.target);
    //console.log(event.target);
    //console.log(currentIndex - 1);
  });
});

//* auto slide
containers.forEach((container) => {
  //* check wach  l element 3ando attribute auto slide
  if (container.getAttribute("autoslide")) {
    let nextBtn = container.querySelector(".next");
    setInterval(() => {
      //* method  kanwarek  biha  3la  btn
      nextBtn.click();
    }, 3000);
  }
});
