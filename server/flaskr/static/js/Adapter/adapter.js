$(document).ready(function() {
	UploadAdapter.receivedText = UploadAdapter.receivedText.bind(UploadAdapter)
	UploadAdapter.receivedText = function() {
		var data = (JSON.parse(self.fr.result));
		
		if(!Upload.validateJSON("adapter", data)) {
			return;
		}
		
		console.log(data);
		
		// #targetFuncDeclDivRow > div:nth-child(1) > div > div > div.col-xl-6.col-lg-6.col-md-6.col-6.paramDiv > div:nth-child(2) > input.form-control.validName.paramType
		// #targetFuncDeclDivRow > div:nth-child(1) > div > div > div.col-xl-6.col-lg-6.col-md-6.col-6.paramDiv > div:nth-child(1) > div > button.btn.btn-outline-secondary.addTargetParameterBtn
		// For target_functions
		data['target_functions'].forEach(function(target, i) {
			$("#targetFuncDeclDivRow > div:nth-child("+(i+1)+") > div > div > div:nth-child(4) > div > div > button.btn.btn-secondary.addFuncDeclBtn").trigger("click");
			$("#targetFuncDeclDivRow > div:nth-child("+(i+1)+") > div > div > div:nth-child(1) > input").val(target.return)
			$("#targetFuncDeclDivRow > div:nth-child("+(i+1)+") > div > div > div:nth-child(2) > input").val(target.name)
			
			target.param_types.forEach(function(param_type, j) {
				$("#targetFuncDeclDivRow > div:nth-child("+(i+1)+") > div > div > div.col-xl-6.col-lg-6.col-md-6.col-6.paramDiv > div:nth-child("+(j+1)+") > div > button.btn.btn-outline-secondary.addTargetParameterBtn").trigger("click")
				$("#targetFuncDeclDivRow > div:nth-child("+(i+1)+") > div > div > div.col-xl-6.col-lg-6.col-md-6.col-6.paramDiv > div:nth-child("+(j+1)+") > input.form-control.validName.paramType").val(param_type)
				console.log(param_type)
			});
			//#targetFuncDeclDivRow > div:nth-child(1) > div > div > div.col-xl-6.col-lg-6.col-md-6.col-6.paramDiv > div:nth-child(3) > div > button.btn.btn-outline-secondary.delTargetParameterBtn
			$("#targetFuncDeclDivRow > div:nth-child("+(i+1)+") > div > div > div.col-xl-6.col-lg-6.col-md-6.col-6.paramDiv > div:last-child > div > button.btn.btn-outline-secondary.delTargetParameterBtn").trigger("click")
			
			target.param_names.forEach(function(param_name, j) {
				$("#targetFuncDeclDivRow > div:nth-child("+(i+1)+") > div > div > div.col-xl-6.col-lg-6.col-md-6.col-6.paramDiv > div:nth-child("+(j+1)+") > input.form-control.validName.paramName").val(param_name)
			});
			
		});
		$("#targetFuncDeclDivRow > div:last-child > div > div > div:nth-child(4) > div > div > button.btn.btn-danger.delFuncDeclBtn").trigger("click")
		
		data['adaptee_functions'].forEach(function(adaptee, i) {
			$("#adapteeFuncDeclDivRow > div:nth-child("+(i+1)+") > div > div > div:nth-child(4) > div > div > button.btn.btn-secondary.addFuncDeclBtn").trigger("click");
			$("#adapteeFuncDeclDivRow > div:nth-child("+(i+1)+") > div > div > div:nth-child(1) > input").val(adaptee.return)
			$("#adapteeFuncDeclDivRow > div:nth-child("+(i+1)+") > div > div > div:nth-child(2) > input").val(adaptee.name)
			
			adaptee.param_types.forEach(function(param_type, j) {
				$("#adapteeFuncDeclDivRow > div:nth-child("+(i+1)+") > div > div > div.col-xl-6.col-lg-6.col-md-6.col-6.paramDiv > div:nth-child("+(j+1)+") > div > button.btn.btn-outline-secondary.addParameterBtn").trigger("click")
				$("#adapteeFuncDeclDivRow > div:nth-child("+(i+1)+") > div > div > div.col-xl-6.col-lg-6.col-md-6.col-6.paramDiv > div:nth-child("+(j+1)+") > input.form-control.validName.paramType").val(param_type)
				console.log(param_type)
			});
			//#adapteeFuncDeclDivRow > div:nth-child(1) > div > div > div.col-xl-6.col-lg-6.col-md-6.col-6.paramDiv > div:nth-child(3) > div > button.btn.btn-outline-secondary.delTargetParameterBtn
			$("#adapteeFuncDeclDivRow > div:nth-child("+(i+1)+") > div > div > div.col-xl-6.col-lg-6.col-md-6.col-6.paramDiv > div:last-child > div > button.btn.btn-outline-secondary.delParameterBtn").trigger("click")
			
			adaptee.param_names.forEach(function(param_name, j) {
				$("#adapteeFuncDeclDivRow > div:nth-child("+(i+1)+") > div > div > div.col-xl-6.col-lg-6.col-md-6.col-6.paramDiv > div:nth-child("+(j+1)+") > input.form-control.validName.paramName").val(param_name)
			});
			
		});
		$("#adapteeFuncDeclDivRow > div:last-child > div > div > div:nth-child(4) > div > div > button.btn.btn-danger.delFuncDeclBtn").trigger("click")
		
		Upload.validate();
	}
	UploadAdapter.handleFileSelect = UploadAdapter.handleFileSelect.bind(UploadAdapter)
	$("#fileinput").change(UploadAdapter.handleFileSelect);
    // START: Target Class Functions
    // START: Add a paramter functionality.
    $("#targetFuncDeclWrapperRow").on('click', '.addTargetParameterBtn', function(event) {
        console.log("addTargetParameterBtn");
        var eleToBeAddedTo = $(this).parents(".paramDiv");
        eleToBeAddedTo.append("\
            <div class='input-group repeatableTargetParamListGroup'>\
                <input type='text' class='form-control validName paramType' placeholder='Parameter Type' aria-label='Parameter Type' aria-describedby='basic-addon2'\
                             tabindex='0' data-toggle='popover' data-trigger='manual' data-placement='left' data-content='Invalid Name'>\
                <input type='text' class='form-control validName paramName' placeholder='Parameter Name' aria-label='Parameter Name' aria-describedby='basic-addon2'\
                             tabindex='0' data-toggle='popover' data-trigger='manual' data-placement='left' data-content='Invalid Name'>\
                <div class='input-group-append'>\
                    <button class='btn btn-outline-secondary addTargetParameterBtn' type='button' data-toggle='tooltip' data-placement='top' title='Add another parameter'>+</button>\
                    <button class='btn btn-outline-secondary delTargetParameterBtn' type='button' data-toggle='tooltip' data-placement='top' title='Delete this parameter'>-</button>\
                </div>\
            </div>\
        ");
    });
    // END: Add a paramter functionality.

    // START: Delete a paramter functionality.
    $("#targetFuncDeclWrapperRow").on('click', '.delTargetParameterBtn', function(event) {
        console.log("delTargetParameterBtn");
        var eleToBeDeleted = $(this).parents(".repeatableTargetParamListGroup");
        console.log(eleToBeDeleted);
        eleToBeDeleted.remove();        
    });
    // END: Delete a paramter functionality.

    // START: Add a function declaration functionality.
    $("#targetFuncDeclWrapperRow").on('click', '.addFuncDeclBtn', function(event) {
        console.log("addParameterTypeBtn");
        $("#targetFuncDeclDivRow").append("\
            <div class='col-xl-12 col-lg-12 col-md-12 col-12 customBorder funcToDelete noPadColumn'>\
                <div class='container-fluid repeatableTargetFuncDeclList'>\
                    <div class='row'>\
                        <div class='col-xl-2 col-lg-2 col-md-2 col-2'>\
                            <input type='text' class='form-control validName retTypeName' placeholder='Return Type' aria-label='Return Type' aria-describedby='basic-addon3'\
                             tabindex='0' data-toggle='popover' data-trigger='manual' data-placement='left' data-content='Invalid Name'>\
                        </div>\
                        <div class='col-xl-2 col-lg-2 col-md-2 col-2'>\
                            <input type='text' class='form-control validName funcName' placeholder='Function Name' aria-label='Function Name' aria-describedby='basic-addon4'\
                             tabindex='0' data-toggle='popover' data-trigger='manual' data-placement='right' data-content='Invalid Name'>\
                        </div>\
                        <div class='col-xl-6 col-lg-6 col-md-6 col-6 paramDiv'>\
                            <div class='input-group repeatableParamListGroup'>\
                                <input type='text' class='form-control validName paramType' placeholder='Parameter Type' aria-label='Parameter Type' aria-describedby='basic-addon2'\
                             tabindex='0' data-toggle='popover' data-trigger='manual' data-placement='left' data-content='Invalid Name'>\
                                <input type='text' class='form-control validName paramName' placeholder='Parameter Name' aria-label='Parameter Name' aria-describedby='basic-addon2'\
                             tabindex='0' data-toggle='popover' data-trigger='manual' data-placement='left' data-content='Invalid Name'>\
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
    $("#targetFuncDeclWrapperRow").on('click', '.delFuncDeclBtn', function(event) {
        console.log("delParameterTypeBtn");
        var eleToBeDeleted = $(this).parents(".funcToDelete");
        console.log(eleToBeDeleted);
        eleToBeDeleted.remove();        
    });    
    // END: Delete a function functionality.
    // END: Target Class Functions



    // START: Adaptee Class Functions
        // START: Add a paramter functionality.
        $("#adapteeFuncDeclWrapperRow").on('click', '.addParameterBtn', function(event) {
            console.log("addParameterTypeBtn");
            var eleToBeAddedTo = $(this).parents(".paramDiv");
            eleToBeAddedTo.append("\
                <div class='input-group repeatableParamListGroup'>\
                    <input type='text' class='form-control validName paramType' placeholder='Parameter Type' aria-label='Parameter Type' aria-describedby='basic-addon2'\
                                 tabindex='0' data-toggle='popover' data-trigger='manual' data-placement='left' data-content='Invalid Name'>\
                    <input type='text' class='form-control validName paramName' placeholder='Parameter Name' aria-label='Parameter Name' aria-describedby='basic-addon2'\
                                 tabindex='0' data-toggle='popover' data-trigger='manual' data-placement='left' data-content='Invalid Name'>\
                    <div class='input-group-append'>\
                        <button class='btn btn-outline-secondary addParameterBtn' type='button' data-toggle='tooltip' data-placement='top' title='Add another parameter'>+</button>\
                        <button class='btn btn-outline-secondary delParameterBtn' type='button' data-toggle='tooltip' data-placement='top' title='Delete this parameter'>-</button>\
                    </div>\
                </div>\
            ");
        });
        // END: Add a paramter functionality.
    
        // START: Delete a paramter functionality.
        $("#adapteeFuncDeclWrapperRow").on('click', '.delParameterBtn', function(event) {
            console.log("delParameterTypeBtn");
            var eleToBeDeleted = $(this).parents(".repeatableParamListGroup");
            console.log(eleToBeDeleted);
            eleToBeDeleted.remove();        
        });
        // END: Delete a paramter functionality.
    
        // START: Add a function declaration functionality.
        $("#adapteeFuncDeclWrapperRow").on('click', '.addFuncDeclBtn', function(event) {
            console.log("addParameterTypeBtn");
            $("#adapteeFuncDeclDivRow").append("\
                <div class='col-xl-12 col-lg-12 col-md-12 col-12 customBorder funcToDelete noPadColumn'>\
                    <div class='container-fluid repeatableAdapteeFuncDeclList'>\
                        <div class='row'>\
                            <div class='col-xl-2 col-lg-2 col-md-2 col-2'>\
                                <input type='text' class='form-control validName retTypeName' placeholder='Return Type' aria-label='Return Type' aria-describedby='basic-addon3'\
                                 tabindex='0' data-toggle='popover' data-trigger='manual' data-placement='left' data-content='Invalid Name'>\
                            </div>\
                            <div class='col-xl-2 col-lg-2 col-md-2 col-2'>\
                                <input type='text' class='form-control validName funcName' placeholder='Function Name' aria-label='Function Name' aria-describedby='basic-addon4'\
                                 tabindex='0' data-toggle='popover' data-trigger='manual' data-placement='right' data-content='Invalid Name'>\
                            </div>\
                            <div class='col-xl-6 col-lg-6 col-md-6 col-6 paramDiv'>\
                                <div class='input-group repeatableParamListGroup'>\
                                    <input type='text' class='form-control validName paramType' placeholder='Parameter Type' aria-label='Parameter Type' aria-describedby='basic-addon2'\
                                 tabindex='0' data-toggle='popover' data-trigger='manual' data-placement='left' data-content='Invalid Name'>\
                                    <input type='text' class='form-control validName paramName' placeholder='Parameter Name' aria-label='Parameter Name' aria-describedby='basic-addon2'\
                                 tabindex='0' data-toggle='popover' data-trigger='manual' data-placement='left' data-content='Invalid Name'>\
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
        $("#adapteeFuncDeclWrapperRow").on('click', '.delFuncDeclBtn', function(event) {
            console.log("delParameterTypeBtn");
            var eleToBeDeleted = $(this).parents(".funcToDelete");
            console.log(eleToBeDeleted);
            eleToBeDeleted.remove();        
        });    
        // END: Delete a function functionality.
        // END: Adaptee Class Functions
    


    // START: Cosmetic change to display file type selected in the dropdown.
    $(".fileType").on('click', function(event) {
        $("#fileTypeBtn").text($(this).text());
    });
    // END: Cosmetic change to display file type selected in the dropdown.

    // START : Code Download Functionality (includes form submission without forms per se)

    var errorNumber = 0;
    $("#codeDownload").on('click', function(event) {
        
        // 0. The JSON required by render.py is mentioned
        // 1. Get all variable values
        // 2. Organise them in the inputData JS Object
        // 3. Send a POST to necessary URL
        // 4. Get back file.

        // Step 0: The JSON required by render.py is mentioned
        // {
        //     'pattern': 'adapter',
        //     'target_functions':[
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
        //     ],
        //     'adaptee_functions':[
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
        var errorCheckAttributes={
            isErraneousForm:false
        };

        function checkPopover(fn) {
            function inner(scope,type) {
                var ele = scope.find(type);
                if(ele.attr('isValidInput')=="true"){
                    return fn(ele);
                }
                else{
                    errorCheckAttributes["isErraneousForm"] = true;
                    ele.popover('show');
                }
            }
            return inner
        };


        // Step 1: Get All variables (haha, seems so simple :) )

        function getParamTypesList(scope) {
            var paramTypeList = [];
            var curParamTypeChildren = scope.find('.paramType');
            curParamTypeChildren.each(function(index, el) {
                if($(this).attr('isValidInput')=="true"){
                    paramTypeList.push($(this).val());
                }
                else{
                    errorCheckAttributes["isErraneousForm"] = true;
                    $(this).popover('show');
                }
            });
            return paramTypeList;
        }
        
        function getParamNamesList(scope) {
            var paramNameList = [];
            var curParamNameChildren = scope.find('.paramName');
            curParamNameChildren.each(function(index, el) {
                if($(this).attr('isValidInput')=="true"){
                    paramNameList.push($(this).val());
                }
                else{
                    errorCheckAttributes["isErraneousForm"] = true;
                    $(this).popover('show');
                }
            });
            return paramNameList;
        }

        function getFuncName(ele,type) {
            return ele.val();
        }

        function getFuncRetType(ele,type) {
            return ele.val();
        }

        function getTargetFunctionDeclList() {
            var functionsList = [];
            $(".repeatableTargetFuncDeclList").each(function(index, el) {
                functionsList.push({
                    "name":getFuncName($(this),".funcName"),
                    "param_types":getParamTypesList($(this)),
                    "param_names":getParamNamesList($(this)),
                    "return":getFuncRetType($(this),".retTypeName")
                });
            });
            return functionsList;
        }

        function getAdapteeFunctionDeclList() {
            var functionsList = [];
            $(".repeatableAdapteeFuncDeclList").each(function(index, el) {
                functionsList.push({
                    "name":getFuncName($(this),".funcName"),
                    "param_types":getParamTypesList($(this)),
                    "param_names":getParamNamesList($(this)),
                    "return":getFuncRetType($(this),".retTypeName")
                });
            });
            return functionsList;
        }
        
        function getFunctionCount(func_list) {
            console.log(func_list.length);
            return func_list.length;
        }

        getFuncName = checkPopover(getFuncName);
        getFuncRetType = checkPopover(getFuncRetType);

        var inpData = {
            "pattern":"adapter",
            "target_functions":getTargetFunctionDeclList(),
            "adaptee_functions":getAdapteeFunctionDeclList(),
            "num_functions": getFunctionCount(getTargetFunctionDeclList()),
            "fileType":$("#fileTypeBtn").text(), //this key will be removed in backend.
        }
        console.log("inpData:",inpData)
        if(!errorCheckAttributes["isErraneousForm"]){
            // do AJAX POST and send it away, woo
            console.log(inpData);

            $.ajax({
                url: "commonCodeCreate",
                type: "POST",
                dataType: "JSON",
                data: JSON.stringify(inpData),
                contentType:"application/json; charset=UTF-8"
            })
            .done(function(info) {
                console.log("success");
                console.log("success info:",info);
                if(info["success"]==true)
                {
                    $("#downloadCodeForm").submit(); //download the code. AJAX can't download by itself
                }
            })
            .fail(function(info) {
                console.log("error");
                console.log("error info:",info);
            })
            .always(function() {
                console.log("complete");
                console.log("complete info:",$(this));
            });
            
        }
        else{
            // terrible guy decided to test the system's error handling.
            // not today bitch
            if(errorNumber<2){
                $("#errorModal").on('show.bs.modal', function(event) {
                    $("#errorModalBody").text("Check and correct the inputs which are being pointed to.Whenever you are ready, click Download again.");
                });
                $("#errorModal").modal("toggle");
            }
            else if(errorNumber<4){
                $("#errorModal").on('show.bs.modal', function(event) {
                    $("#errorModalBody").text("Correct the inputs which are being pointed to.");
                });
                $("#errorModal").modal("toggle");
            }
            else{
                $("#errorModal").on('show.bs.modal', function(event) {
                    $("#errorModalBody").text("Ok now, read the entries and enter properly.");
                });
                $("#errorModal").modal("toggle");
            }
            errorNumber++;
            console.log(errorNumber);
        }
    });

    // END : Code Download Functionality (includes form submission without forms per se)
    
    // START : State name validation
    function matchExact(r, str) {
       var match = str.match(r);
       return match != null && str == match[0];
    }
    $(".entireStateWrapper").on("focus",".validName", function(event) {
        $(this).popover("hide");
    });

    $(".entireStateWrapper").on("input",".validName", function(event) {
        // data-toggle="tooltip" data-placement="left" title="Tooltip on top"

        var res;
        
        res = matchExact(/[A-Za-z_]+[A-Za-z0-9_]*/g,$(this).val()); //basically it's a valid variable in a language like C++
        
        if($(this).hasClass("retTypeName") || $(this).hasClass("paramType"))
        {
            res = matchExact(/([A-Za-z_]+[A-Za-z0-9_]*)[\&\*]*/g,$(this).val()); //basically it's a valid variable in a language like C++
        }

        if(res==false){
            console.log("here");
            $(this).attr("isValidInput",false);
            $(this).css('color', 'red');
        }
        else{
            $(this).attr("isValidInput",true);
            $(this).css('color', 'green');
        }
    });

    $(".entireStateWrapper").on("focus",".validName", function(event) {
        if($(this).attr("isValidInput") == "true"){
            $(this).css('color', 'green');
        }
        else
        {
            $(this).css('color', 'red');
        }
    });

    $(".entireStateWrapper").on("blur",".validName", function(event) {
        if($(this).attr("isValidInput") == "true"){
            $(this).css('color', 'black');
        }
    });
    // END : State name validation

});