let btn = document.querySelector('.btn');
let container = document.querySelector('.contact-container');
let heading = document.querySelector('.heading');
let isTrue = true;

btn.addEventListener('click', (e) => {
e.preventDefault();
isTrue = !isTrue;

if (isTrue) {
container.style.display = "block";
} else {
container.style.display = "none";

heading.innerText = "Thank you for reaching out! Your message has been successfully sent.";
}
});

gsap.to("#page3 h1",{

transform:"translateX(-120%)",
scrollTrigger:{
trigger:"#page3",
scroller:"body",
start:"top 0",
end:"top -100%",
scrub:40,
pin:true,
}
})

document.addEventListener("mousemove", (e) => {
const cursor = document.getElementById("custom-cursor");
cursor.style.top = `${e.clientY}px`;
cursor.style.left = `${e.clientX}px`;
});

gsap.utils.toArray("#page2, #page3, #page4").forEach(section => {
gsap.from(section, {
opacity: 0,
y: 100,
duration: 1.2,
ease: "power2.out",
scrollTrigger: {
trigger: section,
start: "top 80%",
}
});
});


gsap.to("body", {
backgroundColor: "#000",
scrollTrigger: {
trigger: "#page2",
start: "top center",
end: "bottom center",
scrub: true,
}
});

gsap.to("body", {
backgroundColor: "#87ceeb",
scrollTrigger: {
trigger: "#page3",
start: "top center",
end: "bottom center",
scrub: true,
}
});

gsap.to("body", {
backgroundColor: "#000",
scrollTrigger: {
trigger: "#page4",
start: "top center",
end: "bottom center",
scrub: true,
}
});




const splitText = new SplitType(".text h1", { types: "chars" });

gsap.fromTo(
splitText.chars,
{
y: -100,
opacity: 0,
},
{
y: 0,
opacity: 1,
stagger: {
each: 0.05,
repeat: -1,
yoyo: true,
},
duration: 1.5,
ease: "power2.out"
}
);





document.querySelectorAll('.about-box').forEach((box, index) => {
gsap.from(box, {
scrollTrigger: {
trigger: box,
start: "top 80%",
toggleActions: "play none none none",
},
y: 50,
opacity: 0,
duration: 1,
delay: index * 0.2,
ease: "power2.out"
});
});


document.querySelectorAll('.about-box h2').forEach((heading) => {
const split = new SplitType(heading, { types: 'chars' });

gsap.from(split.chars, {
scrollTrigger: {
trigger: heading,
start: "top 90%",
toggleActions: "play none none none"
},
y: 40,
opacity: 0,
stagger: 0.05,
duration: 1,
ease: "back.out(1.7)"
});
});




gsap.from(heroSplit.chars, {
scale: 0,
opacity: 0,
skewY: 45,
stagger: 0.1,
duration: 1.2,
ease: "elastic.out(1, 0.5)"
});
