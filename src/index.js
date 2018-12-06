class LuckyTool {
    constructor() {
        this.list = [];
        this.num = 1;
    }

    setNumber(value) {
        if (typeof value !== Number) return;
        this.num = value;
    }

    length() {
        return this.list.length;
    }
    addItem(value) {
        if (Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) {
                this.list.push(value[i]);
            }
        } else {
            this.list.push(value);
        }

    }
    draw() {
        let arr = [];
        if (this.list.length > this.num - 1) {
            for (let i = 0; i < this.num; i++) {
                let id = Math.floor(Math.random() * this.list.length);
                let info = this.list.splice(id, 1)[0];
                arr.push(info);
            }

        }
        if (arr.length > 0) {
            return arr;
        } else {
            return null;
        }

    }
}

window['LuckyTool'] = LuckyTool;