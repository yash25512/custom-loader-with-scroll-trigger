 var tl=gsap.timeline();

function time(){
    var a=0;
    setInterval(function(){
          a+=Math.floor(Math.random()*20);
          if(a<100){
            document.querySelector("#loader h1").innerHTML=a+"%";
          }
    else{
        a=100
        document.querySelector("#loader h1").innerHTML=a+"%";
    }
    },150)
}

tl.to("#loader h1",{
  scale:1.5,
  delay:0.5,
  duration:1,
  onStart:time()
})
tl.to("#loader",{
    top:"-100vh",
    delay:0.2,
    duration:1.5

})


var tl=gsap.timeline();
tl.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:100,
    scrollTrigger:{
        trigger:"#page1",
        scroll:"body",
        markers:"true",
        start :"top 0",
        end:"top -200%",
        scrub:3,
        pin:true,

    }
})