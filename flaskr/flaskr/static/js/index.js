$(document).ready(function() {

	$("#patternSearchBox").on('focus', function(event) {
		$(this).css('border-bottom', '5px solid #164719');
	});
	$("#patternSearchBox").on('blur', function(event) {
		$(this).css('border-bottom', '1px solid black');
	});

	var patternArr = [
		"state",
		"adapter",
		"decorator",
		"iterator",
		"mediator",
		"singleton",
		"strategy"
	];
	var trie = SuffixTree.fromArray(patternArr);
	var allPatternEles = $(".patternDivCol");
	var allPatternEleNames = [];

	$(".patternDivCol").each(function(index, el) {
		allPatternEleNames.push($(this).attr("name"));
	});	


	console.log(allPatternEleNames);

	console.log(allPatternEles);
	$("#patternSearchBox").on('input', function(event) {
		$(".patternDivCol").each(function(index, el) {
			$(this).css('display', 'none');;
		});			
		var res = trie.find($(this).val());
		if (res && res.length){ //if res is not null and is not empty
			var intersection = allPatternEleNames.filter(value => -1 !== res.indexOf(value));

			$.each(allPatternEleNames, function(outIndex, outVal) {
				$.each(intersection, function(inIndex, inVal) {
					if(outVal == inVal)
					{
						$("[name='"+inVal+"']").css('display', 'block');
					}
				});
			});
		}
	});
});