export default class List {

    constructor() {
        this.items = [];
    }

    addItem(text) {
        const item = {
            id: '_' + Math.random().toString(36).substr(2, 9),
            text,
        };
        this.items.push(item);
        return item;
    }

    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id);
        //slice() 方法會回傳一個新陣列物件，為原陣列選擇之 begin 至 end（不含 end）部分的淺拷貝（shallow copy）。而原本的陣列將不會被修改。

        // [2,4,8] splice(1,2) ->returns [4,8] , original array is [2]
        // [2,4,8] slice(1,2) ->returns [4] , original array is [4]

        this.items.splice(index, 1);
        return id;
    }

}