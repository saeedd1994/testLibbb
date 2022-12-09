import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-testUi',
  template: `
    <p>
      test-ui works!
    </p>
  `,
  styles: [
  ]
})
export class TestUiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
