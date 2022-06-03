$(document).ready(function() {
  $("form#languageSuggester").submit(function(event) {
    event.preventDefault();
    const question = $("input#name").val();
    const question1 = $("select#question1").val();
    const question2 = $("select#question2").val();
    const question3 = $("select#question3").val();
    const question4 = $("select#question4").val();
    const question5 = $("select#question5").val();

    $(".name").text(question);
    
    if (question1 === "no" && question2 === "no" && question3 === "no" && question4 === "no" && question5 === "no" || question1 === "no" && question2 === "no" && question3 === "no" && question4 === "no"&& question5 === "yes") {
      $("#javascriptResult").show();
    } else if (question1 === "yes" && question2 === "no" && question3 === "no" && question4 === "no" && question5 === "no" || question1 === "yes" && question2 === "no" && question3 === "no" && question4 === "no" && question5 === "yes") {
      $("#cSharpResult").show();
    } else if (question1 === "yes" && question2 === "yes" && question3 === "yes" && question4 === "no" && question5 === "no" || question1 === "yes" && question2 === "yes" && question3 === "yes" && question4 === "no" && question5 === "yes") {
      $("#reactResult").show();
    } else if (question1 === "yes" && question2 === "yes" && question3 === "no" && question4 === "yes" && question5 === "no" || question1 === "yes" && question2 === "yes" && question3 === "no" && question4 === "yes" && question5 === "yes") {
      $("#rubyResult").show();
    } else {
      $("#epicodusResult").show();
    }
  });
  function resetDropDown () {
    $("#question1").prop("selectedIndex",0);
    $("#question2").prop("selectedIndex",0);
    $("#question3").prop("selectedIndex",0);
    $("#question4").prop("selectedIndex",0);
    $("#question5").prop("selectedIndex",0);
  }
  $("#clickable1").click(function() {
    $("#javascriptResult-show").toggle();
    resetDropDown();
  })
  $("#clickable2").click(function() {
    $("#cSharpResult-show").toggle();
    resetDropDown();
  })
  $("#clickable3").click(function() {
    $("#reactResult-show").toggle();
    resetDropDown();
  })
  $("#clickable4").click(function() {
    $("#rubyResult-show").toggle();
    resetDropDown();
  })
  $("#clickable5").click(function() {
    $("#epicodusResult-show").toggle();
    resetDropDown();
  })
});