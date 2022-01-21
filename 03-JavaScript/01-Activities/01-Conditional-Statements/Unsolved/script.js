// TODO: Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = x < 51;
var expression2 = x > 49;

// TODO: Write Your JavaScript Code Here

// True statements here
if(expression1 && expression2) {
    console.log("True ✅ True ✅")
}

// expression 1 true
else if (expression1) {
    console.log("True ✅ False ❌")
}

// expression 2 true
else if(expression2) {
    console.log("False ❌ True ✅")
}

// False statements here
else {
    console.log("False ❌ False ❌")
}