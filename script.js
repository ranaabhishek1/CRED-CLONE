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
    marginBottom:"-10vh",
})


tl.to("#imgone,#imgfive",{
    marginBottom:"-3vh",
})

