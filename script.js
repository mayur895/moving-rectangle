console.log("hey"); 
console.log("hey")
window.addEventListener("mousemove", function (details) {
    var rect = this.document.querySelector(".rect")

    var val = gsap.utils.mapRange(0, window.innerWidth, 50 + rect.getBoundingClientRect().width / 2, window.innerWidth - (50 + rect.getBoundingClientRect().width / 2), details.clientX)
    
    gsap.to(".rect", {
        left: val + "px",
        ease: Power3,
    })
})
