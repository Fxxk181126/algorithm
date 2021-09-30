Array.prototype.binarySearch = function(item) {
    let low = 0;
    let hight = this.length - 1;
    let mid = Math.floor((low + hight) / 2);

    while(low <= hight) {
        if(this[mid] < item) {
            low = mid + 1;
        } else if(this[mid] > item){
            hight = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

var res = [5, 4, 3, 2, 1].binarySearch(3);
