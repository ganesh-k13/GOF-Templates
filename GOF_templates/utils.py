import json
from pprint import pprint

def dummy_input(pattern = None):
	return json.dumps( {'pattern': 'state',
					   'states':[{'name': 'S1'},
								 {'name': 'S2'},
								 {'name': 'S3'}
								],
						'functions':[{'name': 'f1', 'params':'int, float', 'return': 'void'},
									 {'name': 'f2', 'params':'string, float, int', 'return': 'double'}]
					   }
					 )

def get_input():
	return json.loads(dummy_input())

if __name__ == '__main__':
	pprint(get_input())