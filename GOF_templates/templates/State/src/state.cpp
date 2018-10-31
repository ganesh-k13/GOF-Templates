#include "../include/state.h"

{% for s in states %}
class {{s.name}}: public State {
	public:
	{% for fn in functions %}
		virtual {{fn.return}} {{fn.name}}({{fn.params}}) {
		
		}
	{% endfor %}
};
{% endfor %}