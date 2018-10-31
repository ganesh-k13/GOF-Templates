#ifndef STATE_H
#define STATE_H
class State {
	public:
	
		virtual void f1(int, float) = 0; // algointerface
	
		virtual double f2(string, float, int) = 0; // algointerface
	
};


class S1: public State {
	public:
	
		virtual void f1(int, float); // algointerface
	
		virtual double f2(string, float, int); // algointerface
	
};

class S2: public State {
	public:
	
		virtual void f1(int, float); // algointerface
	
		virtual double f2(string, float, int); // algointerface
	
};

class S3: public State {
	public:
	
		virtual void f1(int, float); // algointerface
	
		virtual double f2(string, float, int); // algointerface
	
};


#endif
