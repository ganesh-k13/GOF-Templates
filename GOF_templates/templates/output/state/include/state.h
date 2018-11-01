#include <string>

#ifndef STATE_H
#define STATE_H
class State {
	public:
	
		virtual void f1(int i1=0, float f1=0.0) = 0; // algointerface
	
		virtual double f2(std::string s1="", float f1=0.0, int i1=1) = 0; // algointerface
	
};


class S1: public State {
	public:
	
		virtual void f1(int i1=0, float f1=0.0); // algointerface
	
		virtual double f2(std::string s1="", float f1=0.0, int i1=1); // algointerface
	
};

class S2: public State {
	public:
	
		virtual void f1(int i1=0, float f1=0.0); // algointerface
	
		virtual double f2(std::string s1="", float f1=0.0, int i1=1); // algointerface
	
};

class S3: public State {
	public:
	
		virtual void f1(int i1=0, float f1=0.0); // algointerface
	
		virtual double f2(std::string s1="", float f1=0.0, int i1=1); // algointerface
	
};


#endif
