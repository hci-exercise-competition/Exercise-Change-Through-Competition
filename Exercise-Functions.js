// GLOBAL VARIABLES:

DistList = ["mi", "km"]
LiftList = ["lbs", "kg"]
TimeList = ["min", "hr"]

// FUNCTIONS:
// Goals_Create.html requires text substitution

function goaltype_pick(clicked_id) {
    document.getElementById("goals_type").innerHTML = clicked_id;
}

function goalunit_pick(clicked_metric_unit) {
    if (document.getElementById("goals_type").innerHTML == "Cycling"
        && DistList.indexOf(clicked_metric_unit) >= 0) {
        document.getElementById("goals_unit").innerHTML = clicked_metric_unit;
    }
    if (document.getElementById("goals_type").innerHTML == "Running"
        && DistList.indexOf(clicked_metric_unit) >= 0) {
        document.getElementById("goals_unit").innerHTML = clicked_metric_unit;
    }
    if (document.getElementById("goals_type").innerHTML == "Weight Lifting"
        && LiftList.indexOf(clicked_metric_unit) >= 0) {
        document.getElementById("goals_unit").innerHTML = clicked_metric_unit;
    }
    if (document.getElementById("goals_type").innerHTML == "Swimming"
        && DistList.indexOf(clicked_metric_unit) >= 0) {
        document.getElementById("goals_unit").innerHTML = clicked_metric_unit;
    }
    if (document.getElementById("goals_type").innerHTML == "Frequency"
        && TimeList.indexOf(clicked_metric_unit) >= 0) {
        document.getElementById("goals_unit").innerHTML = clicked_metric_unit;
    }

    // && clicked_metric_unit.indexOf(DistList) == True) {
}
