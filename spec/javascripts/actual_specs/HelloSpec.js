 it('should trigger form and add item to todo array', function(){
        const form = document.createElement('form');
        form.innerHTML= `<input value="get milk" />
          <button type="submit" />`;
        document.body.appendChild(form)
        const ul = document.createElement('ul'); 
        Dom.addTodoEvent(
          form, 
          todo.addTodo.bind(todo), 
          ul)
        form.getElementsByTagName('button')[0].click();
        document.body.removeChild(form)
        expect(todo.todo[0].title).toEqual('get milk')
      })

  DomManipulation.prototype.addTodoEvent = function(form, createTodo, unorderedList){
      const displayItem = this.displayItem;
      const id = new Date().getUTCMilliseconds();
      form.addEventListener('submit', function(e){
            e.preventDefault();
            const input = document.querySelector('input').value
            const item = {complete: false,id : id, title: input}
            createTodo(item);
            unorderedList.appendChild(displayItem(item))
        }) 
    }