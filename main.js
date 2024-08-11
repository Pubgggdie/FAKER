gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


   gsap.from(".page1 h1",{
    y:100,
opacity:0,
delay:0.5,
duration:0.8,
stagger:0.3
   });
   gsap.from(".bottom .main-text",{
    opacity:0,
    y:40,
    duration:5,
    scrollTrigger: {
      trigger:".bottom",
      scroller:".main",
      start:"top 80%",
      end:"bottom 70%",
      scrub:2,
    
    },
   });
   gsap.from(".page1 .video-container",{
    scale:0.9,
    opacity:0,
    delay:1.4,
    duration:0.4,
   })
   gsap.from(".page1 .video-container",{
    y:20,
    duration:3,
    scrollTrigger:{
      trigger:".page1",
      scroller:".main",
      start:"top -100%",
      end:"bottom 100%",
      scrub:2,
     
    }
  })
   var a = document.querySelector(".elem-container")
   var fixed=document.querySelector(".fixed")
   a.addEventListener("mouseenter",function(){
fixed.style.display="block";
   })
   a.addEventListener("mouseleave",function(){
    fixed.style.display="none";
       })
var elems=document.querySelectorAll(".elem")
elems.forEach(function(e){
e.addEventListener("mouseenter",function(){
    var image = e.getAttribute("data-image")
    fixed.style.backgroundImage=`url(${image})`
})
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween:45,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var tl=gsap.timeline();
  tl.from(".page3 h2",{
    y:20,
    opacity:0,
    duration:2,
    scrollTrigger:{
trigger:".page3",
scroller:".main",
start:"top 90%",
end:"bottom 100%",
scrub:true
    }

  })
  function swiper(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween:100,
    });
  }
  var page4=document.querySelector(".page4")
  var button=document.querySelector(".scroll-btn")
  page4.addEventListener("mouseenter",function(){
    gsap.to(button,{
      scale:1,
      opacity:1
    })
  })
  page4.addEventListener("mouseleave",function(){
    gsap.to(button,{
      scale:0,
      opacity:0
    })
  })
