#include "include/context.h"
#include "include/state.h"

int main() {
	std::cout << std::endl << "------ State Pattern Tests ------" << std::endl;
	
	
		
			int i1;
		
			float f1;
		
	
		
			int i2;
		
			double d2;
		
	
	
	Context c;
	
		c.change_state(new S1);
		
			c.f1(i1, f1);
		
			c.f2(i2, d2);
		
	
		c.change_state(new S2);
		
			c.f1(i1, f1);
		
			c.f2(i2, d2);
		
	
		c.change_state(new S3);
		
			c.f1(i1, f1);
		
			c.f2(i2, d2);
		
	
}