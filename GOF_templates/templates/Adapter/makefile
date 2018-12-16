SDIR=src
IDIR=include
ODIR=obj
FLAGS=-std=c++11

test: $(ODIR)/test.o $(ODIR)/adapter.o 
	$(CXX) $(ODIR)/test.o $(ODIR)/adapter.o -o test.out $(FLAGS)

$(ODIR)/test.o: test.cpp $(IDIR)/adapter.h
	$(CXX) -c test.cpp -o $(ODIR)/test.o $(FLAGS)

$(ODIR)/adapter.o: $(SDIR)/adapter.cpp $(IDIR)/adapter.h
	$(CXX) -c $(SDIR)/adapter.cpp -o $(ODIR)/adapter.o $(FLAGS)

clean:
	rm -rf $(ODIR)/*.o ||:
	rm -rf test.out ||:
