#include <iostream>
#include <string>

template<class T>
class CArray {
	private:
		int _n;
		T *_arr;
	public:
		CArray(int n);
		~CArray();

		class Iterator {
			private:
				T *p_it_;
			public:
				Iterator(T* p_it) : p_it_(p_it) { }

				T& operator*() {  return *p_it_; }

				bool operator==(const Iterator& rhs) const {
					return p_it_ == rhs.p_it_;
				}

				bool operator!=(const Iterator& rhs) const {
					return !(*this == rhs);
				}

				bool operator<(const Iterator& rhs) const {
					return (this->p_it_)-(rhs.p_it_) <= 0 ? true : false;
				}

				Iterator& operator++() {
					++p_it_;
					return *this;
				}

				Iterator operator++(int) {
					Iterator temp(*this);
					++*this;
					return temp;
				}

				Iterator& operator--() {
					--p_it_;
					return *this;
				}

				Iterator operator--(int) {
					Iterator temp(*this);
					--*this;
					return temp;
				}
		};

		Iterator begin() {
			return Iterator(_arr);
		}

		Iterator end() {
			return Iterator(_arr + _n);
		}
};
