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

  const collapse = new acordeon(props);
  collapse.init();
});
