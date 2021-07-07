function addTitle(content){
 const heading = document.createElement('h1');
 heading.innerText=content;
 const el = document.querySelector('body');
 el.appendChild(heading);
}
export default addTitle;