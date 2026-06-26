
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(index){

slides.forEach(slide=>slide.classList.remove("active"));
dots.forEach(dot=>dot.classList.remove("active"));

slides[index].classList.add("active");
dots[index].classList.add("active");

}

function nextSlide(){

current++;

if(current>=slides.length){
current=0;
}

showSlide(current);

}

function prevSlide(){

current--;

if(current<0){
current=slides.length-1;
}

showSlide(current);

}

document.querySelector(".next").onclick=nextSlide;

document.querySelector(".prev").onclick=prevSlide;

dots.forEach((dot,index)=>{

dot.onclick=()=>{

current=index;

showSlide(current);

}

});

setInterval(nextSlide,4000);

let cart=0;

const cartCount=document.querySelector(".cart span");

document.querySelectorAll(".buy-btn").forEach(btn=>{

btn.addEventListener("click",function(){

cart++;

cartCount.innerText=cart;

alert("Product Added To Cart 🛒");

this.innerText="Added ✓";

this.style.background="#2ecc71";

this.disabled=true;

});

});

const searchInput=document.querySelector(".search-box input");

const searchBtn=document.querySelector(".search-box button");

searchBtn.addEventListener("click",searchProduct);

searchInput.addEventListener("keypress",function(e){

if(e.key==="Enter"){

searchProduct();

}

});

function searchProduct(){

const value=searchInput.value.toLowerCase().trim();

const products=document.querySelectorAll(".deal-card");

let found=false;

products.forEach(card=>{

const name = (card.dataset.name || "").toLowerCase();
if(name.includes(value)){

card.scrollIntoView({

behavior:"smooth",

block:"center"

});

card.style.boxShadow="0 0 25px #ff9800";

setTimeout(()=>{

card.style.boxShadow="";

},2500);

found=true;

}

});

if(!found){

alert("No Product Found 😔");

}

}