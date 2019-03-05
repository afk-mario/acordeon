import { expect } from 'chai';
import Acordeon from '.';

import 'jsdom-global/register';

describe('Basic class test', () => {
  let acordeon;

  beforeEach(() => {
    acordeon = new Acordeon('.acordeon-container');
  });

  it('should have basic variables', () => {
    expect(acordeon).to.include.all.keys(
      'selector',
      'settings',
      'onShow',
      'onHide'
    );
  });

  it('should have default settings', () => {
    expect(acordeon.settings).to.include.all.keys(
      'hideAll',
      'showAll',
      'onlyOne',
      'showId',
      'openClass',
      'headerSelector',
      'contentSelector'
    );
  });
});
