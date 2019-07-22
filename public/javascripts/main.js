class TodoApp {
  


  constructor() {
    console.log('JS App started...');

    this.done_action = 'todo__done_action';
    this.delete_action = 'todo__delete_action';

    this.hideFormButtons();
    this.setupEventListeners();
  }

  hideFormButtons() {
    const body = document.body;
    body.classList.add('hide-update-controls');
  }

  setupEventListeners() {
    document.addEventListener('click', (event) => {
      const { srcElement } = event;
      const { className } = srcElement;
      const isTodoUpdate = className === this.done_action || className === this.delete_action;

      if (isTodoUpdate) {
        srcElement.parentElement.submit();
      }
    });
  }
}

new TodoApp();