# import utils
from jinja2 import Template
import os, sys

class Pattern:
	def __init__(self, meta):
		self.meta = meta
	
	def render(self):
		raise NotImplementedError("Subclass must implement abstract method")
	
class State(Pattern):
	
	def __init__(self, meta):
		Pattern.__init__(self, meta)
		for fn in self.meta['functions']:
			fn['params'] = list(zip(fn['param_types'], fn['param_names']))
	
	def render(self):
		# Create output
		dirname = os.path.dirname(os.path.abspath(__file__))
		try: 
			os.makedirs(dirname + '/templates/output')
			os.makedirs(dirname + '/templates/output/state')
			os.makedirs(dirname + '/templates/output/state/include')
			os.makedirs(dirname + '/templates/output/state/obj')
			os.makedirs(dirname + '/templates/output/state/src')

			print("\n\n\nNew Files Created!\n\n\n")
		except(FileExistsError):
			print("\n\n\nNew Files NOT Created! Delete existing files first! \n\n\n")
			pass
		
		# State.h
		with open(dirname + '/templates/state/include/state.h', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/state/include/state.h', 'w') as f:
			f.write(template.render(functions=self.meta['functions'], states=self.meta['states']))
		
		# State.cpp
		with open(dirname + '/templates/state/src/state.cpp', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/state/src/state.cpp', 'w') as f:
			f.write(template.render(functions=self.meta['functions'], states=self.meta['states']))
		
		# Context.h
		with open(dirname + '/templates/state/include/context.h', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/state/include/context.h', 'w') as f:
			f.write(template.render(functions=self.meta['functions']))
		
		# Context.cpp
		with open(dirname + '/templates/state/src/context.cpp', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/state/src/context.cpp', 'w') as f:
			f.write(template.render(functions=self.meta['functions']))
		
		# makefile
		with open(dirname + '/templates/state/makefile', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/state/makefile', 'w') as f:
			f.write(template.render())
		
		#test.cpp
		with open(dirname + '/templates/state/test.cpp', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/state/test.cpp', 'w') as f:
			f.write(template.render(functions=self.meta['functions'], states=self.meta['states']))
