import './toast.scss';
class Toast{
    render = function () {
        const div = document.createElement('div');
        const span = document.createElement('span');
        span.innerText = "Sample Toast";
        div.classList.add('toast');
        span.classList.add('toast-txt');
        div.appendChild(span);
        const body = document.querySelector('body');
        body.appendChild(div);
    }
}
export default Toast;