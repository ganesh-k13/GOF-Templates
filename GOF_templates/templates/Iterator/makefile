SDIR=src
IDIR=include
ODIR=obj
FLAGS=-std=c++11

test: $(ODIR)/test.o $(ODIR)/carray.o 
	$(CXX) $(ODIR)/test.o $(ODIR)/carray.o  -o test.out $(FLAGS)

$(ODIR)/test.o: test.cpp $(IDIR)/carray.h $(IDIR)/utils.h
	$(CXX) -c test.cpp -o $(ODIR)/test.o $(FLAGS)

$(ODIR)/carray.o: $(SDIR)/carray.cpp $(IDIR)/carray.h
	$(CXX) -c $(SDIR)/carray.cpp -o $(ODIR)/carray.o $(FLAGS)

clean:
	rm -rf $(ODIR)/*.o ||:
	rm -rf test.out ||:
