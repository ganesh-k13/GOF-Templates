var Upload = {
    
	init : function() {
		if (this.constructor === Upload) {
		  throw new Error("Can't instantiate abstract class!");
		}
	},
	
	handleFileSelect : function() {
		if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
			alert('The File APIs are not fully supported in this browser.');
			return;
		}	

		input = document.getElementById('fileinput');
		if (!input) {
			alert("Um, couldn't find the fileinput element.");
		}
		else if (!input.files) {
			alert("This browser doesn't seem to support the `files` property of file inputs.");
		}
		else if (!input.files[0]) {
			alert("Please select a file before clicking 'Load'");				  
		}
		else {
			var file = input.files[0];
			self = this;
			self.fr = new FileReader();
			self.fr.onload = self.receivedText;
			self.fr.readAsText(file);
			// console.log(this)
			// fr.readAsDataURL(file);
		}
	},

	receivedText : function() {
		throw new Error("Abstract method!");
	}
	
};

// #funcDeclDivRow > div:nth-child(1) > div > div > div.col-xl-6.col-lg-6.col-md-6.col-6.paramDiv > div:nth-child(1) > input.form-control.validName.paramName

var UploadState = Object.create(Upload);
UploadState.receivedText = function() {
	var data = (JSON.parse(self.fr.result));
	console.log(data);
	
	// For States
	data['states'].forEach(function(state, i) {
		jQuery("#stateListColDiv > div:nth-child("+(i+1)+") > div > button.btn.btn-outline-secondary.addStateBtn").first().trigger("click");
		jQuery("#stateListColDiv > div:nth-child("+(i+1)+") > input").val(state.name);
		console.log(state.name);
	});
	// Remove Extra
	jQuery("#stateListColDiv > div:last-child > div > button.btn.btn-outline-secondary.delStateBtn").first().trigger("click");
	
	data['functions'].forEach(function(functions, i) {
		jQuery("#funcDeclDivRow > div:nth-child("+(i+1)+") > div > div > div:nth-child(4) > div > div > button.btn.btn-secondary.addFuncDeclBtn").first().trigger("click")
		jQuery("#funcDeclDivRow > div:nth-child("+(i+1)+") > div > div > div:nth-child(1) > input").val(functions.name)
		jQuery("#funcDeclDivRow > div:nth-child("+(i+1)+") > div > div > div:nth-child(2) > input").val(functions.return)
		
		functions.param_types.forEach(function(param_type, j) {
			jQuery("#funcDeclDivRow > div:nth-child("+(i+1)+") > div > div > div.col-xl-6.col-lg-6.col-md-6.col-6.paramDiv > div:nth-child("+(j+1)+") > div > button.btn.btn-outline-secondary.addParameterBtn").first().trigger("click")
			jQuery("#funcDeclDivRow > div:nth-child("+(i+1)+") > div > div > div.col-xl-6.col-lg-6.col-md-6.col-6.paramDiv > div:nth-child("+(j+1)+") > input.form-control.validName.paramType").val(param_type)
			console.log(param_type)
		});
		jQuery("#funcDeclDivRow > div:nth-child("+(i+1)+") > div > div > div.col-xl-6.col-lg-6.col-md-6.col-6.paramDiv > div:last-child > div > button.btn.btn-outline-secondary.delParameterBtn").first().trigger("click")
		
		functions.param_names.forEach(function(param_name, j) {
			jQuery("#funcDeclDivRow > div:nth-child("+(i+1)+") > div > div > div.col-xl-6.col-lg-6.col-md-6.col-6.paramDiv > div:nth-child("+(j+1)+") > input.form-control.validName.paramName").val(param_name)
		});
	});	
	
	jQuery("#funcDeclDivRow > div:last-child > div > div > div:nth-child(4) > div > div > button.btn.btn-danger.delFuncDeclBtn").first().trigger("click")
	
	// data[''].forEach(function(state, i) {
		
	// })
	
	// data[''].forEach(function(state, i) {
		
	// })
}