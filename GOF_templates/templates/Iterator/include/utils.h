#include <iostream>
#include <string>

template<class T>
void disp(T first, T last) {
	while(first != last) {
		std::cout << *first << " "; first++;
	}

	std::cout << std::endl;
}

template<class T>
void reverse(T first, T last) {
	while(first < last) {
		auto temp = *first;
		*first = *last;
		*last = temp;
		++first; --last;
	}
}