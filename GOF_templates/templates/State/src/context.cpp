#include "../include/context.h"

{% for fn in functions %}
	{{fn.return}} Context::{{fn.name}}({% for type, name in fn['params'][:-1] %}{{type}} {{name}}, {% endfor %} {{fn['param_types'][-1]}} {{fn['param_names'][-1]}}) {
		_ptr_state->{{fn.name}}({% for type, name in fn['params'][:-1] %} {{name}},{% endfor %} {{fn['param_names'][-1]}});
	}
{% endfor %}

Context::Context() {
}

Context::~Context() {

}