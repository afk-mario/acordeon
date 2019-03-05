document.addEventListener('DOMContentLoaded', () => {
  const props = {
    selector: '.acordeon-container',
    onShow: e => {
      console.log('show', e);
    },
    onHide: e => {
      console.log('hide', e);
    },
  };

  const acordeon = new Acordeon(props);
  acordeon.init();
});
