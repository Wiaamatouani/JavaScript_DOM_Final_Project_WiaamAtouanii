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
    
});

