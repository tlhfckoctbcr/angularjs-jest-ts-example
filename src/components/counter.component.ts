export default {
  controller: class Counter {
    count = 0;

    $onInit() {
      this.count = 1;
    }

    increment() {
      this.count += 1;
    }

    decrement() {
      this.count -= 1;
    }
  },
  template: function(): string {
    return `
      <div>
          <input ng-model="$ctrl.count"></div>
          <button ng-click="$ctrl.increment()">+</button>
          <button ng-click="$ctrl.decrement()">-</button>
      </div>
    `;
  }
}
