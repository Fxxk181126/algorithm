Array.prototype.quickSort = function() {
    const rec = (arr) => {
        if(arr.length <= 1) {
            return arr;
        }
        
        let mid = arr[0];
        let left = [];
        let right = [];
        for (let i = 1; i < arr.length; i++) {
            if(mid < arr[i]) {
                right.push(arr[i]);
            } else {
                left.push(arr[i]);
            } 
        }

        return [...rec(left), mid, ...rec(right)];
    }

    let res = rec(this);
    res.forEach((v, i) => {
        this[i] = v;
    });
}

let arr = [ 5, 4, 3, 2, 1];
arr.quickSort();