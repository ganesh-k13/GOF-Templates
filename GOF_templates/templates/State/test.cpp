#include "include/mobile.h"
#include "include/state.h"

int main() {
	std::cout << std::endl << "------ State Pattern Tests ------" << std::endl;
	
	Context c;
	
	{% for s in states %}
		c.change_state(new {{s.name}})
		{% for fn in functions %}
			c.{{fn.name}}({{fn.params}})}
		{% endfor %}
	{% endfor %}
}