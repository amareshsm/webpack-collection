function appendImg(imgSrc){
    const img= document.createElement('img');
    img.alt="house";
    img.width=400;
    img.src=imgSrc;
    const el = document.querySelector('#house-img');
    el.appendChild(img);
}
export default appendImg;