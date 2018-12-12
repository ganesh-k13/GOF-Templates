#include "../include/carray.h"


template<class T>
CArray<T>::CArray(int n)
: _arr(new T[n]), _n(n) {

}

template<class T>
CArray<T>::~CArray() {
    delete [] _arr;
}


template class CArray<int>;
template class CArray<float>;
template class CArray<std::string> ;
