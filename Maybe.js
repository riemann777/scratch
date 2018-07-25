

function Maybe(val) {
    this.__value = val;
};

Maybe.of = function(val) {
    return new Maybe(val);
};

Maybe.prototype.map = function(f) {
    if (this.isNothing()) {
        return Maybe.of(null);
    }
    return Maybe.of(f(this.__value));
};

Maybe.prototype.isNothing = function() {
    return (this.__value === null || this.__value === undefined);
};

Maybe.prototype.join = function() {
    return this.__value;
};

Maybe.prototype.chain = function(f) {
    return this.map(f).join();
};

Maybe.prototype.orElse = function(default) {
    if (this.isNothing()) {
        return Maybe.of(default);
    }

    return this;
};

Maybe.prototype.ap = function(someOtherMaybe) {
    return someOtherMaybe.map(this.__value);
}

module.exports = Maybe;