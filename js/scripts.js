// business logic
function Task (name, category, dueDate, daysUntil, completed) {
  this.name = name;
  this.category = category;
  this.dueDate = dueDate;
  this.daysUntil = calculateDaysUntil(dueDate);
  this.completed = false;
}

var calculateDaysUntil = function(dueDate) {
  return Math.ceil((Date.parse(dueDate) - Date.now()) / (1000 * 3600 * 24));
}


// user interface logic
$(document).ready(function() {
  $("#toDoForm").submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#newName").val();
    var inputtedCategory = $("select#newCategory").val();
    var inputtedDueDate = $("input#newDueDate").val();
    var calculatedDaysUntil = calculateDaysUntil(inputtedDueDate);

    var newTask = new Task(inputtedName, inputtedCategory, inputtedDueDate, calculateDaysUntil);
  
    $("input#newName").val("");
    $("select#newCategory").val("");
    $("input#newDueDate").val("");
  });
});
