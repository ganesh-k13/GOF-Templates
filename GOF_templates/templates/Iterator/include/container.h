#include <iostream>
#include <string>

template<class T>
class {{container_name}} {
	private:
		int _n;
		T *_arr;
	public:
		{{container_name}}(int n);
		~{{container_name}}();

		class {{iterator_name}} {
			private:
				T *p_it_;
			public:
				{{iterator_name}}(T* p_it) : p_it_(p_it) { }

				T& operator*() {  return *p_it_; }

				bool operator==(const {{iterator_name}}& rhs) const {
					return p_it_ == rhs.p_it_;
				}

				bool operator!=(const {{iterator_name}}& rhs) const {
					return !(*this == rhs);
				}

				bool operator<(const {{iterator_name}}& rhs) const {
					return (this->p_it_)-(rhs.p_it_) <= 0 ? true : false;
				}

				{{iterator_name}}& operator++() {
					++p_it_;
					return *this;
				}

				{{iterator_name}} operator++(int) {
					{{iterator_name}} temp(*this);
					++*this;
					return temp;
				}

				{{iterator_name}}& operator--() {
					--p_it_;
					return *this;
				}

				{{iterator_name}} operator--(int) {
					{{iterator_name}} temp(*this);
					--*this;
					return temp;
				}
		};

		{{iterator_name}} begin() {
			return {{iterator_name}}(_arr);
		}

		{{iterator_name}} end() {
			return {{iterator_name}}(_arr + _n);
		}
};
