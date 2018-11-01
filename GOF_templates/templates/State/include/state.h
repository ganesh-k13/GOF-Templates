#include <string>

#ifndef STATE_H
#define STATE_H
class State {
	public:
	{% for fn in functions %}
		virtual {{fn.return}} {{fn.name}}({% for type, name in fn['params'][:-1] %}{{type}} {{name}}, {% endfor %}{{fn['param_types'][-1]}} {{fn['param_names'][-1]}}) = 0; // algointerface
	{% endfor %}
};

{% for s in states %}
class {{s.name}}: public State {
	public:
	{% for fn in functions %}
		virtual {{fn.return}} {{fn.name}}({% for type, name in fn['params'][:-1] %}{{type}} {{name}}, {% endfor %}{{fn['param_types'][-1]}} {{fn['param_names'][-1]}}); // algointerface
	{% endfor %}
};
{% endfor %}

#endif

