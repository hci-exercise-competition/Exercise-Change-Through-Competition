// GLOBAL VARIABLES:

DistList = ["mi", "km", "min", "hr"]
LiftList = ["lbs", "kg", "min", "hr"]
TimeList = ["min", "hr"]

// FUNCTIONS:
// Goals_Create.html requires text substitution

// SHOW/HIDE GOAL TYPES LIST
function butt_drop_type() {
    // show/hide list
    document.getElementById("goals_type2").classList.toggle("show");
}

// GOAL TYPES
function goaltype_pick(id) {
    // show/hide list
    document.getElementById("goals_type2").classList.toggle("show");
    // change name
    document.getElementById("goals_type").innerHTML =
        document.getElementById(id).innerHTML;
    // reset units
    document.getElementById("goals_unit").innerHTML = "Units";
    // reset dates ** not necessary **
    // document.getElementById("goals_dueM").innerHTML = "MM";
    // document.getElementById("goals_dueD").innerHTML = "DD";
    // document.getElementById("goals_dueY").innerHTML = "YYYY";
}

// GOAL METRIC
function empty_field(id) {
    // hide placeholder
    document.getElementById(id).placeholder = "";
}

// GOAL UNITS FIRST CLICK
function butt_drop_units(id) {
    // show/hide list
    document.getElementById(id + String(2)).classList.toggle("show");

    if (document.getElementById("goals_type").innerHTML == "Cycling") {
        // change color of other units
        document.getElementById("lbs").style.color = 'rgb(200, 200, 200)';
        document.getElementById("kg").style.color = 'rgb(200, 200, 200)';
        document.getElementById("mi").style.color = 'rgb(0, 0, 0)';
        document.getElementById("km").style.color = 'rgb(0, 0, 0)';
        document.getElementById("min").style.color = 'rgb(0, 0, 0)';
        document.getElementById("hr").style.color = 'rgb(0, 0, 0)';
    }
    if (document.getElementById("goals_type").innerHTML == "Running") {
        document.getElementById("lbs").style.color = 'rgb(200, 200, 200)';
        document.getElementById("kg").style.color = 'rgb(200, 200, 200)';
        document.getElementById("mi").style.color = 'rgb(0, 0, 0)';
        document.getElementById("km").style.color = 'rgb(0, 0, 0)';
        document.getElementById("min").style.color = 'rgb(0, 0, 0)';
        document.getElementById("hr").style.color = 'rgb(0, 0, 0)';
    }
    if (document.getElementById("goals_type").innerHTML == "Weight Lifting") {
        document.getElementById("lbs").style.color = 'rgb(0, 0, 0)';
        document.getElementById("kg").style.color = 'rgb(0, 0, 0)';
        document.getElementById("mi").style.color = 'rgb(200, 200, 200)';
        document.getElementById("km").style.color = 'rgb(200, 200, 200)';
        document.getElementById("min").style.color = 'rgb(0, 0, 0)';
        document.getElementById("hr").style.color = 'rgb(0, 0, 0)';
    }
    if (document.getElementById("goals_type").innerHTML == "Swimming") {
        document.getElementById("lbs").style.color = 'rgb(200, 200, 200)';
        document.getElementById("kg").style.color = 'rgb(200, 200, 200)';
        document.getElementById("mi").style.color = 'rgb(0, 0, 0)';
        document.getElementById("km").style.color = 'rgb(0, 0, 0)';
        document.getElementById("min").style.color = 'rgb(0, 0, 0)';
        document.getElementById("hr").style.color = 'rgb(0, 0, 0)';
    }
    if (document.getElementById("goals_type").innerHTML == "Frequency") {
        document.getElementById("lbs").style.color = 'rgb(200, 200, 200)';
        document.getElementById("kg").style.color = 'rgb(200, 200, 200)';
        document.getElementById("mi").style.color = 'rgb(200, 200, 200)';
        document.getElementById("km").style.color = 'rgb(200, 200, 200)';
        document.getElementById("min").style.color = 'rgb(0, 0, 0)';
        document.getElementById("hr").style.color = 'rgb(0, 0, 0)';
    }
    if (document.getElementById("goals_type").innerHTML == "Goal Type") {
        document.getElementById("lbs").style.color = 'rgb(200, 200, 200)';
        document.getElementById("kg").style.color = 'rgb(200, 200, 200)';
        document.getElementById("mi").style.color = 'rgb(200, 200, 200)';
        document.getElementById("km").style.color = 'rgb(200, 200, 200)';
        document.getElementById("min").style.color = 'rgb(200, 200, 200)';
        document.getElementById("hr").style.color = 'rgb(200, 200, 200)';
    }
}

// GOAL UNITS THEMSELVES
function goalunit_pick(id) {
    if (document.getElementById("goals_type").innerHTML == "Cycling"
        && DistList.indexOf(id) >= 0) {
        // change name to id
        document.getElementById("goals_unit").innerHTML =
            document.getElementById(id).innerHTML;
        // hide list
        document.getElementById("goals_unit2").classList.toggle("show");
    }
    if (document.getElementById("goals_type").innerHTML == "Running"
        && DistList.indexOf(id) >= 0) {
        document.getElementById("goals_unit").innerHTML =
            document.getElementById(id).innerHTML;
        document.getElementById("goals_unit2").classList.toggle("show");
    }
    if (document.getElementById("goals_type").innerHTML == "Weight Lifting"
        && LiftList.indexOf(id) >= 0) {
        document.getElementById("goals_unit").innerHTML =
            document.getElementById(id).innerHTML;
        document.getElementById("goals_unit2").classList.toggle("show");
    }
    if (document.getElementById("goals_type").innerHTML == "Swimming"
        && DistList.indexOf(id) >= 0) {
        document.getElementById("goals_unit").innerHTML =
            document.getElementById(id).innerHTML;
        document.getElementById("goals_unit2").classList.toggle("show");
    }
    if (document.getElementById("goals_type").innerHTML == "Frequency"
        && TimeList.indexOf(id) >= 0) {
        document.getElementById("goals_unit").innerHTML =
            document.getElementById(id).innerHTML;
        document.getElementById("goals_unit2").classList.toggle("show");
    }

    // && id.indexOf(DistList) == True) {
}

// MONTH
function butt_dateM(id) {
    // show/hide list
    document.getElementById(id + String(2)).classList.toggle("show");
}
function dateM_pick(id) {
    // change name to id
    document.getElementById("goals_dueM").innerHTML =
        document.getElementById(id).innerHTML;
    document.getElementById("goals_dueM2").classList.toggle("show");
}

// DATE
function butt_dateD(id) {
    // show/hide list
    document.getElementById(id + String(2)).classList.toggle("show");
}
function dateD_pick(id) {
    // change name to id
    document.getElementById("goals_dueD").innerHTML =
        document.getElementById(id).innerHTML;
    document.getElementById("goals_dueD2").classList.toggle("show");
}

// YEAR
function butt_dateY(id) {
    // show/hide list
    document.getElementById(id + String(2)).classList.toggle("show");
}
function dateY_pick(id) {
    // change name to id
    document.getElementById("goals_dueY").innerHTML =
        document.getElementById(id).innerHTML;
    document.getElementById("goals_dueY2").classList.toggle("show");
}

// CAREFUL ERRORS!
// SET GOAL
function setGoal() {
    if (document.getElementById("goals_type").innerHTML != "Goal Type" &&
        document.getElementById("goal_metric").placeholder != "Goal Metric" &&
        document.getElementById("goals_unit").innerHTML != "Units" &&
        document.getElementById("goals_dueM").innerHTML != "MM" &&
        document.getElementById("goals_dueD").innerHTML != "DD" &&
        document.getElementById("goals_dueY").innerHTML.link != "YYYY") {
        // GO TO GOALS SITE
        // ??? how ???
    }
}