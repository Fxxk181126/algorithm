Array.prototype.sequentailSearch = function(item) {
    for (let i = 0; i < this.length; i++) {
        if(this[i] == item) {
            return i;
        }
    }
    return -1;
}

var res = [5, 4, 3, 2, 1].sequentailSearch(3);
