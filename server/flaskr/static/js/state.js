$(document).ready(function() {
    var repeatableGroup = $(".repeatableGroup");

    $("#stateListColDiv").on("click", ".addStateBtn", function(event) {
        console.log("add clicked",$(this));
        $("#stateListColDiv").append("\
            <div class='input-group repeatableGroup'>\
                <input type='text' class='form-control' placeholder='State Name' aria-label='State Name' aria-describedby='basic-addon2'>\
                <div class='input-group-append'>\
                    <button class='btn btn-outline-secondary addStateBtn' type='button' data-toggle='tooltip' data-placement='top' title='Add another state'>\
                        +\
                    </button>\
                    <button class='btn btn-outline-secondary delStateBtn' type='button' data-toggle='tooltip' data-placement='top' title='Delete this state'>\
                        -\
                    </button>\
                </div>\
            </div>\
        ");
    });

    $("#stateListColDiv").on("click", ".delStateBtn", function(event) {
        console.log("del clicked",$(this));
        var eleToBeDeleted = $(this).parents(".repeatableGroup");
        console.log(eleToBeDeleted);
        eleToBeDeleted.remove();
    });
});