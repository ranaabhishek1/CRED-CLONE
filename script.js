let tl=gsap.timeline({
    scrollTrigger:{
        trigger:".part-2",
        start:"0% 50%",
        end:"50% 50%",
        
        scrub:1,
    },
})

tl.to("#imgthree",{
    bottom:"-5vh",
})

tl.to("#imgtwo,#imgfour",{
    marginBottom:"-20vh",
})


tl.to("#imgone,#imgfive",{
    marginBottom:"-3vh",
})

// ++++++

let tl2=gsap.timeline({
    scrollTrigger:{
        trigger:"#part-5",
        start:"40% 50%",
        end:"150% 50%",

        pin:true,
        scrub:2,
    },
})

tl2.to("#scroll-1",{
    bottom:"60vh",
})

tl2.to("#scroll-1",{
    opacity:0,
})

tl2.to("#scroll-2",{
    opacity:1,
},'ani1')


tl2.to(".phone-img",{
    x:"-31%",
},'ani1')


tl2.to("#scroll-2",{
    bottom:"60vh",
})



tl2.to("#scroll-2",{
    opacity:0,
})


tl2.to("#scroll-3",{
    opacity:1,
},'ani2')


tl2.to(".phone-img",{
    x:"-62%",
},'ani2')



// +++++


tl2.to("#scroll-2",{
    bottom:"60vh",
})



tl2.to("#scroll-2",{
    opacity:0,
})


tl2.to("#scroll-3",{
    opacity:1,
})


tl2.to("#scroll-3",{
    bottom:"60vh",
})


tl2.to("#scroll-3",{
    opacity:0,
})


tl2.to("#scroll-4",{
    opacity:1,
},'ani3')



tl2.to(".phone-img",{
    x:"-92%",
},'ani3')

// ++++


 

// ++++++++++++

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });



// +++++++++++++++