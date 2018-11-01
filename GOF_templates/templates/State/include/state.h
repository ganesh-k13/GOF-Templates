#include <string>

#ifndef STATE_H
#define STATE_H
class State {
	public:
	{% for fn in functions %}
		virtual {{fn.return}} {{fn.name}}({{fn.params}}) = 0; // algointerface
	{% endfor %}
};

{% for s in states %}
class {{s.name}}: public State {
	public:
	{% for fn in functions %}
		virtual {{fn.return}} {{fn.name}}({{fn.params}}); // algointerface
	{% endfor %}
};
{% endfor %}

#endif

