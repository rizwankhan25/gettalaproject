let icon = document.querySelector(".ri-menu-3-line");
let close = document.querySelector(".ri-close-line");
let menu = document.querySelector("#nav-menu");
 icon.addEventListener("click", function() {
    menu.style.top = "0%"
    close.style.display = "initial"
    close.style.color = "#000"
    icon.style.display = "none"
    document.querySelector("nav #logo").style.color = "#000";
})
close.addEventListener("click", function() {
    menu.style.top = "-110%"
    close.style.display = "none"
    icon.style.display = "initial"
    document.querySelector("nav #logo").style.color = "#d5cdc4";
 })
//locomotive
// const scroll = new LocomotiveScroll({
//     El: document.querySelector("#main"),
//     smooth: true
// });
 //gsap  animation
 let tl1 = gsap.timeline();
 tl1.from("nav", {
    opacity: 0,
    duration: 1
 })
 .from(".part-1-top", {
    y: 200,
    opacity: 0,
 })
 .from(".part-1-left h1", {
    y: 100,
    opacity: 0,
 },"g")
//  
 .from(".part-1-right",{
    y: 100,
    opacity: 0,
 },"g")
 .from(".part-2 .image-container", {
    opacity: 1,
    y: 100,
    duration: 1
 })
let tl2 = gsap.timeline({scrollTrigger: {
    trigger: ".part-2 .image-container",
    start: "-10% 50%",
    end: "80% 50% ",
    scrub: 4,
    duration: 4,
    // markers: true
}})
tl2.to(".part-2 .image-container",{
    width: "100%",
    opacity: 1,
})
let tl3 = gsap.timeline({scrollTrigger: {
    trigger: ".part-3",
    start: "20% 25%",
    end: "50% 45% ",
    scrub: 4,
    // markers: true,
}})
tl3.from(".part-3 h1",{
    y:200,
    duration: 2,
    opacity: 0,
})

let part4 = gsap.timeline({scrollTrigger: {
    trigger: ".part-4",
    start: "0% 110%",
    end: "10% 100% ",
    scrub: 4,
    // markers: true,
    duration: 2,
    delay: 2
}})
part4.from(".line", {
    width: 0,
    opacity: 0,
    delay: 2,
})

let line = gsap.timeline({scrollTrigger: {
    trigger: ".items1",
    start: "0% 65%",
    end: "0% 63% ",
    scrub: 4,
    // markers: true,
    delay: 2,
}})

line.from(".line h6,h5", {
    y:200,
    opacity: 0,
    // ease: Expo.easeInOut,
    ease: line.easeNone,
});
let part = gsap.timeline({scrollTrigger: {
    trigger: ".part-4",
    start: "20% 90%",
    end: "30% 90% ",
    scrub: 4,
    duration: 1,
    // markers: true,
}})
.from(".items1", {
    y:70,
    opacity: 0,
})
.from(".items2", {
    y:70,
    delay:1,
    opacity: 0,
})
.from(".items3", {
    y:70,
    opacity: 0,
})
let tagline = gsap.timeline({scrollTrigger: {
    trigger: ".tag-line",
    start: "0% 50%",
    end: "60% 55% ",
    scrub: 4,
    // markers: true,
}})
.from(".tag-line h1", {
    y:100,
    opacity: 0,
})

let boxtext = gsap.timeline({scrollTrigger: {
    trigger: ".box-text",
    start: "0% 85%",
    end: "90% 83% ",
    scrub: 4,
    // markers: true,
}})
.from(".box-text",{
    x:-100,
    opacity: 0
})
.from(".box-left h1", {
    y:100,
    opacity: 0,
},"t")
.from(".box-right h3", {
    y:100,
    opacity: 0,
},"t")
let part5 = gsap.timeline({scrollTrigger: {
    trigger: ".part-5",
    start: "0 40%",
    end: "25% 45%",
    scrub: 4,
    // markers: true,
    duration: 2
}})
part5.from(".text-container h1",{
    y: 200,
    opacity: 0
})
part5.from(".text-container p",{
    y: 200,
    opacity: 0
})
let part6 = gsap.timeline({scrollTrigger: {
    trigger: ".part-6",
    start: "0 20%",
    end: "30% 30%",
    scrub: 4,
    //  markers: true,
}})
.from(".part-6 h2",{
    y: 100,
    opacity: 0,
})
let part7 = gsap.timeline({scrollTrigger: {
    trigger: ".part-7",
    start: "0% 100%",
    end: "100% 0%",
    scrub: 4,
    duration: 1,
    // markers: true
}})
part7.to(".strip-l",{
    x: "-30vw"
},"strip")
part7.to(".strip-r",{
    x: "30vw"
},"strip")
let part8 = gsap.timeline({
    scrollTrigger: {
        trigger: ".part-8",
        start: "10% 60%",
        end: "35% 60%",
        scrub: 4,
        duration: 1,
        // markers: true
    }
})
.from(".text-container-2 h1",{
    y: 100,
    opacity: 0,
    ease: Expo.easeInOut
})
.from(".effect-1",{
    y: 100,
    opacity: 0,
    ease: Expo.ease
})
let part88 = gsap.timeline({
    scrollTrigger: {
        trigger: ".snack-better",
        start: "10% 50%",
        end: "60% 50%",
        scrub: 4,
        duration: 1,
        // markers: true
    }
})
.from(".snack-better h1",{
    y: 100,
    opacity: 0,
    ease: Expo.ease
})

let part9 = gsap.timeline({
    scrollTrigger: {
        trigger: ".part-9",
        start: "15% 80%",
        end: "40% 50%",
        scrub: 4,
        duration: 1,
        // markers: true,
    }
})
.from("#img-1",{
    y: 150,
    ease: Expo.ease
})
.from("#img-2",{
    y: 150,
    ease: Expo.ease
})
.from("#img-3",{
    y: 150,
    ease: Expo.ease
})
.from("#img-4",{
    y: 150,
    ease: Expo.ease
})
.from("#img-5",{
    y: 150,
    ease: Expo.ease,
    opacity: 0
})
.from("#img-6",{
    y: 150,
    ease: Expo.ease,
    opacity: 0

})
.from(".boxes-3rd",{
    y: 150,
    ease: Expo.ease,
    opacity: 0
})

// ease: Linear.easeNone,
//  ease: Expo.easeInOut,
   document.querySelector(".items1").addEventListener("mousemove",function() {
    document.querySelector("#packone").style.display = "initial"
    document.querySelector("#packtwo").style.display = "none"
    document.querySelector("#packthree").style.display = "none"
    document.querySelector(".items1 h1").style.color = "#232025"
    document.querySelector(".items1 h1").style.webkitTextStroke = "1px #fff"
    document.querySelector(".items2 h1").style.color = "#fff"
    document.querySelector(".items2 h1").style.webkitTextStroke = "initial"
    document.querySelector(".arrow-1").style.opacity = "initial"
    document.querySelector(".arrow-2").style.opacity = "0"
    document.querySelector(".arrow-3").style.opacity = "0"

})
document.querySelector(".items2").addEventListener("mousemove",function() {
    document.querySelector("#packtwo").style.display = "initial"
    document.querySelector("#packone").style.display = "none"
    document.querySelector("#packthree").style.display = "none"
    document.querySelector(".items2 h1").style.color = "#232025"
    document.querySelector(".items2 h1").style.webkitTextStroke = "1px #fff"
    document.querySelector(".items1 h1").style.color = "#fff"
    document.querySelector(".items1 h1").style.webkitTextStroke = "initial"
    document.querySelector(".items3 h1").style.color = "#fff"
    document.querySelector(".items3 h1").style.webkitTextStroke = "initial"
    document.querySelector(".arrow-2").style.opacity = "initial"
    document.querySelector(".arrow-1").style.opacity = "0"
    document.querySelector(".arrow-3").style.opacity = "0"

})
   document.querySelector(".items3").addEventListener("mousemove",function() {
    document.querySelector("#packthree").style.display = "initial"
    document.querySelector("#packtwo").style.display = "none"
    document.querySelector(".items3 h1").style.color = "#232025"
    document.querySelector(".items3 h1").style.webkitTextStroke = "1px #fff"
    document.querySelector(".items2 h1").style.color = "#fff"
    document.querySelector(".items2 h1").style.webkitTextStroke = "initial"
    document.querySelector(".arrow-3").style.opacity = "initial"
    document.querySelector(".arrow-1").style.opacity = "0"
    document.querySelector(".arrow-2").style.opacity = "0"
 })
 
 document.querySelector(".items3").addEventListener("mouseleave",function() {
    document.querySelector("#packthree").style.display = "none"
    document.querySelector("#packtwo").style.display = "none"
    document.querySelector(".items3 h1").style.color = "#fff"
    document.querySelector(".items3 h1").style.webkitTextStroke = "initial"
    // document.querySelector(".items2 h1").style.color = "initial"
    document.querySelector(".items2 h1").style.webkitTextStroke = "initial"
    document.querySelector(".arrow-3").style.opacity = "initial"
    document.querySelector(".arrow-1").style.opacity = "initial"
    document.querySelector(".arrow-2").style.opacity = "initial"
 })

let float = document.querySelector(".items-p")
let diffswing = 0;
let swing = 0;
float.addEventListener("mousemove", function(dets){
    diffswing = dets.clientX - swing;
    swing = dets.clientX;
    gsap.to(".pack",{
        ease: Power1,
        top: dets.clientY,
        left: dets.clientX,
        xPercent: -70,
        yPercent: -110,
        rotate: gsap.utils.clamp(-100, 100, diffswing*0.5)
    })
})
float.addEventListener("mousemove", function(dets){
    gsap.to("#packthree",{
        ease: Power1,
        top: dets.clientY,
        left: dets.clientX,
        xPercent: -60,
        yPercent: -160,
    })
})
float.addEventListener("mouseleave", function(dets){
    document.querySelector(".pack").style.display = "none"
})
//yes no
let floatOne = document.querySelector(".effect-1");

floatOne.addEventListener("mousemove", function(val) {
    gsap.to(".packs",{
        // ease: "Expo.easeInOut",
        top: val.clientY,
        left: val.clientX,
        xPercent: -70,
        yPercent: -120,
        rotate: "17deg"
    })
})
document.querySelector(".Yes").addEventListener("mousemove",function() {
    document.querySelector("#yes").style.display = "initial"
})
document.querySelector(".Yes").addEventListener("mouseleave",function() {
    document.querySelector("#yes").style.display = "none"
})
document.querySelector(".No").addEventListener("mousemove",function() {
    document.querySelector("#no").style.display = "initial"
})
document.querySelector(".No").addEventListener("mouseleave",function() {
    document.querySelector("#no").style.display = "none"
})