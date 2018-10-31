#include <string>
#include <iostream>
#include "state.h"

#ifndef MOBILE_H
#define MOBILE_H

// class State;

class Context {
	private:
		State *_ptr_state;
		
	public:
		{% for fn in functions %}
			{{fn.return}} {{fn.name}}({{fn.params}});
		{% endfor %}
		void change_state(State *ptr_state) {
			_ptr_state = ptr_state;
		}
		Context();
		~Context();
};


#endif

