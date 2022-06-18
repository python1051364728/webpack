import App from './app.vue'
import './assets/fonts/iconfont.css'
import gifStr from './assets/1.gif'
import pngStr from './assets/logo_small.png'
import $ from 'jquery'
import './css/index.css'
import './css/index.less'


const gif = `<img src="${gifStr}"`
const png = `<img src="${pngStr}"`

$('body').append(gif)
$('body').append(png)

const fn = () => {
    console.log('你好');
}


