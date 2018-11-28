#include "include/context.h"
#include "include/policy.h"


int main() {
	std::cout << std::endl << "------ Policy Pattern Tests ------" << std::endl;

	// creates a context object for each policy
	{% for p in policies %}
		Context c_{{p.name}}(new {{p.name}});
	{% endfor %}

	{% for p in policies %}
		{% for fn in functions %}
			c_{{p.name}}.{{fn.name}}(
				{% for type, name in fn['params'][:-1] %}
					{{name}}, 
				{% endfor %}
				{{fn['param_names'][-1]}}
			);
		{% endfor %}
	{% endfor %}
}