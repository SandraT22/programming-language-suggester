$(document).ready(function() {
  $("form#languageSuggester").submit(function(event) {
    event.preventDefault();
    const question1 = $("select#question1").val();
    const question2 = $("select#question2").val();
    const question3 = $("select#question3").val();
    const question4 = $("select#question4").val();
    const question5 = $("select#question5").val();
    
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
  $("#clickable1").click(function() {
    $("#javascriptResult-show").toggle();
    location.reload();
  })
  $("#clickable2").click(function() {
    $("#cSharpResult-show").toggle();
    location.reload();
  })
  $("#clickable3").click(function() {
    $("#reactResult-show").toggle();
    location.reload();
  })
  $("#clickable4").click(function() {
    $("#rubyResult-show").toggle();
    location.reload();
  })
  $("#clickable5").click(function() {
    $("#epicodusResult-show").toggle();
    location.reload();
  })
});