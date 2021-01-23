import { Component, Directive, HostListener } from '@angular/core';
import { TestBed } from '@angular/core/testing';

/** A directive to prevent clicks from bubbling up to DOM ancestors. */
@Directive({
  selector: '[test-block-click-bubble]'
})
export class BlockClickBubbleDirective {

  @HostListener('click', ['$event'])
  _onClick(event: MouseEvent) {
    event.cancelBubble = true;
  }
}

@Component({
  selector: 'test-host',
  template: `
  <div (click)="outerClick">
    <button [test-block-click-bubble] (click)="innerClick()">Click me</button>
  </div>`
})
export class TestHostComponent {

  outerClick() { }
  innerclick() { }
}


describe('A directive can be declared in the test file', () => {

  it('and used in a test', () => {
    TestBed.configureTestingModule({
      declarations: [BlockClickBubbleDirective, TestHostComponent]
    });
    const fixture = TestBed.createComponent(TestHostComponent);

    const directive = fixture.debugElement.children[0].children[0].injector.get(BlockClickBubbleDirective);
    expect(directive).toBeTruthy();
  })

});
