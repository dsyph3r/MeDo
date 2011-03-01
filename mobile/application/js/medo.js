
function MeDo() {
  
  this.todoList = [];
  this._init();
  

}

MeDo.prototype._init = function() {
  
}

MeDo.prototype.loadRaw = function(raw) {
  
  for (var i = 0; i < raw.length; i++) {
    this.add(raw[i]);
  }
  
}

MeDo.prototype.add = function(todo) {
  
  // Add to the list
  this.todoList.push(todo);
  
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
    $('#todo ul').append(html)
  }
  
  
}

MeDo.prototype.addNew = function() {
  
  var random = [
    "Buy cat food",
    "Build some more useful phone apps",
    "Sleep"
  ];

  this.add(random[Math.floor(Math.random()* (random.length))])

}

MeDo.prototype.exit = function() {
  alert("TODO: exit");
}