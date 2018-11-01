#include <string>

#ifndef STATE_H
#define STATE_H
class State {
	public:
	
		virtual void f1(int i1, float f1) = 0; // algointerface
	
		virtual double f2(int i2, double d2) = 0; // algointerface
	
};


class S1: public State {
	public:
	
		virtual void f1(int i1, float f1); // algointerface
	
		virtual double f2(int i2, double d2); // algointerface
	
};

class S2: public State {
	public:
	
		virtual void f1(int i1, float f1); // algointerface
	
		virtual double f2(int i2, double d2); // algointerface
	
};

class S3: public State {
	public:
	
		virtual void f1(int i1, float f1); // algointerface
	
		virtual double f2(int i2, double d2); // algointerface
	
};


#endif
