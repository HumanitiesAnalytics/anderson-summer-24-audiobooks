var answers = ["B", "A", "C", "B", "C", "A", "B", "E"],
    tot = answers.length;
function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName);
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value;
}
function getScore() {
    var score = 0;
    var full_results = []
    for (var i = 0; i < tot; i++) {
        if (getCheckedValue("question" + i) === answers[i]) {
            score += 1;
            full_results.push("Correct")
        }
        else {
            full_results.push("Incorrect")
        }
    }
    return [score/tot*100, full_results];
}

function returnScore() {
    results = getScore();
    var report = "Your score is " + results[0] + "% <br/>" 
    for (var i = 0; i < results[1].length; i++) {
        report += results[1][i] + "<br/> ";
    }
    document.getElementById("myresults").innerHTML =
        report;
    // if (getScore() > 2) {
    //    console.log("Bravo");
    // }
}
