#include <iostream>
using namespace std;
#include "include/adapter.h"

int main() {
	cout << endl << "------ Adapter Pattern Tests ------" << endl;

	Target *target = new Adapter(new Adaptee);

	{% for fn in target_functions %}
		target->{{fn.name}}({% for type, name in fn['params'][:-1] %}{{type}} {{name}}, {% endfor %}{{fn['param_types'][-1]}} {{fn['param_names'][-1]}});
	{% endfor %}

	return 0;
}