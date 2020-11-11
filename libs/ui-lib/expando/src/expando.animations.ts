import { animate, group, state, style, transition, trigger } from '@angular/animations';

// TODO: Move these to an animations file in ui-components
const swiftEaseIn = 'cubic-bezier(0.55, 0, 0.55, 0.2)';
const swiftEaseOut = 'cubic-bezier(0.25, 0.8, 0.25, 1)';

/**
 * Animations used by the ui-expando-panel component.
 */
export const expandoPanelAnimations = {

  /**
   * When the expando panel is added to the DOM, it slides down.
   * When the expando panel is removed from the DOM, it slides up.
   */
  openClose: trigger('openClose', [
    state(
      'void',
      style({
        transform: 'translateY(-100%)',
        opacity: .1
      })
    ),
    transition(
      ':enter',
      group([
        animate(
          '450ms ' + swiftEaseOut,
          style({
            transform: 'translateY(0)'
          })),
        animate(
          '600ms linear',
          style({
            opacity: 1
          }))
      ])
    ),
    transition(
      ':leave',
      animate(
        '350ms ease-in', // + swiftEaseIn,
        style({ transform: 'translateY(-100%)' })
      )
    ),
  ])
};
