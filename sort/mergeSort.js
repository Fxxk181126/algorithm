Array.prototype.mergeSort = function() {
    const separation = (arr) => {
        if(arr.length <= 1) return arr;
        
        let midIndex = Math.floor(arr.length / 2);
        let left = arr.slice(0, midIndex);
        let right = arr.slice(midIndex);

        return merge(separation(left), separation(right));
    };

    const merge = (left, right) => {
        let tem = [];
        while(left.length && right.length) {
            if(left[0] > right[0]) {
                tem.push(right.shift());
            } else {
                tem.push(left.shift());
            }
        }
        while(left.length) {
            tem.push(left.shift());
        }
        while(right.length) {
            tem.push(right.shift());
        }

        return tem;
    };

    const res = separation(this);
    res.forEach((v, i) => {
        this[i] = v;
    })
}

let arr = [ 5, 4, 3, 2, 1];
arr.mergeSort();