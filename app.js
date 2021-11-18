//-----menu-----
var close=document.querySelector("#close");
var menu=document.querySelector("#menu");
var as=document.querySelector("aside");
var display=document.querySelectorAll(".displaycart");
var i=0

menu.addEventListener("click",function(){
    as.style.marginLeft="0px";
    as.style.transition="1s";
})
close.addEventListener("click",function(){
    as.style.marginLeft="-250px";
    as.style.transition="1s";
})
//-----display()-------
function display_block(){
    display.forEach(dis=>{
        dis.style.display="block";
    })
}
function display_hidden(){
     display.forEach(dis=>{
        dis.style.display="none";
    })
}
//------image Slider-------
const imgs=["1.jpg","2.jpg","3.jpg","4.jpg"];
var img=0;var img2=0;
var image=document.querySelector("#img1");
var images=document.querySelector("#img2");
var prev1=document.querySelector("#n11");
var next1=document.querySelector("#n12");
var prev2=document.querySelector("#n21");
var next2=document.querySelector("#n22");
var timgs=document.querySelectorAll(".timgs");
var thumb=document.querySelectorAll(".thumb img");
var lb=document.querySelector("#lightboard");
var k=0;
//----------close------------
var lc=document.querySelector(".lc");
lc.addEventListener("click",function(){
    lb.style.display="none";
})

//lightboard and main page thumbnails
thumb.forEach(ti=>{
    ti.addEventListener("click",function(){
        thumb.forEach(ti=>{
            ti.style.borderColor="transparent";
            ti.style.opacity="none";
        })
        ti.style.borderColor="orange";
        ti.style.opacity="50%";
        lb.style.display="grid";
        lightboard(ti);
        thumb[k].style.borderColor="orange";
    })

})
timgs.forEach(img=>{
    img.addEventListener("click",function(){
        timgs.forEach(im=>{
            im.style.borderColor="transparent";
            img.style.opacity="100%";
        })
        img.style.borderColor="orange";
        img.style.opacity="50%";
        lightboard(img);
    })
})
function lightboard(imgs){
        if(imgs.src==timgs[0].src){
            image.src="images/image-product-1.jpg";
            img2=0;
            k=0
        }
        else if(imgs.src==timgs[1].src){
            image.src="images/image-product-2.jpg";
            img2=1;
            k=1
        }
        else if(imgs.src==timgs[2].src){
            image.src="images/image-product-3.jpg";
            img2=2;
            k=2
        }
        else{
            image.src="images/image-product-4.jpg";
            img2=3;
            k=3
        }
}
let s;
prev1.addEventListener("click",function(){
    if(img2!=0){
        timgs[img2].style.borderColor="transparent";
        img2--;
        timgs[img2].style.borderColor="orange";
        s="images/image-product-"+imgs[img2];
        image.src=s;
    }
})
next1.addEventListener("click",function(){
    if(img2!=3){
        timgs[img2].style.borderColor="transparent";
        img2++;
        timgs[img2].style.borderColor="orange";
        s="images/image-product-"+imgs[img2];
        image.src=s;
    }
})
prev2.addEventListener("click",function(){
    if(img!=0){
        img--;
        s="images/image-product-"+imgs[img];
        images.src=s;
    }
})
next2.addEventListener("click",function(){
    if(img!=3){
        img++;
        s="images/image-product-"+imgs[img];
        images.src=s;
    }
})
//------increasing Quantity----
var plus=document.querySelector("#plus");
var minus=document.querySelector("#minus");
var quan=document.querySelector("#selected");
var q=0;
plus.addEventListener("click",function(){
    quan.innerText=++q;
    display_hidden();
})
minus.addEventListener("click",function(){
    if(q!=0){
        quan.innerText=--q;
    }
    display_hidden();
})

//-----add to cart-----
var btn=document.querySelector("#atc");
var noti=document.querySelector("#notification");
btn.addEventListener("click",function(){
    i=2
    noti.innerText=q;
    noti.style.display="none";
    if(q>0){
        noti.style.display="block";
    }
})

//-----display cart------
var cart=document.querySelector("#cart");
cart.addEventListener("click",function(){
    i++;
    if(i%2){
        display_block();
    }
    else{
        display_hidden();
    }

    if(q>0){
        let t=125*q;
        display.forEach(dis=>{
            dis.innerHTML=`
        <p class="head"><b>Cart</b></p>
        <div class="itemslist">
          <div class="imgthumb"></div>
          <p>Autumn Limited Edition... $125.00 <span>x</span>${q} <b>$${t}</b></p>
          <div class="del" ></div>
        </div>
        <button class="ck">Checkout</button>`;
        })
    }
    else{
        display.forEach(dis=>{
            dis.innerHTML=`<p class="head"><b>Cart</b></p>
                            <div class="empty"><p>Your cart is empty.</p></div>`;

        })
    }
})

/*-----hover Effect------*/
a={
    Collections:0,
    Men:1,
    Women:2,
    About:3,
    Contact:4
}
link=document.querySelectorAll('#nav div a');
link.forEach(li=>{
    li.addEventListener("mouseover",function(){
        link.forEach(l=>{
            l.parentElement.style.marginTop="35px";
            l.nextSibling.style.display="none";
        })
        li.nextSibling.style.display="block";
    })
})
