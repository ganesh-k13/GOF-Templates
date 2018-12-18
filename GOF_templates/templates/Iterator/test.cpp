#include "include/container.h"
#include "include/utils.h"
#include <vector>

int main() {
	std::cout << std::endl << "------ Iterator Pattern Tests ------" << std::endl;
	
	{% if 'int' in supported_types %}
		{{container_name}}<int> arr(10);
		int i = 0;
		for(auto it = arr.begin(); it != arr.end(); ++it, ++i) {
			*it = i;
		}
	
		disp(arr.begin(), arr.end());

		reverse(arr.begin(), --arr.end());

		disp(arr.begin(), arr.end());	

	{% endif %}
	
	{% if 'int' in supported_types %}
		{{container_name}}<float> arr_f(10);
		float j = 0.0;
		for(auto it = arr_f.begin(); it != arr_f.end(); ++it, ++j) {
			*it = j;
		}

		disp(arr_f.begin(), arr_f.end());

		reverse(arr_f.begin(), --arr_f.end());

		disp(arr_f.begin(), arr_f.end());
	
	{% endif %} 
}