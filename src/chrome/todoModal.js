function generateRandomLinearGradient() {
    var deg = Math.floor(Math.random() * 360);

    var hexCode = "";
    var hexValues = "0123456789abcdef";
    
    for ( var i = 0; i < 6; i++ ) {
      hexCode += hexValues.charAt(Math.floor(Math.random() * hexValues.length));
    }

    var gradient = `linear-gradient(${deg}deg, #${hexCode}, #${hexCode})`;

    return gradient;
}

export function createTodo(todoItemsStringified) {
    let todoItems = JSON.parse(todoItemsStringified) || []
    if (todoItems.length > 0) {
        // Delete Social media
        document.body.replaceChildren('');

        // Create Backdrop
        const backdrop = document.createElement('div');
        backdrop.id = 'todo-backdrop';
        backdrop.style.position = 'fixed';
        backdrop.style.inset = '0px';
        backdrop.style.height = '100vh';
        backdrop.style.width = '100vw';
        backdrop.style.filter = 'blur(10px)';

        backdrop.style.background = generateRandomLinearGradient();
        document.body.appendChild(backdrop)

        // Todo List
        const todoModal = document.createElement('div');
        todoModal.id = 'todo-modal';
        todoModal.style.position = 'fixed';
        todoModal.style.width = '50vw';
        todoModal.style.padding = '20px';
        todoModal.style.borderRadius = '6px';
        todoModal.style.background = '#000000';
        todoModal.style.zIndex = '10';

        // Header Item
        const headerItem = document.createElement('h1');
        headerItem.style.color = '#ffffff';
        headerItem.style.fontSize = '30px';
        headerItem.style.margin = '20px 0px';
        headerItem.style.fontFamily = 'system-ui';
        headerItem.innerHTML = `Hey! Looks like you have ${todoItems.length} item${todoItems.length > 1 ? 's': ''} to complete.`
        todoModal.appendChild(headerItem);

        // Todo List
        let todoList = document.createElement('ul')
        todoList.style.paddingLeft = '15px';
        todoList.style.fontSize = '16px';
        todoList.style.color = '#ffffff';
        todoList.style.fontFamily = 'system-ui';
        todoItems.forEach((item) => {
            let todoItem = document.createElement('li')
            todoItem.style.marginBottom = '10px';
            todoItem.innerHTML = item.replace('todo_', '');
            todoList.appendChild(todoItem)
        })
        todoModal.appendChild(todoList);

        // Footer Item
        const footerItem = document.createElement('h3');
        footerItem.style.color = '#ffffff';
        footerItem.style.fontSize = '18px';
        footerItem.style.margin = '18px 0px';
        footerItem.style.fontFamily = 'system-ui';
        footerItem.innerHTML = `There is always time for social media after work 😊`
        todoModal.appendChild(footerItem);

        // Create Modal Container
        const modalContainer = document.createElement('div')
        modalContainer.id = 'todo-modal-container';
        modalContainer.style.display = 'flex';
        modalContainer.style.alignItems = 'center';
        modalContainer.style.justifyContent = 'center';
        modalContainer.style.position = 'fixed';
        modalContainer.style.inset = '0px';
        modalContainer.style.height = '100vh';
        modalContainer.style.width = '100vw';
        modalContainer.style.background = 'transparent';

        modalContainer.appendChild(todoModal);
        document.body.appendChild(modalContainer);
    } else {
        // If no todo Items exist
        // But modal exists
        // It is a stale modal, reload the page
        let todoModal = document.getElementById('todo-modal-container');

        if (todoModal) {
            document.location.reload();
        }
    }
}