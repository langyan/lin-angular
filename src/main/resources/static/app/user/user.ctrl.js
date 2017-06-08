/**
 * Created by michael on 2017/5/26.
 */

export default class UserCtrl {

  constructor($http) {
    this.$http = $http;
    this.myData = [
      {
        firstName: 'Cox',
        lastName: 'Carney',
        company: 'Enormo',
        employed: true,
      },
      {
        firstName: 'Lorraine',
        lastName: 'Wise',
        company: 'Comveyer',
        employed: false,
      },
      {
        firstName: 'Nancy',
        lastName: 'Waters',
        company: 'Fuelton',
        employed: false,
      },
    ];
    this.gridOptions = {
      data: this.myData,
      paginationPageSizes: [5, 10, 25],
      paginationPageSize: 5,
      i18n: 'zh-cn',
      columnDefs: [
                { name: 'firstName' },
                { name: 'lastName' },
                { name: 'company' },
      ],
    };
    this.count = 0;
    this.productName = 'My Component Property';
    this.productType = 'My Component Property';
    this.init();
  }

  increment() {
    this.count += 1;
    // $window..alert(this.count);
  }
  init() {
    const me = this;
    this.$http.get('http://localhost:8080/user/list.json')
        .then((response) => { me.gridOptions.data = response.data; });
  }
  query() {
    const vm = this;
    vm.count += 1;
    vm.productName = vm.count;
  }
  add() {
    const vm = this;
  }
  modify() {
    const vm = this;
  }
  delete() {
    const vm = this;
  }

}

UserCtrl.$inject = ['$http'];
export { UserCtrl };
