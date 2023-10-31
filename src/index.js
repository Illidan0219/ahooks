import _ from 'lodash'
import './style.css'
import test from './test.png'
function component() {
    const element = document.createElement('div');

    // lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')

    const myIcon = new Image();
    myIcon.src = test
    element.appendChild(myIcon)

    return element;
}

document.body.appendChild(component());