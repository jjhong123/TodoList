import "../scss/main.scss";
import * as listView from './views/listView';
import { elements } from './views/base'; //基礎元件
import List from './model/List';
const state = {}

let now = new Date();

document.querySelector('.year').textContent = now.getFullYear();
document.querySelector('.title .month').innerHTML = now.getMonth() + 1;



switch (now.getDay()) {
    case 1:
        document.querySelector('.week').innerHTML = '星期一';
        break;
    case 2:
        document.querySelector('.week').innerHTML = '星期二';
        break;
    case 3:
        document.querySelector('.week').innerHTML = '星期三';
        break;
    case 4:
        document.querySelector('.week').innerHTML = '星期四';
        break;
    case 5:
        document.querySelector('.week').innerHTML = '星期五';
        break;
    case 6:
        document.querySelector('.week').innerHTML = '星期六';
        break;
    case 7:
        document.querySelector('.year').innerHTML = '星期日';
        break;
}

const ListController = () => {
    if (!state.list) state.list = new List();
}

elements.addlistButton.addEventListener('click', (e) => {
    let text = prompt('請輸入待辦事項!!!!');
    let item = state.list.addItem(text);
    listView.renderList(item);
});

elements.list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        let item = state.list.deleteItem(e.target.dataset.itemid)
        listView.deleteList(item);
    } else if (e.target.classList.contains('complete')) {
        listView.changeList(e.target.dataset.itemid);
    }
});

ListController(); // ListController
