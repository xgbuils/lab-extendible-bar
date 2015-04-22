function Buffer() {
    this.cycle  = [5, 12, 1, 432, 4567, 45, 321, 1111, 61222, 9023, 8]
    this.offset = 0
    this.n = 17
    
    this.elems = []
}

Buffer.prototype.get = function () {
    var array = []
    var len   = this.cycle.length
    for (var i = 0; i < this.n; ++i) {
        array.push(this.cycle[this.offset])
        this.offset = (this.offset + 1) % len
    }
    return array
}

