import json
from pprint import pprint

def dummy_input(pattern = None):
	if(pattern = 'state'):
		return json.dumps( {'pattern': 'state',
						   'states':[{'name': 'S1'},
									 {'name': 'S2'},
									 {'name': 'S3'}
									],
							'functions':[{'name': 'f1', 'param_types':['int', 'float'], 'param_names':['i1', 'f1'], 'return': 'void'},
										 {'name': 'f2', 'param_types':['int', 'double'], 'param_names':['i2', 'd2'], 'return': 'double'}]
						   }
						 )
	
	if(pattern = 'iterator'):
		return json.dumps( {'pattern': 'iterator',
							'container': 'C1',
							'iterator': 'I1'
		
							}
						 )
	
def get_input():
	return json.loads(dummy_input())

if __name__ == '__main__':
	pprint(get_input())