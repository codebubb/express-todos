class TodoApp {

  constructor() {
    console.log('JS App started...');

    this.doneAction = 'todo__done_action';
    this.deleteAction = 'todo__delete_action';
    this.APIEndpoints = {
      create: '/new-todo',
      update: '/update-todo',
    };
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

      switch (className) {
        case this.doneAction: this.submitTodoForm()
      }
      if (className === this.doneAction || className === this.deleteAction;

      if (isTodoUpdate) {
        this.submitTodoForm(srcElement.parentElement);
      }
    });
  }

  submitTodoForm(form) {
    fetch()
  }
}

new TodoApp();