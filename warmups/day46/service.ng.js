var store = angular.module("mystore", []);

store.service("store", function () {
    this.items = [];
    this.total = 0;
    this.addItem = function (name, cost) {
        this.items.push({
            name: name,
            cost: cost
        });
        this.total += cost;
    };
});