import { expect } from 'chai';
import Acordeon from '.';

import 'jsdom-global/register';

function cleanMarkup() {
  document.body.innerHTML = '';
}

function createMarkup() {
  const container = document.createElement('article');
  const header = document.createElement('header');
  const content = document.createElement('div');

  container.classList.add('acordeon-container');
  header.classList.add('acordeon-header');
  content.classList.add('acordeon-content');

  container.appendChild(header);
  container.appendChild(content);

  document.body.appendChild(container);
}

const selector = '.acordeon-container';

describe('Basic class test', () => {
  let acordeon;

  beforeEach(() => {
    cleanMarkup();
    createMarkup();
    createMarkup();
    createMarkup();
    acordeon = new Acordeon({ selector });
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

  it('should run init', () => {
    expect(() => {
      acordeon.init();
    }).to.not.throw();
  });

  it('should have 3 panels', () => {
    acordeon.init();
    expect(acordeon.panels).to.have.lengthOf(3);
  });

  it('should override default settings', () => {
    acordeon = new Acordeon({
      selector,
      settings: { showAll: true },
    });
    acordeon.init();

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

  it('should run showAll', () => {
    acordeon = new Acordeon({
      settings: { showAll: true },
    });
    acordeon.init();
    expect(acordeon.settings.showAll).to.be.true;
  });

  it('should run hideAll', () => {
    acordeon = new Acordeon({
      selector,
      settings: { hideAll: true },
    });
    acordeon.init();
    expect(acordeon.settings.hideAll).to.be.true;
  });

  it('should show first', () => {
    acordeon = new Acordeon({
      selector,
      settings: { showId: 0 },
    });
    acordeon.init();
  });

  it('should toggle an element', () => {
    expect(() => {
      acordeon.toggleById(0);
    }).to.not.throw();

    expect(() => {
      acordeon.toggleById(0);
    }).to.not.throw();
  });

  it('should toggle on click', () => {
    acordeon.init();
    const { settings, panels } = acordeon;
    const { headerSelector } = settings;

    const evt = document.createEvent('HTMLEvents');
    evt.initEvent('click', false, true);

    const [el] = panels;
    const [header] = el.querySelectorAll(headerSelector);

    header.dispatchEvent(evt);
  });
});
