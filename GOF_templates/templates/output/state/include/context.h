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
		
			void f1(int, float);
		
			double f2(string, float, int);
		
		void change_state(State *ptr_state) {
			_ptr_state = ptr_state;
		}
		Context();
		~Context();
};


#endif
