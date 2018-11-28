#include "../include/context.h"
#include <iostream>

{% for p in policies %}
	{% for fn in functions %}
		{{fn.return}} {{p.name}} :: {{fn.name}} ({% for type, name in fn['params'][:-1] %}{{type}} {{name}}, {% endfor %}{{fn['param_types'][-1]}} {{fn['param_names'][-1]}}) {

		}
	{% endfor %}
{% endfor %}
