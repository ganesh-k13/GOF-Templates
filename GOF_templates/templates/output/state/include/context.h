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
		
			void f1(int i1, float f1);
		
			double f2(int i2, double d2);
		
		void change_state(State *ptr_state) {
			_ptr_state = ptr_state;
		}
		Context();
		~Context();
};


#endif
