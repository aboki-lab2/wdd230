// select the elements to manipulate (output to)
const images = document.querySelectorAll("[data-src]");

function preloadingImage(){
    const src = img.getAttribute("data-src");
    if(!src){
        return;
    }
    img.src = src;
}
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 300px opx"
};
const imgObserver = new IntersectionObserver((entries,imgObserver) =>{
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return;
        } else {
            preloadingImage(entry.target);
        }
    });
}, imgOptions)
images.forEach(image=> {
    imgObserver.observe(image);
});

