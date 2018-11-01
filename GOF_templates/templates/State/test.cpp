#include "include/context.h"
#include "include/state.h"

int main() {
	std::cout << std::endl << "------ State Pattern Tests ------" << std::endl;
	
	{% for fn in functions %}
		{% for type, name in fn['params'] %}
			{{type}} {{name}};
		{% endfor %}
	{% endfor %}
	
	Context c;
	{% for s in states %}
		c.change_state(new {{s.name}});
		{% for fn in functions %}
			c.{{fn.name}}({% for type, name in fn['params'][:-1] %}{{name}}, {% endfor %}{{fn['param_names'][-1]}});
		{% endfor %}
	{% endfor %}
}