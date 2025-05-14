class List {
    constructor () {
        this._numList = [];
        this.size = 0;
    }
    sortList () {
        this._numList.sort((a, b) => a - b)
    }

    add (element) {
        this._numList.push(Number(element));
        this.sortList()
        this.size = this._numList.length
        return this
    }

    remove (index) {
        const i = Number(index)
        if (i >= 0 && i < this.size) {
            this._numList.splice(i, 1);
        }

        this.size = this._numList.length

        return this
        
    }

    get(index) {
        const i = Number(index)
        if (i >= 0 && i < this.size) {
            return this._numList[i];
        }
        
    }

}


let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));

list.remove(1);

console.log(list.hasOwnProperty('size'));
