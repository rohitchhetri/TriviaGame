
//Javascript Connection Test
//alert("Javascript is connected")

$(document).ready(function () {
  //Variable for the quizquestion

  var quizQuestionCnt = 0;

  // user correct answer 

  var usrCorrectAns = 0;

  // user wrong answer 

  var usrWrongAns = 0;

  //Time left for the user 

  var time = 15;

 // var rightimg = "<img src="./images/right.jpg" />";

  //var wrongimg = <img src="./images/yougotright.jpg" />;
  //Array of quizQuestionObjec with options and answer

  var quizQuestion = [
    {
      q: "Which of the following is correct about features of JavaScript?",
      o: ["JavaScript is a lightweight, interpreted programming language.", "JavaScript is designed for creating network-centric applications.", "JavaScript is complementary to and integrated with Java.", "All of the above."],
      a: "JavaScript is complementary to and integrated with Java.",
      img: "<img src='./assets/images/yougotright.jpg' />",
      wrongimg: "<img src='./assets/images/right.jpg' />"
    },
    {
      q: "Which of the following is a valid type of function javascript supports?",
      o: ["named function", "anonymous function", "Both of the above.", "None of the above."],
      a: "anonymous function",
      img: "<img src='./assets/images/yougotright.jpg' />",
      wrongimg: "<img src='./assets/images/right.jpg' />"
    },
    {
      q: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
      o: ["last()", "put()", "push", "None of the above"],
      a: "put()",
      img: "<img src='./assets/images/yougotright.jpg' />",
      wrongimg: "<img src='./assets/images/right.jpg' />"
    },
    {
      q: "Which built-in method returns the calling string value converted to lower case?",
      o: ["toSource()", "valueOf()", "toString()", "None of the above"],
      a: "valueOf()",
      img: "<img src='./assets/images/yougotright.jpg' />",
      wrongimg: "<img src='./assets/images/right.jpg' />"
    },
    {
      q: "Which of the following function of String object returns the characters in a string between two indexes into the string?",
      o: ["slice()", "split()", "substr()", "substring()"],
      a: "substr()",
      img: "<img src='./assets/images/yougotright.jpg' />",
      wrongimg: "<img src='./assets/images/right.jpg' />"
    },
  ];



  // Rendring the questions and answer 
  function quizRender() {
    $("#questionRender").append(quizQuestion[quizQuestionCnt].q +
      "<p class='pCSS'>" + quizQuestion[quizQuestionCnt].o[0] + "</p>" +
      "<p class='pCSS'>" + quizQuestion[quizQuestionCnt].o[1] + "</p>" +
      "<p class='pCSS'>" + quizQuestion[quizQuestionCnt].o[2] + "</p>" +
      "<p class='pCSS'>" + quizQuestion[quizQuestionCnt].o[3] + "</p>"
    )
  };

 //quizRender();
  // Correct Answer 

  function userCorrect() {

    $("#questionRender").html("<p>You got it ! </p>");
    usrCorrectAns++;
    var correctAns = quizQuestion[quizQuestionCnt].a;
    $("#questionRender").append("<p>The answer was " + correctAns + "<br />" + quizQuestion[quizQuestionCnt].img);
   //console.log(rightimg);
    setTimeout(nextQ, 4000);
    quizQuestionCnt++;
  }
//userCorrect();

  // Wrong Answer 

  function wrongAns() {
    $("#questionRender").html("<p>You  got wrong !");
    usrWrongAns++;
    var correctAns = quizQuestion[quizQuestionCnt].a;
    $("#questionRender").append("<p>The answer was " + correctAns + "<br />" + quizQuestion[quizQuestionCnt].wrongimg);
    setTimeout(nextQ, 2000);
    quizQuestionCnt++;

  }
  //wrongAns();

  //Times up

  function timesUp(){

    if (time === 0 ){

      $("#questionRender").html("<p>Times Up! ");
      usrWrongAns++;

      var correctAns = quizQuestion[quizQuestionCnt].a;
    $("#questionRender").append("<p>The answer was " + correctAns);
    setTimeout(nextQ, 2000);
    quizQuestionCnt++;
    }
  }

function result() {

      if (usrCorrectAns === quizQuestion.length){
        var endmsg = "Welldone";
      }
      else if 
          (usrCorrectAns > usrWrongAns){
            var endmsg ="Try Next time";
          }
      else{
        var endmsg = "GoodLuck"
      }
      $("#gamescreen").html("<p>" + endmsg + "</p>" + "<p> You got "+ usrCorrectAns + "<p> Rights.</p>")
      $("#questionRender").html("<p>You score " +usrCorrectAns+" Correct" + " & " + usrWrongAns +" Wrong Answer");
      reset();
      }

  // Timer for the Question 
  function timerFn() {
    //time = 15;
    clock = setInterval(gameTimer, 1000);

    function gameTimer(){

      if (time < 1) {
        clearInterval(clock);
        //timesUp();
      }
      if (time > 0) {
        time--;
        
      }
      //$("#timerCount").html("Test");

      $("#timer").html("<strong>" + "Time Left :" + time + "</strong>");

      //console.log(timerVal);
    }

  }


  // next Question Rendering 

  function nextQ() {

    if (quizQuestionCnt < quizQuestion.length) {
      time = 15;
      $("#questionRender").html("<p>You have " + time + " sec Left");
      quizRender();
      timerFn();
      timesUp();

    }

    else {
      result();
    }

  }

nextQ();
  //Reset 

  function reset() {

    quizQuestionCnt = 0;
    usrCorrectAns = 0;
    usrWrongAns = 0;
  }

  // Start the Game 

  function start() {

    quizRender();
    timerFn();
    timesUp();
  }

// function to trigger display next

$("#questionRender").on("click",".pCSS",(function() {
  //alert("Click Event");
    var usrCorrectAns = $(this).text();
    if (usrCorrectAns === quizQuestion[quizQuestionCnt].a) {
      console.log(usrCorrectAns);
      clearInterval(clock);
      userCorrect();
    }
  else {
    clearInterval(clock);
    wrongAns();
       }
      }));
});