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
	var data = (JSON.parse(self.fr.result));
	console.log(data)
	data['states'].forEach(function(state, i) {
		jQuery("#stateListColDiv > div:nth-child("+(i+1)+") > div > button.btn.btn-outline-secondary.addStateBtn").first().trigger("click")
		
		console.log(state.name)
	})
	// Remove Extra
	jQuery("#stateListColDiv > div:nth-child(2) > div > button.btn.btn-outline-secondary.delStateBtn").first().trigger("click")
	
	// console.log("in");
}