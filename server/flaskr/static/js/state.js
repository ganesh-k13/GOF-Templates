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

    $("#funcDeclWrapperRow").on('click', '.addParameterTypeBtn', function(event) {
        console.log("addParameterTypeBtn");
        $("#paramTypeDiv").append("\
            <div class='input-group'>\
                <input type='text' class='form-control' placeholder='Parameter Type' aria-label='Parameter Type' aria-describedby='basic-addon2'>\
                <div class='input-group-append'>\
                    <button class='btn btn-outline-secondary addParameterTypeBtn' type='button' data-toggle='tooltip' data-placement='top' title='Add another parameter type'>+</button>\
                    <button class='btn btn-outline-secondary delParameterTypeBtn' type='button' data-toggle='tooltip' data-placement='top' title='Delete this parameter type'>-</button>\
                </div>\
            </div>\
        ");
    });

    $("#funcDeclWrapperRow").on('click', '.delParameterTypeBtn', function(event) {
        console.log("delParameterTypeBtn");
        $("")
    });
    
    $("#funcDeclWrapperRow").on('click', '.addParameterNameBtn', function(event) {
        console.log("addParameterNameBtn");
        $("#paramNameDiv").append("\
            <div class='input-group'>\
                <input type='text' class='form-control' placeholder='Parameter Name' aria-label='Parameter Name' aria-describedby='basic-addon2'>\
                <div class='input-group-append'>\
                    <button class='btn btn-outline-secondary addParameterNameBtn' type='button' data-toggle='tooltip' data-placement='top' title='Add another parameter name'>+</button>\
                    <button class='btn btn-outline-secondary delParameterNameBtn' type='button' data-toggle='tooltip' data-placement='top' title='Delete this parameter name'>-</button>\
                </div>\
            </div>\
        ");
    });
    
    $("#funcDeclWrapperRow").on('click', '.delParameterNameBtn', function(event) {
        console.log("delParameterNameBtn");
        $("")
    });

});