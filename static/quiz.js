var answers = ["B", "A", "C", "B", "C", "A", "B", "E"];
var full_answers = [
    "Tom Hanks (narrating <em>The Dutch House</em> by Ann Patchett",
    "One Narrator (Stephen Fry's narration of <em>Harry Potter and the Goblet of Fire</em>)",
    "Eldery (although Tim Jerome was only 61 when he recorded <em>Gilead</em> by Marilynne Robinson)",
    "Middle aged (Jonathan Davis narrated Neal Stephenson's <em>Snow Crash</em> early in his career, but he doesn't report his age or birthdate in his profile)",
    "Literature/fiction (<em>Every Boss Has A Soft Spot</em> by Danielle May)",
    "U.S. (It's actually Ethan Hawke, born in Fort Worth, TX, narrating <em>The Dharma Bums</em> by Jack Kerouac",
    "Katherine Kellgren was born in the U.S> but went to school in England. Here she's narrating <em>Ramses the Damned</em> by Anne Rice and Christopher Rice",
    "<em>Every Boss Has A Soft Spot</em> by Danielle May has a voice synthesized narrator!"
    ];
var tot = answers.length;

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
    var report = "<hr/>Your score is " + results[0] + "% <br/><br/>" 
    for (var i = 0; i < results[1].length; i++) {
        number = i+1;
        answer = full_answers[i];
        report += number + ". " + results[1][i] + " ... " + answer + "<br/> ";
    }
    report += "<hr/>"
    document.getElementById("myresults").innerHTML =
        report;
}
