import './heading.css'
class Heading{
    render(){
        const h1 = document.createElement('h1');
        h1.classList.add('heading')
        const body = document.querySelector('body');
        h1.innerHTML = "Heading element";
        body.appendChild(h1);
    }
};
export default Heading;