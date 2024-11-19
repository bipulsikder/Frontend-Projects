var crsr = document.querySelector("#cursor")
var crsrBlur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x +"px"
  crsr.style.top = dets.y +"px"
  crsrBlur.style.left = dets.x -150 +"px"
  crsrBlur.style.top = dets.y -150 +"px"
})




gsap.to("#nav",{
  backgroundColor:"#000",
  height:"90px",
  duration:1,
  scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -9%",
    end:"top -12%",
    scrub:1,
  }
  }
)

gsap.to("#main",{
  backgroundColor:"#000",
  scrollTrigger:
  {
  trigger:"#main",
  scroller:"body",
  markers:true,
  start:"top -25vh",
  end:"top -70%",
  scrub:2,
}})