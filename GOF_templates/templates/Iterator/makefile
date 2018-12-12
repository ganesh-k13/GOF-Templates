SDIR=src
IDIR=include
ODIR=obj
FLAGS=-std=c++11

test: $(ODIR)/test.o $(ODIR)/container.o 
	$(CXX) $(ODIR)/test.o $(ODIR)/container.o  -o test.out $(FLAGS)

$(ODIR)/test.o: test.cpp $(IDIR)/container.h $(IDIR)/utils.h
	$(CXX) -c test.cpp -o $(ODIR)/test.o $(FLAGS)

$(ODIR)/container.o: $(SDIR)/container.cpp $(IDIR)/container.h
	$(CXX) -c $(SDIR)/container.cpp -o $(ODIR)/container.o $(FLAGS)

clean:
	rm -rf $(ODIR)/*.o ||:
	rm -rf test.out ||:
