
function MeDo() {
    
  this.todoList = [];
  this._init();
  
}

MeDo.prototype._init = function() {
  
  var obj = this;
  
  // Setup the event handlers
  $('#btn-show-addpage').click(Util.bind(this, this.showAddPage));
  $('#btn-save-todo').click(Util.bind(this, this.saveTodo));
  $('#btn-show-homepage').click(Util.bind(this, this.showHomePage));
  
  $('#new-todo').bind('keypress', function(e) {
    if(e.keyCode==13){
      obj.saveTodo();
    }
  });


  this.render();
  
}

MeDo.prototype.loadRaw = function(raw) {
  
  for (var i = 0; i < raw.length; i++) {
    this.add(raw[i]);
  }
  
}

MeDo.prototype.add = function(todo) {
  
  // Add to the list
  this.todoList.unshift(todo);
  
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
  $('#homepage ul.todo').html("");
  
  // Add items
  for (var i = 0; i < this.todoList.length; i++) {
    
    var htmlClass = "";
    if (0 == i)
      htmlClass += "first";
    
    if ((this.todoList.length-1) == i || (1 == this.todoList.length))
      htmlClass += " last";
      
    var html = '<li class="' + htmlClass + '"><a onclick="medo.remove(' + i + ')" href="#">' + this.todoList[i] + '</a></li>';
    $('#homepage ul.todo').append(html);
    
  };
  
  $('#count-todos').html(this.todoList.length);
  
}

MeDo.prototype.resetTodoInput = function() {
  
  $('#new-todo').val("");
  $('#new-todo').parent().removeClass('field-error');
  
}

MeDo.prototype.saveTodo = function() {
  
  var newTodo = $('#new-todo').val();
  
  // Check for empty todo
  if (newTodo.length) {
    this.add(newTodo);
    this.resetTodoInput();
    this.showHomePage();
  }
  else
    $('#new-todo').parent().addClass('field-error');
  
}

MeDo.prototype.showAddPage = function() {

  this.resetTodoInput();
    
  $('#homepage').css('display', 'none');  
  $('#addpage').css('display', 'block');
  
}

MeDo.prototype.showHomePage = function() {
  
  $('#addpage').css('display', 'none');
  $('#homepage').css('display', 'block');
  
  // Update the screen
  this.render();
  
}