Array.prototype.insertorSort = function() {
    for (let i = 1; i < this.length; i++) {
        let tem = this[i];
        let j = i;
        while(j > 0) {
            if(this[j - 1] > tem) {
                this[j] = this[j - 1];
            } else {
                break;
            }
            j--;
        }
        this[j] = tem;
    }
}

let arr = [ 5, 4, 3, 2, 1];
arr.insertorSort();