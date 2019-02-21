var add = function(question1, question2) {
  return question1 + question2;
};

$(document).ready(function(){
  $("form#quiz").submit(function(event){
    var question1 = parseInt($("input:radio[name=question1]:checked").val());
    var question2 = parseInt($("input:radio[name=question2]:checked").val());
    var result = add(question1, question2);
    console.log(result + " outside branching");

    if (result <= 2) {
      console.log(result);
      $("#character").text("You are a Bella.");
    } else if (result >= 3) {
      $("#character").text("You are an Edward.");
    }


    event.preventDefault();
  })
});
