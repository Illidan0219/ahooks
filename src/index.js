import _ from 'lodash'
// import './style.css'
// import test from './test.png'
import printMe from './print.js';
function component() {
    const element = document.createElement('div');

    const btn = document.createElement('button');
    // lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello')
    //
    // const myIcon = new Image();
    // myIcon.src = test
    // element.appendChild(myIcon)

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());