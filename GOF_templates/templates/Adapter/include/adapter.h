#ifndef ADAPTER_H
#define ADAPTER_H

class Adaptee;

// Target Class - has interface 1
class Target {
    public:
        {% for fn in target_functions %}
			virtual {{fn.return}} {{fn.name}}({% for type, name in fn['params'][:-1] %}{{type}} {{name}}, {% endfor %}{{fn['param_types'][-1]}} {{fn['param_names'][-1]}}) = 0;
		{% endfor %}
};

// Adapter Class - matches the interfaces
class Adapter : public Target {
    private:
        Adaptee *adaptee;
    public:
        Adapter (Adaptee *adaptee) : adaptee(adaptee) {}
        
        {% for fn in target_functions %}
			virtual {{fn.return}} {{fn.name}}({% for type, name in fn['params'][:-1] %}{{type}} {{name}}, {% endfor %}{{fn['param_types'][-1]}} {{fn['param_names'][-1]}});
		{% endfor %}
};

// has new interface
class Adaptee {
    public:
        {% for fn in adaptee_functions %}
			virtual {{fn.return}} {{fn.name}}({% for type, name in fn['params'][:-1] %}{{type}} {{name}}, {% endfor %}{{fn['param_types'][-1]}} {{fn['param_names'][-1]}}) = 0;
		{% endfor %}
};
#endif