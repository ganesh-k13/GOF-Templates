SDIR=src
IDIR=include
ODIR=obj
FLAGS=-std=c++11

test: $(ODIR)/test.o $(ODIR)/context.o $(ODIR)/policy.o
	$(CXX) $(ODIR)/test.o $(ODIR)/context.o $(ODIR)/policy.o -o test.out $(FLAGS)

$(ODIR)/test.o: test.cpp $(IDIR)/context.h $(IDIR)/policy.h
	$(CXX) -c test.cpp -o $(ODIR)/test.o $(FLAGS)

$(ODIR)/context.o: $(SDIR)/context.cpp $(IDIR)/context.h $(ODIR)/policy.o
	$(CXX) -c $(SDIR)/context.cpp $(ODIR)/policy.o -o $(ODIR)/context.o $(FLAGS)

$(ODIR)/policy.o: $(SDIR)/policy.cpp $(IDIR)/policy.h
	$(CXX) -c $(SDIR)/policy.cpp -o $(ODIR)/policy.o $(FLAGS)

clean:
	rm -rf $(ODIR)/*.o ||:
	rm -rf test.out ||:
