
//Javascript Connection Test
//alert("Javascript is connected")


// Variable Define for score and Render Question 

var score = 0;
var questionIndex = 0;

//Array of quizQuestionObjec with options and answer

var quizQuestion = [
    {q:"Which of the following is correct about features of JavaScript?",
    o:["JavaScript is a lightweight, interpreted programming language.","JavaScript is designed for creating network-centric applications.","JavaScript is complementary to and integrated with Java.","All of the above."],
    a:3},
    {q:"Which of the following is a valid type of function javascript supports?",
     o:["named function","anonymous function","Both of the above.","None of the above."],
     a:2
    },
    {q:"Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
     o:["last()","put()","push","None of the above"],
     a:2
    },
    {q:"Which built-in method returns the calling string value converted to lower case?",   
     o:["toSource()","valueOf()","toString()","None of the above"],
     a:2
    },
    {q:"Which of the following function of String object returns the characters in a string between two indexes into the string?",
     o:["slice()","split()","substr()","substring()"],
     a:3
    },
];

//Rendering question to div with .questionRender class
