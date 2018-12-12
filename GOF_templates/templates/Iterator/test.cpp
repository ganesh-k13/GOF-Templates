#include "include/carray.h"
#include "include/utils.h"
#include <vector>

int main() {
	std::cout << std::endl << "------ Iterator Pattern Tests ------" << std::endl;

	CArray<int> arr(10);
	int i = 0;
	for(auto it = arr.begin(); it != arr.end(); ++it, ++i) {
		*it = i;
	}

	disp(arr.begin(), arr.end());

	reverse(arr.begin(), --arr.end());

	disp(arr.begin(), arr.end());	

	CArray<float> arr_f(10);
	float j = 0.0;
	for(auto it = arr_f.begin(); it != arr_f.end(); ++it, ++j) {
		*it = j;
	}

	disp(arr_f.begin(), arr_f.end());

	reverse(arr_f.begin(), --arr_f.end());

	disp(arr_f.begin(), arr_f.end());

	CArray<std::string> arr_s(10);
	std::vector<std::string> str_arr = {"first", "second", "third", "fourth", "fifth", \
										"sixth", "seventh", "eigth", "nineth", "tenth"};
	i = 0;
	for(auto it = arr_s.begin(); it != arr_s.end(); ++it, ++i) {
		*it = str_arr[i];
	}

	disp(arr_s.begin(), arr_s.end());

	reverse(arr_s.begin(), --arr_s.end());

	disp(arr_s.begin(), arr_s.end());

}