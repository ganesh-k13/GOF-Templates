var Upload = {
    
	validate: function() {
		$(".validName").each(function(index,el){
			$(this).trigger("input");
		});
	},
	
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
<<<<<<< HEAD
var UploadPolicy = Object.create(Upload);
=======
>>>>>>> f5a7bdea0da8655c16cbc46185d31e20fe81ea07
var UploadIterator = Object.create(Upload);
