// Declare Global Variables
var winBingo = false;
var checkNumbers = [];
var calledNumbers = [];

// function to get player name
function getPlayerName() {
  var playerName = prompt("Please enter your name.");
  document.getElementById("playersName").innerHTML =
    "<p>" + playerName + "'s Card</p>";
}
getPlayerName();

// function to generate player card without repeat numbers

function generateCard() {
  // Declare Variables
  var playerCard = [];
  var i = 0;
  var j = 0;
  var k = 0;
  var l = 0;
  var m = 0;
  var ranNum = 0;
  while (i < 5) {
    ranNum = Math.floor(Math.random() * 15) + 1;
    if (playerCard.includes(ranNum)) {
      i = i;
    } else {
      playerCard.push(ranNum);
      i++;
    }
  }
  while (j < 5) {
    ranNum = Math.floor(Math.random() * 15) + 16;
    if (playerCard.includes(ranNum)) {
      j = j;
    } else {
      playerCard.push(ranNum);
      j++;
    }
  }
  while (k < 4) {
    ranNum = Math.floor(Math.random() * 15) + 31;
    if (playerCard.includes(ranNum)) {
      k = k;
    } else {
      playerCard.push(ranNum);
      k++;
    }
  }
  while (l < 5) {
    ranNum = Math.floor(Math.random() * 15) + 46;
    if (playerCard.includes(ranNum)) {
      l = l;
    } else {
      playerCard.push(ranNum);
      l++;
    }
  }
  while (m < 5) {
    ranNum = Math.floor(Math.random() * 15) + 61;
    if (playerCard.includes(ranNum)) {
      m = m;
    } else {
      playerCard.push(ranNum);
      m++;
    }
  }

  for (var n = 1; n < 25; n++) {
    var currentSq = "sq" + n;
    var currentVal = n - 1;
    document.getElementById(currentSq).innerHTML = playerCard[currentVal];
  }
}
generateCard();

// function to generate called numbers
function generateNumbers() {
  // Declare Variables
  var c = 0;
  var currentNum = 0;
  var callNum = 0;
  // var calledNumbers = [];

  // loop to reset called numbers style
  for (var a = 1; a <= 75; a++) {
    var selectSq = "num" + a;
    document.getElementById(selectSq).style.backgroundColor = "rgb(34, 34, 34)";
    document.getElementById(selectSq).style.color = "rgb(235, 38, 129)";
    document.getElementById("currentNumber").innerHTML = "&nbsp;";
  }

  // generate called numbers array
  while (c < 75) {
    callNum = Math.floor(Math.random() * 75 + 1);
    if (calledNumbers.includes(callNum)) {
      c = c;
    } else {
      calledNumbers.push(callNum);
      c++;
    }
  }

  // loops through called numbers array and displays them on delay

  var b = 0;

  function myLoop() {
    setTimeout(function () {
      currentNum = calledNumbers[b];
      if (currentNum <= 15) {
        document.getElementById("currentNumber").innerHTML = "B" + currentNum;
      } else if (currentNum > 15 && currentNum <= 30) {
        document.getElementById("currentNumber").innerHTML = "I" + currentNum;
      } else if (currentNum > 30 && currentNum <= 45) {
        document.getElementById("currentNumber").innerHTML = "N" + currentNum;
      } else if (currentNum > 45 && currentNum <= 60) {
        document.getElementById("currentNumber").innerHTML = "G" + currentNum;
      } else {
        document.getElementById("currentNumber").innerHTML = "O" + currentNum;
      }
      var callsq = "num" + currentNum;
      document.getElementById(callsq).style.backgroundColor =
        "rgb(235, 38, 129)";
      document.getElementById(callsq).style.color = "rgb(34, 34, 34)";
      checkNumbers.push(currentNum);
      b++;
      if (b < 75 && winBingo === false) {
        myLoop();
      }
    }, 7000);
  }
  myLoop();
}
generateNumbers();

// function to call bingo
function bingo() {
  // converts player numbers to Number value to check agains array
  var val1 = Number(document.getElementById("sq1").innerHTML);
  var val2 = Number(document.getElementById("sq2").innerHTML);
  var val3 = Number(document.getElementById("sq3").innerHTML);
  var val4 = Number(document.getElementById("sq4").innerHTML);
  var val5 = Number(document.getElementById("sq5").innerHTML);
  var val6 = Number(document.getElementById("sq6").innerHTML);
  var val7 = Number(document.getElementById("sq7").innerHTML);
  var val8 = Number(document.getElementById("sq8").innerHTML);
  var val9 = Number(document.getElementById("sq9").innerHTML);
  var val10 = Number(document.getElementById("sq10").innerHTML);
  var val11 = Number(document.getElementById("sq11").innerHTML);
  var val12 = Number(document.getElementById("sq12").innerHTML);
  var val13 = Number(document.getElementById("sq13").innerHTML);
  var val14 = Number(document.getElementById("sq14").innerHTML);
  var val15 = Number(document.getElementById("sq15").innerHTML);
  var val16 = Number(document.getElementById("sq16").innerHTML);
  var val17 = Number(document.getElementById("sq17").innerHTML);
  var val18 = Number(document.getElementById("sq18").innerHTML);
  var val19 = Number(document.getElementById("sq19").innerHTML);
  var val20 = Number(document.getElementById("sq20").innerHTML);
  var val21 = Number(document.getElementById("sq21").innerHTML);
  var val22 = Number(document.getElementById("sq22").innerHTML);
  var val23 = Number(document.getElementById("sq23").innerHTML);
  var val24 = Number(document.getElementById("sq24").innerHTML);
// checks winning patterns
  if (
    (checkNumbers.includes(val1) &&
      checkNumbers.includes(val6) &&
      checkNumbers.includes(val11) &&
      checkNumbers.includes(val15) &&
      checkNumbers.includes(val20)) ||
    (checkNumbers.includes(val2) &&
      checkNumbers.includes(val7) &&
      checkNumbers.includes(val12) &&
      checkNumbers.includes(val16) &&
      checkNumbers.includes(val21)) ||
    (checkNumbers.includes(val3) &&
      checkNumbers.includes(val8) &&
      checkNumbers.includes(val17) &&
      checkNumbers.includes(val22)) ||
    (checkNumbers.includes(val4) &&
      checkNumbers.includes(val9) &&
      checkNumbers.includes(val13) &&
      checkNumbers.includes(val18) &&
      checkNumbers.includes(val23)) ||
    (checkNumbers.includes(val5) &&
      checkNumbers.includes(val10) &&
      checkNumbers.includes(val14) &&
      checkNumbers.includes(val19) &&
      checkNumbers.includes(val24)) ||
    (checkNumbers.includes(val1) &&
      checkNumbers.includes(val2) &&
      checkNumbers.includes(val3) &&
      checkNumbers.includes(val4) &&
      checkNumbers.includes(val5)) ||
    (checkNumbers.includes(val6) &&
      checkNumbers.includes(val7) &&
      checkNumbers.includes(val8) &&
      checkNumbers.includes(val9) &&
      checkNumbers.includes(val10)) ||
    (checkNumbers.includes(val11) &&
      checkNumbers.includes(val12) &&
      checkNumbers.includes(val13) &&
      checkNumbers.includes(val14)) ||
    (checkNumbers.includes(val15) &&
      checkNumbers.includes(val16) &&
      checkNumbers.includes(val17) &&
      checkNumbers.includes(val18) &&
      checkNumbers.includes(val19)) ||
    (checkNumbers.includes(val20) &&
      checkNumbers.includes(val21) &&
      checkNumbers.includes(val22) &&
      checkNumbers.includes(val23) &&
      checkNumbers.includes(val24)) ||
    (checkNumbers.includes(val1) &&
      checkNumbers.includes(val6) &&
      checkNumbers.includes(val11) &&
      checkNumbers.includes(val15) &&
      checkNumbers.includes(val20)) ||
    (checkNumbers.includes(val5) &&
      checkNumbers.includes(val9) &&
      checkNumbers.includes(val16) &&
      checkNumbers.includes(val20)) ||
    (checkNumbers.includes(val1) &&
      checkNumbers.includes(val7) &&
      checkNumbers.includes(val18) &&
      checkNumbers.includes(val24))
  ) {
    winBingo = true;
    alert("Congratulations! You won!");
  } else {
    alert("That is not a valid bingo!");
  }
}

// functions to daub card
function dauber1() {
  var element = document.getElementById("sq1");
  element.classList.toggle("daubed");
}
function dauber2() {
  var element = document.getElementById("sq2");
  element.classList.toggle("daubed");
}
function dauber3() {
  var element = document.getElementById("sq3");
  element.classList.toggle("daubed");
}
function dauber4() {
  var element = document.getElementById("sq4");
  element.classList.toggle("daubed");
}
function dauber5() {
  var element = document.getElementById("sq5");
  element.classList.toggle("daubed");
}
function dauber6() {
  var element = document.getElementById("sq6");
  element.classList.toggle("daubed");
}
function dauber7() {
  var element = document.getElementById("sq7");
  element.classList.toggle("daubed");
}
function dauber8() {
  var element = document.getElementById("sq8");
  element.classList.toggle("daubed");
}
function dauber9() {
  var element = document.getElementById("sq9");
  element.classList.toggle("daubed");
}
function dauber10() {
  var element = document.getElementById("sq10");
  element.classList.toggle("daubed");
}
function dauber11() {
  var element = document.getElementById("sq11");
  element.classList.toggle("daubed");
}
function dauber12() {
  var element = document.getElementById("sq12");
  element.classList.toggle("daubed");
}
function dauber13() {
  var element = document.getElementById("sq13");
  element.classList.toggle("daubed");
}
function dauber14() {
  var element = document.getElementById("sq14");
  element.classList.toggle("daubed");
}
function dauber15() {
  var element = document.getElementById("sq15");
  element.classList.toggle("daubed");
}
function dauber16() {
  var element = document.getElementById("sq16");
  element.classList.toggle("daubed");
}
function dauber17() {
  var element = document.getElementById("sq17");
  element.classList.toggle("daubed");
}
function dauber18() {
  var element = document.getElementById("sq18");
  element.classList.toggle("daubed");
}
function dauber19() {
  var element = document.getElementById("sq19");
  element.classList.toggle("daubed");
}
function dauber20() {
  var element = document.getElementById("sq20");
  element.classList.toggle("daubed");
}
function dauber21() {
  var element = document.getElementById("sq1");
  element.classList.toggle("daubed");
}
function dauber21() {
  var element = document.getElementById("sq21");
  element.classList.toggle("daubed");
}
function dauber22() {
  var element = document.getElementById("sq22");
  element.classList.toggle("daubed");
}
function dauber23() {
  var element = document.getElementById("sq23");
  element.classList.toggle("daubed");
}
function dauber24() {
  var element = document.getElementById("sq24");
  element.classList.toggle("daubed");
}
