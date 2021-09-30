Array.prototype.selectSort = function() {
    for (let i = 0; i < this.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < this.length; j++) {
            if (this[minIndex] > this[j]) {
                minIndex = j;
            }
        }

        if(minIndex != i) {
            [this[i], this[minIndex]] = [this[minIndex], this[i]];
        }
    }
}

let arr = [ 5, 4, 3, 2, 1];
arr.selectSort();