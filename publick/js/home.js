const productContainers = [...document.querySelectorAll('.product-container')];
const nextBtn = [...document.querySelectorAll('.next-btn')]
const prevBtn = [...document.querySelectorAll('.prev-btn')]

productContainers.forEach((item, i)=>{
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth  = containerDimenstions.width;
    
    nextBtn[i].addEventListener('click',()=>{
        item.scrollLeft+=containerWidth;
    })
    prevBtn[i].addEventListener('click',()=>{
        item.scrollLeft-=containerWidth;
    })



})