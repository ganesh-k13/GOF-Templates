$(document).ready(function() {

    // START: Add a state functionality.
    $("#stateListColDiv").on("click", ".addStateBtn", function(event) {
        console.log("add clicked",$(this));
        $("#stateListColDiv").append("\
            <div class='input-group repeatableStateListGroup'>\
                <input type='text' class='form-control validName' placeholder='State Name' aria-label='State Name' aria-describedby='basic-addon2'>\
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
    // END: Add a state functionality.

    // START: Delete a state functionality.
    $("#stateListColDiv").on("click", ".delStateBtn", function(event) {
        console.log("del clicked",$(this));
        var eleToBeDeleted = $(this).parents(".repeatableStateListGroup");
        console.log(eleToBeDeleted);
        eleToBeDeleted.remove();
    });
    // END: Delete a state functionality.

    // START: Add a paramter functionality.
    $("#funcDeclWrapperRow").on('click', '.addParameterBtn', function(event) {
        console.log("addParameterTypeBtn");
        var eleToBeAddedTo = $(this).parents(".paramDiv");
        eleToBeAddedTo.append("\
            <div class='input-group repeatableParamListGroup'>\
                <input type='text' class='form-control validName' placeholder='Parameter Type' aria-label='Parameter Type' aria-describedby='basic-addon2'>\
                <input type='text' class='form-control validName' placeholder='Parameter Name' aria-label='Parameter Name' aria-describedby='basic-addon2'>\
                <div class='input-group-append'>\
                    <button class='btn btn-outline-secondary addParameterBtn' type='button' data-toggle='tooltip' data-placement='top' title='Add another parameter'>+</button>\
                    <button class='btn btn-outline-secondary delParameterBtn' type='button' data-toggle='tooltip' data-placement='top' title='Delete this parameter'>-</button>\
                </div>\
            </div>\
        ");
    });
    // END: Add a paramter functionality.

    // START: Delete a paramter functionality.
    $("#funcDeclWrapperRow").on('click', '.delParameterBtn', function(event) {
        console.log("delParameterTypeBtn");
        var eleToBeDeleted = $(this).parents(".repeatableParamListGroup");
        console.log(eleToBeDeleted);
        eleToBeDeleted.remove();        
    });
    // END: Delete a paramter functionality.

    // START: Add a function declaration functionality.
    $("#funcDeclWrapperRow").on('click', '.addFuncDeclBtn', function(event) {
        console.log("addParameterTypeBtn");
        $("#funcDeclDivRow").append("\
            <div class='col-xl-12 col-lg-12 col-md-12 col-12 customBorder funcToDelete noPadColumn'>\
                <div class='container-fluid repeatableFuncDeclList'>\
                    <div class='row'>\
                        <div class='col-xl-2 col-lg-2 col-md-2 col-2'>\
                            <input type='text' class='form-control validName' placeholder='Return Type' aria-label='Return Type' aria-describedby='basic-addon3'>\
                        </div>\
                        <div class='col-xl-2 col-lg-2 col-md-2 col-2'>\
                            <input type='text' class='form-control validName' placeholder='Function Name' aria-label='Function Name' aria-describedby='basic-addon4'>\
                        </div>\
                        <div class='col-xl-6 col-lg-6 col-md-6 col-6 paramDiv'>\
                            <div class='input-group repeatableParamListGroup'>\
                                <input type='text' class='form-control validName' placeholder='Parameter Type' aria-label='Parameter Type' aria-describedby='basic-addon2'>\
                                <input type='text' class='form-control validName' placeholder='Parameter Name' aria-label='Parameter Name' aria-describedby='basic-addon2'>\
                                <div class='input-group-append'>\
                                    <button class='btn btn-outline-secondary addParameterBtn' type='button' data-toggle='tooltip' data-placement='top' title='Add another parameter'>+</button>\
                                    <button class='btn btn-outline-secondary delParameterBtn' type='button' data-toggle='tooltip' data-placement='top' title='Delete this parameter' style='pointer-events: none;' disabled>-</button>\
                                </div>\
                            </div>\
                        </div>\
                        <div class='col-xl-2 col-lg-2 col-md-2 col-2'>\
                            <div class='btn-toolbar' role='toolbar' aria-label='Toolbar with button groups'>\
                                <div class='btn-group mr-2' role='group' aria-label='First group'>\
                                    <button class='btn btn-secondary addFuncDeclBtn' type='button' data-toggle='tooltip' data-placement='top' title='Add another function'>Add</button>\
                                    <button class='btn btn-danger delFuncDeclBtn' type='button' data-toggle='tooltip' data-placement='top' title='Delete this function'>Remove</button>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        ");
    });
    // END: Add a function declaration functionality.

    // START: Delete a function functionality.
    $("#funcDeclWrapperRow").on('click', '.delFuncDeclBtn', function(event) {
        console.log("delParameterTypeBtn");
        var eleToBeDeleted = $(this).parents(".funcToDelete");
        console.log(eleToBeDeleted);
        eleToBeDeleted.remove();        
    });    
    // END: Delete a function functionality.
    
    // START: Cosmetic change to display file type selected in the dropdown.
    $(".fileType").on('click', function(event) {
        $("#placeholderChange").text($(this).text());
    });
    // END: Cosmetic change to display file type selected in the dropdown.

    // START : Code Download Functionality (includes form submission without forms per se)
    $("#codeDownload").on('click', function(event) {
        // 0. The JSON required by render.py is mentioned
        // 1. Get all variable values
        // 2. Organise them in the inputData JS Object
        // 3. Send a POST to necessary URL
        // 4. Get back file.

        // Step 0: The JSON required by render.py is mentioned
        // {
        //     'pattern': 'state',
        //     'states':[
        //         {'name': 'S1'},
        //         {'name': 'S2'},
        //         {'name': 'S3'}
        //     ],
        //     'functions':[
        //         {
        //             'name': 'f1', 
        //             'param_types':['int', 'float'], 
        //             'param_names':['i1', 'f1'], 
        //             'return': 'void'
        //         },
        //         {
        //             'name': 'f2',
        //             'param_types':['int', 'double'],
        //             'param_names':['i2', 'd2'],
        //             'return': 'double'
        //         }
        //     ]
        // }

        // Step 1: Get All variables (haha, seems so simple :) )

        function getStatesList(){
            var statesList = [];
            $(".validName").each(function(index, el) {
                statesList.push($(this).val());
            });
            return statesList;
        }
        console.log(getStatesList());
    });

    // END : Code Download Functionality (includes form submission without forms per se)
    
    // START : State name validation
    function matchExact(r, str) {
       var match = str.match(r);
       return match != null && str == match[0];
    }
    $(".entireStateWrapper").on("input",".validName", function(event) {
       var res = matchExact(/[A-Za-z_]+[A-Za-z0-9_]*/g,$(this).val()); //basically it's a valid variable in a language like C++
       if(res==false){
            console.log("here");
            $(this).css('color', 'red');
       }
       else{
            $(this).css('color', 'green');
       }
    });

    $(".entireStateWrapper").on("blur",".validName", function(event) {
        $(this).css('color', 'black');
    });
    // END : State name validation

});