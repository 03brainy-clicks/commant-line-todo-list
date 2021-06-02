var todo = true;
var array = [];
while (todo !== false) {
  var input = prompt("Enter TODO : ");
  if (input == "quit") {
    todo = false;
    break;
  } else {
    if (input == "new" || input == "New") {
      let newValue = prompt("Enter new : ");
      array.push(newValue);
      console.log(`new entry : ${newValue} add`);
    } else if (input == "delete" || input == "Delete") {
      let delValue = prompt("Enter No. to delete : ");
      array.splice(delValue, 1);
      console.log(`delete entry : ${delValue} deleted`);
    } else if (input == "list" || input == "List") {
      console.log("List");
      for (let i = 0; i < array.length; i++) {
        console.log(`index ${i} : ${array[i]}`);
      }
    } else {
      console.log("wrong input");
    }
  }
}
