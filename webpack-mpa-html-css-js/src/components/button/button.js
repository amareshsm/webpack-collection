import './button.css';
class Button {
    intialText = 'New Button';
    updatedText = 'Button clicked';
    render(){
        const button = document.createElement('button');
        button.innerHTML = this.intialText;
        button.classList.add('btn');
        const body = document.querySelector('body');
        button.onclick = () => {
            button.innerHTML =this.updatedText;
        }
        body.appendChild(button);
    }
}
export default Button;