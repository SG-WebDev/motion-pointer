function motionPointerInit(e){let t=document.createElement("div");t.classList.add("motionPointer"),document.querySelector("body").appendChild(t);const o=document.querySelector(".motionPointer");let n=[];e.forEach(e=>{let t=document.querySelectorAll(e);return n.push(t),n}),n.forEach(e=>{e.forEach(e=>{e.addEventListener("mouseenter",(function(){o.classList.add("motionPointer--hover"),o.animate({transform:["scale(1)","scale(2)"]},{duration:200,fill:"forwards"})})),e.addEventListener("mouseleave",(function(){o.classList.remove("motionPointer--hover"),o.animate({transform:["scale(2)","scale(1)"]},{duration:200,fill:"forwards"})}))})}),document.addEventListener("mousemove",(function(e){let t=e.pageX,n=e.pageY,r=o.offsetWidth,i=o.offsetHeight;o.style.left=`${t-(r-10)/2}px`,o.style.top=`${n-(i-10)/2}px`}))}
