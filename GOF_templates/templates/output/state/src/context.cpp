#include "../include/context.h"


	void Context::f1(int i1=0, float f1=0.0) {
		_ptr_state->f1(int i1=0, float f1=0.0);
	}

	double Context::f2(std::string s1="", float f1=0.0, int i1=1) {
		_ptr_state->f2(std::string s1="", float f1=0.0, int i1=1);
	}


Context::Context() {
}

Context::~Context() {

}