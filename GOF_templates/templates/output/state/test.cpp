#include "include/context.h"
#include "include/state.h"

int main() {
	std::cout << std::endl << "------ State Pattern Tests ------" << std::endl;
	
	Context c;
	
		c.change_state(new S1);
		
			c.f1(int i1=0, float f1=0.0);
		
			c.f2(std::string s1="", float f1=0.0, int i1=1);
		
	
		c.change_state(new S2);
		
			c.f1(int i1=0, float f1=0.0);
		
			c.f2(std::string s1="", float f1=0.0, int i1=1);
		
	
		c.change_state(new S3);
		
			c.f1(int i1=0, float f1=0.0);
		
			c.f2(std::string s1="", float f1=0.0, int i1=1);
		
	
}