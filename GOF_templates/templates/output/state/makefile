SDIR=src
IDIR=include
ODIR=obj
FLAGS=-std=c++11

test: $(ODIR)/test.o $(ODIR)/context.o $(ODIR)/state.o
	$(CXX) $(ODIR)/test.o $(ODIR)/context.o $(ODIR)/state.o -o test.out $(FLAGS)

$(ODIR)/test.o: test.cpp $(IDIR)/context.h $(IDIR)/state.h
	$(CXX) -c test.cpp -o $(ODIR)/test.o $(FLAGS)

$(ODIR)/context.o: $(SDIR)/context.cpp $(IDIR)/context.h $(ODIR)/state.o
	$(CXX) -c $(SDIR)/context.cpp $(ODIR)/state.o -o $(ODIR)/context.o $(FLAGS)

$(ODIR)/state.o: $(SDIR)/state.cpp $(IDIR)/state.h
	$(CXX) -c $(SDIR)/state.cpp -o $(ODIR)/state.o $(FLAGS)

clean:
	rm -rf $(ODIR)/*.o ||:
	rm -rf test.out ||: