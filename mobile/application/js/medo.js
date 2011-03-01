
function MeDo() {
  
  this.todoListStore = null;
  
  this.todoList = [];
  this._init();
  

}

MeDo.prototype._init = function() {
  
  this.todoListStore = new Lawnchair('todo-list');

}

MeDo.prototype.loadRaw = function(raw) {
  
  for (var i = 0; i < raw.length; i++) {
    this.add(raw[i]);
  }
  
}

MeDo.prototype.add = function(todo) {
  
  //this.todoListStore.remove('todo');
  
  // Add to the list
  this.todoList.unshift(todo);
  
  //this.todoListStore.save({key: 'todo', todo: this.todoList});
  
  // Update the screen
  this.render();
  
}

MeDo.prototype.remove = function(index) {
  
  // Remove from the list
  this.todoList.splice(index, 1);
  
  // Update the screen
  this.render();
}


MeDo.prototype.render = function() {

  /** Going to lazy render for now, just redraw the whole list **/
  
  // Clean list
  $('#todo ul').html("");
  
  // Add items
  for (var i = 0; i < this.todoList.length; i++) {
    
    var htmlClass = "";
    if (0 == i)
      htmlClass += "first";
    
    if ((this.todoList.length-1) == i || (1 == this.todoList.length))
      htmlClass += " last";
      
    var html = '<li class="' + htmlClass + '"><a onclick="medo.remove(' + i + ')" href="#">' + this.todoList[i] + '</a></li>';
    $('#todo ul').append(html);
    
    i++
  };
  
  $('#count-todos').html(this.todoList.length);
  
}

MeDo.prototype.addNew = function() {

  $('#new-todo').val("");
    
  $('.homepage').css('display', 'none');  
  $('.addpage').css('display', 'block');
  
}

MeDo.prototype.save = function() {
  
  this.add($('#new-todo').val());
  $('#new-todo').val("");
  
  $('.addpage').css('display', 'none');
  $('.homepage').css('display', 'block');
  
}

MeDo.prototype.cancelAdd = function() {
  
  $('.addpage').css('display', 'none');
  $('.homepage').css('display', 'block');
  
}