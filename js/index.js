
// Quiz
let quizBtn = document.getElementsByClassName('quiz-btn')
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

$(document).ready(function () {
    $("#exampleModal").modal("show");
});

// navbar function
// var t = 0;
// $(window).scroll(function () {
//     var nTop = $("#navbar").offset().top - window.innerHeight;
//     if (t == 0 && $(window).scrollTop() > nTop) {
        
//     }
   
// });


// Numbers functions
var a = 0;
$(window).scroll(function () {
    var oTop = $("#counter-box").offset().top - window.innerHeight;
    // var nTop = $("#navbar").offset().bottom - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop ) {
  
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 1000,
                    easing: "swing",
                    step: function () {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                        //alert('finished');
                    }
                }
            );
            
        });
        //   $(".navbar").style.backgroundColor = "#002d72";
        a = 1;
        
    }
   
});





// export default class countUp {
//   constructor(el) {
//     this.el = el;
//     this.setVars();
//     this.init();
//   }

//   setVars() {
//     this.number = this.el.querySelectorAll("[data-countup-number]");
//     this.observerOptions = { root: null, rootMargin: "0px 0px", threshold: 0 };
//     this.observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         const end = parseFloat(
//           entry.target.dataset.countupNumber.replace(/,/g, "")
//         );
//         const decimals = this.countDecimals(end);
//         if (entry.isIntersecting) {
//           this.iterateValue(entry.target, end, decimals);
//         }
//       });
//     }, this.observerOptions);
//   }

//   init() {
//     if (this.number.length > 0) {
//       this.number.forEach((el) => {
//         this.observer.observe(el);
//       });
//     }
//   }

//   iterateValue(el, end, decimals) {
//     const start = 0;
//     const duration = 2500;
//     let startTimestamp = null;

//     const step = (timestamp) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const elapsedPercent = (timestamp - startTimestamp) / duration;
//       const easedProgress = Math.min(this.easeOutQuint(elapsedPercent), 1);
//       let interimNumber = Math.abs(easedProgress * (end - start) + start);
//       el.innerHTML = this.formatNumber(interimNumber, decimals);
//       if (easedProgress < 1) {
//         window.requestAnimationFrame(step);
//       }
//     };

//     // requestAnimationFrame returns DOMHighResTimeStamp as a callback (used as timestamp)
//     window.requestAnimationFrame(step);
//   }

//   easeOutQuad(x) {
//     return 1 - Math.pow(1 - x, 3);
//   }

//   easeOutQuint(x) {
//     return 1 - Math.pow(1 - x, 5);
//   }

//   countDecimals(val) {
//     if (Math.floor(val) === val) return 0;
//     return val.toString().split(".")[1].length || 0;
//   }

//   formatNumber(val, decimals) {
//     return val.toLocaleString("en-US", {
//       minimumFractionDigits: decimals,
//       maximumFractionDigits: decimals
//     });
//   }
// }

// // Simplifed version of Viget dynamic modules to attach instances for this demo
// // https://www.viget.com/articles/how-does-viget-javascript/
// // You CAN use this pattern, but it's single purpose right now
// const dataModules = [...document.querySelectorAll('[data-module="countup"]')];

// dataModules.forEach((element) => {
//   element.dataset.module.split(" ").forEach(function () {
//     new countUp(element);
//   });
// });








// let myVideo = document.getElementsByClassName("video");

// $(window).scroll(function(){
    

//     if($(window).scrollTop() > 0 && $(window).scrollTop() < 10){
//           myVideo.play();
//     }else{
//             myVideo.pause();
//     }
// })

// const counters = document.querySelectorAll('.value');
// const speed = 100;
// const scroller = document.querySelector("#scroller");

// counters.forEach( counter => {
//    const animate = () => {
//       const value = +counter.getAttribute('akhi');
//       const data = +counter.innerText;
     
//       const time = value / speed;
//      if(data < value) {
//           counter.innerText = Math.ceil(data + time);
//           setTimeout(animate, 20);
//         }else{
//           counter.innerText = value;
//         }
     
//    }
   
   
   
//    scroller.addEventListener("mousedown", animate());
//   //   if (document.body.scrollTop > 100) {
  //           animate();
  //  }


  // function numbersMove() {
  //   window.addEventListener("scroll", () => {
  //     if (document.body.scrollTop < 200) {
  //       animate();
  //     }
  //   })
  // };
    // numbersMove();
    // animate();
  // });
