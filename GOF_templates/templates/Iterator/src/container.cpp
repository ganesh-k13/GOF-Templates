#include "../include/container.h"

template<class T>
{{container_name}}<T>::{{container_name}}(int n)
: _arr(new T[n]), _n(n) {

}

template<class T>
{{container_name}}<T>::~{{container_name}}() {
    delete [] _arr;
}

{% for type in supported_types %}
template class {{container_name}}<{{type}}>;
{% endfor %}