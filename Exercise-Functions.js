// GLOBAL VARIABLES:

DistList = ["mi", "km"]
LiftList = ["lbs", "kg"]
TimeList = ["min", "hr"]

// FUNCTIONS:
// Goals_Create.html requires text substitution

function goaltype_pick(clicked_id) {
    document.getElementById("goals_type").innerHTML = clicked_id;
}

function goalunit_pick(clicked_metic_unit) {
    // if (document.getElementById("goals_type").innerHTML == "Cycling") {
    // if (clicked_metric_unit.indexOf(DistList) == True) {
    document.getElementById("goals_unit").innerHTML = clicked_metic_unit;
    // }
    // }
    // && clicked_metric_unit.indexOf(DistList) == True) {
}
