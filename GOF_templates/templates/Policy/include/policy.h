#ifndef POLICY_H
#define POLICY_H
class Policy {
	public:
	{% for fn in functions %}
		virtual {{fn.return}} {{fn.name}}({% for type, name in fn['params'][:-1] %}{{type}} {{name}}, {% endfor %}{{fn['param_types'][-1]}} {{fn['param_names'][-1]}}) = 0;
	{% endfor %}
};


{% for p in policies %}
class {{p.name}}: public Policy {
	public:
	{% for fn in functions %}
		virtual {{fn.return}} {{fn.name}}({% for type, name in fn['params'][:-1] %}{{type}} {{name}}, {% endfor %}{{fn['param_types'][-1]}} {{fn['param_names'][-1]}});
	{% endfor %}
};
{% endfor %}

#endif

