import './style.css';

const defaultSettings = {
  hideAll: false,
  showAll: false,
  onlyOne: false,
  showId: undefined,
  openClass: '-open',
  headerSelector: '.acordeon-header',
  contentSelector: '.acordeon-content',
};

const defaultSelector = '.acordeon-container';

class Acordeon {
  constructor(props) {
    const { selector, settings = {}, onShow = () => {}, onHide = () => {} } =
      props || {};

    this.settings = { ...defaultSettings, ...settings };
    this.selector = selector || defaultSelector;
    this.onShow = onShow;
    this.onHide = onHide;
    this.panels = document.querySelectorAll(selector);
  }

  Show = el => {
    const { onShow, hideAll } = this;
    const { openClass, contentSelector, onlyOne } = this.settings;
    const [content] = el.querySelectorAll(contentSelector);

    const { scrollHeight, style } = content;
    const maxHeight = `${scrollHeight}px`;

    style.maxHeight = maxHeight;
    el.classList.add(openClass);
    if (onlyOne) hideAll({ ignore: el });
    onShow(el);
  };

  Hide = el => {
    const { onHide } = this;
    const { openClass, contentSelector } = this.settings;
    const [content] = el.querySelectorAll(contentSelector);

    const { style } = content;
    const maxHeight = '0px';

    style.maxHeight = maxHeight;
    el.classList.remove(openClass);
    onHide(el);
  };

  toggle = el => {
    const { Show, Hide } = this;
    const { openClass } = this.settings;
    if (el.classList.contains(openClass)) Hide(el);
    else Show(el);
  };

  toggleById = id => {
    const { panels } = this;
    const el = panels[id];
    if (!el) return;
    this.toggle(el);
  };

  showAll = () => {
    const { Show, panels } = this;

    panels.forEach(el => {
      Show(el);
    });
  };

  hideAll = ({ ignore = undefined } = {}) => {
    const { Hide, panels } = this;
    panels.forEach(el => {
      if (ignore !== el) Hide(el);
    });
  };

  init = () => {
    const { panels } = this;
    const { showAll, hideAll, showId, headerSelector } = this.settings;

    panels.forEach(el => {
      const [header] = el.querySelectorAll(headerSelector);
      if (!header) return;
      header.addEventListener('click', e => {
        e.preventDefault();
        this.toggle(el);
      });
    });

    if (showAll) this.showAll();
    if (hideAll) this.hideAll();
    if (showId) this.toggleById(parseInt(showId, 10));
  };
}

export default Acordeon;
