import utils
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
	
	def render(self):
		# Create output
		try: 
			os.makedirs('templates/output')
			os.makedirs('templates/output/state')
			os.makedirs('templates/output/state/include')
			os.makedirs('templates/output/state/obj')
			os.makedirs('templates/output/state/src')
		except(FileExistsError):
			pass
		
		# State.h
		with open('templates/state/include/state.h', 'r') as f:
			template = Template(f.read())
		
		with open('templates/output/state/include/state.h', 'w') as f:
			f.write(template.render(functions=self.meta['functions'], states=self.meta['states']))
		
		# State.cpp
		with open('templates/state/src/state.cpp', 'r') as f:
			template = Template(f.read())
		
		with open('templates/output/state/src/state.cpp', 'w') as f:
			f.write(template.render(functions=self.meta['functions'], states=self.meta['states']))
		
		# Context.h
		with open('templates/state/include/context.h', 'r') as f:
			template = Template(f.read())
		
		with open('templates/output/state/include/context.h', 'w') as f:
			f.write(template.render(functions=self.meta['functions']))
		
		# Context.cpp
		with open('templates/state/src/context.cpp', 'r') as f:
			template = Template(f.read())
		
		with open('templates/output/state/src/context.cpp', 'w') as f:
			f.write(template.render(functions=self.meta['functions']))
		
		# makefile
		with open('templates/state/makefile', 'r') as f:
			template = Template(f.read())
		
		with open('templates/output/state/makefile', 'w') as f:
			f.write(template.render())
		
		#test.cpp
		with open('templates/state/test.cpp', 'r') as f:
			template = Template(f.read())
		
		with open('templates/output/state/test.cpp', 'w') as f:
			f.write(template.render(functions=self.meta['functions'], states=self.meta['states']))
		
		
if __name__ == '__main__':
	s = State(utils.get_input())
	s.render()