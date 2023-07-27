
 // Function to check if the user agent indicates a mobile device
 function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Function to show a message or redirect users on mobile devices
function handleMobileDevices() {
    if (isMobileDevice()) {
        // Display a message or redirect the user to a mobile version of the website
    
        alert("This website is not optimized for mobile devices. Please visit it on a desktop or laptop computer.");
        // Alternatively, you can redirect the user to a mobile version of your website using:
        // window.location.href = "url-to-mobile-version";
        //window.location.href= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dfunny&psig=AOvVaw37nfxzipPAemMPjugk1udc&ust=1690540694406000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjG0_7YroADFQAAAAAdAAAAABAE";
    }
}
handleMobileDevices()

function checkWindowWidth() {
    var maxWidth = 1000; // Set the maximum allowed width here (in pixels)

    if (window.innerWidth > maxWidth) {
        // Display a message or redirect the user to a different page
        alert("This website is not optimized for screen sizes wider than " + maxWidth + " pixels. Please visit it on a smaller screen.");
        // Alternatively, you can redirect the user to a different page using:
        // window.location.href = "url-to-redirect";
    }
}

// Attach the function to the window resize event
window.addEventListener('resize', checkWindowWidth);



function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()


gsap.to(".page1body>h1",{
    scrollTrigger:{
        trigger: `.page1body>h1`,
        start: `bottom center`,
        end: `bottom top`,
        scroller: `#main`,
        scrub:.5
    },
    stagger:.01,
    color:`transparent`
})

var clutter = "";

document.querySelector("#para>p").textContent.split(" ").forEach(function(dets){
    clutter += `<span> ${dets} </span>`

    document.querySelector("#para>p").innerHTML=clutter;
})

gsap.to("#para>p>span",{
    scrollTrigger:{
        trigger: `#para>p>span`,
        start: `top bottom`,
        end: `bottom top`,
        scroller: `#main`,
        scrub:.5
    },
    stagger:.01,
    color:`white`
})


function canvas(){
    const canvas = document.querySelector(".page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./page3001.png
  ./page3001.png
  ./page3003.png
  ./page3009.png
  ./page3015.png
  ./page3021.png
  ./page3027.png
  ./page3033.png
  ./page3039.png
  ./page3045.png
  ./page3051.png
  ./page3057.png
  ./page3063.png
  ./page3069.png
  ./page3075.png
  ./page3081.png
  ./page3087.png
  ./page3093.png
  ./page3099.png
  ./page3105.png
  ./page3111.png
  ./page3117.png
  ./page3123.png
  ./page3129.png
  ./page3135.png
  ./page3141.png
  ./page3147.png
  ./page3153.png
  ./page3159.png
  ./page3165.png
  ./page3171.png
  ./page3177.png
  ./page3183.png
 `;
  return data.split("\n")[index];
}

const frameCount = 118-86;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `.page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: ".page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()



gsap.to(".page3-cir",{
    scrollTrigger:{
      trigger:`.page3-cir`,
      start:`top center`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5
    },
    scale:1.5
  })
  
  
  
gsap.to(".page3-cir-inner",{
  scrollTrigger:{
    trigger:`.page3-cir-inner`,
    start:`top center`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  },
  backgroundColor : `#1d521b3f`,
})

gsap.to('.green', {
  scrollTrigger: { 
    trigger: ".green",
    start:`top center`,
    end:`bottom top`,
    scroller:`#main`,
    scrub: 3
  },
  stagger: .5,
  width: `155px`,
});



var tween=gsap.to('.percentage', {
  scrollTrigger: { 
    trigger: ".percentage",
    start:`top center`,
    end:`bottom top`,
    scroller:`#main`,
    scrub: 2
  },
  onUpdate: () => {
    document.getElementById("hh").innerHTML =String( Math.round(tween.progress() * 100))+"%"
  },
  left: `9.2vw`,
  color: `rgb(0, 181, 0)`,
});
