import htmltpl from './some-component.tpl.html';


class SomeComponent {

  constructor() {
    this.count = 0;
    this.property = 'My Component Property';
  }

  increment() {
    this.count += 1;
  }

}

export default function () {
  return {
    scope: {},
    controller: SomeComponent,
    controllerAs: 'ctrl',
    bindToController: true,
    template: htmltpl,
  };
}

