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
		
			void f1(int i1=0, float f1=0.0);
		
			double f2(std::string s1="", float f1=0.0, int i1=1);
		
		void change_state(State *ptr_state) {
			_ptr_state = ptr_state;
		}
		Context();
		~Context();
};


#endif
