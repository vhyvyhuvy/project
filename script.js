document.addEventListener("DOMContentLoaded", ()=>{
    const modal=document.querySelector(".modal");
    const closeModal= document.querySelector(".close")
    const closeBtn = document.getElementById("close-modal")
    const cartBtn = document.querySelector(".cart-btm")


    cartBtn.addEventListener("click", function(){
        modal.style.display='flex'
    })


    closeModal.addEventListener("click", function(){
        modal.style.display="none"
    })

    closeBtn.addEventListener("click", function(){
        modal.style.display="none"
    })

   
    
})