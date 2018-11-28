#include <string>
#include <iostream>
#include "policy.h"

#ifndef CONTEXT_H
#define CONTEXT_H

class Context {
	private:
		// contains information of which policy is in use
		Policy *_ptr_policy;
	public:
		// creates all the function interfaces to be implemented by each policy
		{% for fn in functions %}
			{{fn.return}} {{fn.name}}(
				{% for type, name in fn['params'][:-1] %}
					{{type}} {{name}}, 
				{% endfor %}
				{{fn['param_types'][-1]}} 
				{{fn['param_names'][-1]}}
			);
		{% endfor %}

		// context class constructor
		Context(Policy *_ptr_policy);

		// context class destructor
		~Context();
};

#endif

