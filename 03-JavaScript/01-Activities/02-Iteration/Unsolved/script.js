// TODO: Write Your JavaScript Code Here
var students = ["Alex", "John", "Joe", "Jack"];

console.log(students.length);

for (var i = 0; i < students.length; i++) {
    console.log("Great to see you " + students[i] + "!")
}

students.forEach(function(studentName,idx){
    console.log(idx + " Great to see you, " + studentName);
})