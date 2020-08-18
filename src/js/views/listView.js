import { elements } from './base';
// 渲染模組
export const renderList = (item,type=true) => {
    console.log(item,type)
    const markup = `
        <li class="item animate__animated animate__fadeInUp" data-itemid=${item.id} >
            <div class="text ${(!type) ? "text-delete" : ''}">${item.text}</div>
            <div class="btn-list" >
             <button type="button" class="btn btn-outline-secondary complete" data-itemid=${item.id}>完成</button>
                <button type="button" class="btn btn-outline-danger delete"  data-itemid=${item.id}>刪除</button>
            </div>
                
        </li>
    `;
    elements.list.insertAdjacentHTML('beforeend', markup);
};

// 完成
export const changeList = id => {
    // parentElement 返回當前節點的父元素節點，如果該元素沒有父節點，或者父節點不是一個DOM 元素，則返回null。
    const el = document.querySelector(`.item [data-itemid="${id}"]`).parentElement.parentElement.children[0];
    el.classList.toggle('text-complete');
};

// 刪除
export const deleteList = id => {
    // parentElement 返回當前節點的父元素節點，如果該元素沒有父節點，或者父節點不是一個DOM 元素，則返回null。

    const el = document.querySelector(`.item [data-itemid="${id}"]`).parentElement.parentElement;
    if (el) el.parentElement.removeChild(el);
};