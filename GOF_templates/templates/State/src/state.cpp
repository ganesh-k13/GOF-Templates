#include "../include/state.h"

{% for s in states %}
	{% for fn in functions %}
		{{fn.return}} {{s.name}}::{{fn.name}}({{fn.params}}) {
		
		}
	{% endfor %}
};
{% endfor %}