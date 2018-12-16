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

var UploadState = Object.create(Upload);
UploadState.receivedText = function() {
	console.log(JSON.parse(self.fr.result));
	// console.log("in");
}