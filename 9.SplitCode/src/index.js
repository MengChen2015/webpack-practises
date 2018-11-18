import "./style.css"
import './font.css'
import Icon from './github.jpg';
import Data from './data.xml';
function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = "Hello,webpack!"
    element.classList.add('hello');
    element.classList.add('icon-android')
    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    console.log(Data);


    return element;
}

document.body.appendChild(component());