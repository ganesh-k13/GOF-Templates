$(document).ready(function() {
    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
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
    
    // var opJson = {
    //     'pattern': 'state',
    //     'states':[ {
    //         'name': 'S1'
    //     }
    //     ,
    //     {
    //         'name': 'S2'
    //     }
    //     ,
    //     {
    //         'name': 'S3'
    //     }
    //     ],
    //     'functions':[ {
    //         'name': 'f1', 'param_types': ['int', 'float'], 'param_names': ['i1', 'f1'], 'return': 'void'
    //     }
    //     ,
    //     {
    //         'name': 'f2', 'param_types': ['int', 'double'], 'param_names': ['i2', 'd2'], 'return': 'double'
    //     }
    //     ]
    // }

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