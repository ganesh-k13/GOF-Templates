#include <string>
#include <iostream>
#include "state.h"

#ifndef CONTEXT_H
#define CONTEXT_H

// class State;

class Context {
	private:
		State *_ptr_state;
		
	public:
		{% for fn in functions %}
			{{fn.return}} {{fn.name}}({% for type, name in fn['params'][:-1] %}{{type}} {{name}}, {% endfor %}{{fn['param_types'][-1]}} {{fn['param_names'][-1]}});
		{% endfor %}
		void change_state(State *ptr_state) {
			_ptr_state = ptr_state;
		}
		Context();
		~Context();
};


#endif

