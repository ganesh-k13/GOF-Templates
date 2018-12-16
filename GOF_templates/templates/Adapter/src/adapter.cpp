#include <iostream>
using namespace std;
#include "../include/adapter.h"

{% for i in range(num_functions) %}
    {{target_functions[i].return}} Adapter :: {{target_functions[i].name}}({% for type, name in target_functions[i]['params'][:-1] %}{{type}} {{name}}, {% endfor %}{{target_functions[i]['param_types'][-1]}} {{target_functions[i]['param_names'][-1]}}) {
        adaptee->{{adaptee_functions[i].name}}();
    }
{% endfor %}

{% for fn in adaptee_functions %}
    {{fn.return}} Adaptee :: {{fn.name}}({% for type, name in fn['params'][:-1] %}{{type}} {{name}}, {% endfor %}{{fn['param_types'][-1]}} {{fn['param_names'][-1]}}) {
        cout << "{{fn.name}}" << endl;
    }
{% endfor %}