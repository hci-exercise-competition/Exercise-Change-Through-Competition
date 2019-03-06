// GLOBAL VARIABLES:

DistList = ["mi", "km", "min", "hr"]
LiftList = ["lbs", "kg", "min", "hr"]
TimeList = ["min", "hr"]
TYPE_TOGGLE = false
UNIT_TOGGLE = false
MM_TOGGLE = false
DD_TOGGLE = false
YY_TOGGLE = false

// FUNCTIONS:
// Goals_Create.html requires text substitution

// SHOW/HIDE Lists when the fields are clicked
function toggle_drops(id) {
    // If Type is selected, toggle it, otherwise hide it
    if (id == "goals_type"){
        if (TYPE_TOGGLE == false) {
            document.getElementById("goals_type2").classList.toggle("show");
            TYPE_TOGGLE = true
        } else {
            document.getElementById("goals_type2").classList.toggle("show");
            TYPE_TOGGLE = false
        }
    } else{
        if (TYPE_TOGGLE == true){
            document.getElementById("goals_type2").classList.toggle("show");
            TYPE_TOGGLE = false
        }
    }
    // If Unit is selected, toggle it, otherwise hide it
    if (id == "goals_unit"){
        if (UNIT_TOGGLE == false) {
            document.getElementById("goals_unit2").classList.toggle("show");
            UNIT_TOGGLE = true
        } else {
            document.getElementById("goals_unit2").classList.toggle("show");
            UNIT_TOGGLE = false
        }
    } else{
        if (UNIT_TOGGLE == true){
            document.getElementById("goals_unit2").classList.toggle("show");
            UNIT_TOGGLE = false
        }
    }
    // If Month is selected, toggle it, otherwise hide it
    if (id == "goals_dueM"){
        if (MM_TOGGLE == false) {
            document.getElementById("goals_dueM2").classList.toggle("show");
            MM_TOGGLE = true
        } else {
            document.getElementById("goals_dueM2").classList.toggle("show");
            MM_TOGGLE = false
        }
    } else{
        if (MM_TOGGLE == true){
            document.getElementById("goals_dueM2").classList.toggle("show");
            MM_TOGGLE = false
        }
    }
    // If Day is selected, toggle it, otherwise hide it
    if (id == "goals_dueD"){
        if (DD_TOGGLE == false) {
            document.getElementById("goals_dueD2").classList.toggle("show");
            DD_TOGGLE = true
        } else {
            document.getElementById("goals_dueD2").classList.toggle("show");
            DD_TOGGLE = false
        }
    } else{
        if (DD_TOGGLE == true){
            document.getElementById("goals_dueD2").classList.toggle("show");
            DD_TOGGLE = false
        }
    }
    // If Year is selected, toggle it, otherwise hide it
    if (id == "goals_dueY"){
        if (YY_TOGGLE == false) {
            document.getElementById("goals_dueY2").classList.toggle("show");
            YY_TOGGLE = true
        } else {
            document.getElementById("goals_dueY2").classList.toggle("show");
            YY_TOGGLE = false
        }
    } else{
        if (YY_TOGGLE == true){
            document.getElementById("goals_dueY2").classList.toggle("show");
            YY_TOGGLE = false
        }
    }
}

// GOAL TYPES
function goaltype_pick(id) {
    // hide dropdown
    document.getElementById("goals_type2").classList.toggle("show");
    TYPE_TOGGLE = false
    // change name
    document.getElementById("goals_type").innerHTML =
        document.getElementById(id).innerHTML;
    // not yet
    // document.getElementById("goals_metric").placeholder = "Enter: Metric";
    // reset units
    document.getElementById("goals_unit").innerHTML = "Units";
    // if (document.getElementById("goals_unit2").classList.display == "block") {
    //     document.getElementById("goals_unit2").classList.toggle("show");
    // }
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
        UNIT_TOGGLE = false
    }
    if (document.getElementById("goals_type").innerHTML == "Running"
        && DistList.indexOf(id) >= 0) {
        document.getElementById("goals_unit").innerHTML =
            document.getElementById(id).innerHTML;
        document.getElementById("goals_unit2").classList.toggle("show");
        UNIT_TOGGLE = false
    }
    if (document.getElementById("goals_type").innerHTML == "Weight Lifting"
        && LiftList.indexOf(id) >= 0) {
        document.getElementById("goals_unit").innerHTML =
            document.getElementById(id).innerHTML;
        document.getElementById("goals_unit2").classList.toggle("show");
        UNIT_TOGGLE = false
    }
    if (document.getElementById("goals_type").innerHTML == "Swimming"
        && DistList.indexOf(id) >= 0) {
        document.getElementById("goals_unit").innerHTML =
            document.getElementById(id).innerHTML;
        document.getElementById("goals_unit2").classList.toggle("show");
        UNIT_TOGGLE = false
    }
    if (document.getElementById("goals_type").innerHTML == "Frequency"
        && TimeList.indexOf(id) >= 0) {
        document.getElementById("goals_unit").innerHTML =
            document.getElementById(id).innerHTML;
        document.getElementById("goals_unit2").classList.toggle("show");
        UNIT_TOGGLE = false
    }

    // && id.indexOf(DistList) == True) {
}

// MONTH
function dateM_pick(id) {
    // change name to id
    document.getElementById("goals_dueM").innerHTML =
    document.getElementById(id).innerHTML;
    document.getElementById("goals_dueM2").classList.toggle("show");
    MM_TOGGLE = false
}

// DATE
function dateD_pick(id) {
    // change name to id
    document.getElementById("goals_dueD").innerHTML =
    document.getElementById(id).innerHTML;
    document.getElementById("goals_dueD2").classList.toggle("show");
    DD_TOGGLE = false
}

// YEAR
function dateY_pick(id) {
    // change name to id
    document.getElementById("goals_dueY").innerHTML =
    document.getElementById(id).innerHTML;
    document.getElementById("goals_dueY2").classList.toggle("show");
    YY_TOGGLE = false
}

// CAREFUL ERRORS!
// SET GOAL
function setGoal() {
    if (document.getElementById("goals_type").innerHTML != "Goal Type" &&
        document.getElementById("goals_metric").placeholder != "Goal Metric" &&
        document.getElementById("goals_unit").innerHTML != "Units" &&
        document.getElementById("goals_dueM").innerHTML != "MM" &&
        document.getElementById("goals_dueD").innerHTML != "DD" &&
        document.getElementById("goals_dueY").innerHTML.link != "YYYY") {
        // GO TO GOALS SITE
        // ??? how ???
    }
}