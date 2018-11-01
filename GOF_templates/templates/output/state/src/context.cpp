#include "../include/context.h"


	void Context::f1(int i1,  float f1) {
		_ptr_state->f1( i1, f1);
	}

	double Context::f2(int i2,  double d2) {
		_ptr_state->f2( i2, d2);
	}


Context::Context() {
}

Context::~Context() {

}