# import utils
import json
from jinja2 import Template
import os, sys

class Pattern:
	def __init__(self, meta):
		self.meta = meta
		# Create output
		self.dirname = os.path.dirname(os.path.abspath(__file__))
		try:
			os.makedirs(self.dirname + '/templates/output')
		except(FileExistsError):
			# Only folder exists, the file can still be modified
			# print("\n\nNew Files NOT Created! Delete existing files first! \n\n")
			pass
		
		try: 
			os.makedirs(self.dirname + '/templates/output/%s'%self.meta['pattern'])
			os.makedirs(self.dirname + '/templates/output/%s/include'%self.meta['pattern'])
			os.makedirs(self.dirname + '/templates/output/%s/obj'%self.meta['pattern'])
			os.makedirs(self.dirname + '/templates/output/%s/src'%self.meta['pattern'])
			print("\n\nNew Folders Created!\n\n") # New folders created, not files
		except(FileExistsError):
			# Only folder exists, the file can still be modified
			# print("\n\nNew Files NOT Created! Delete existing files first! \n\n")
			pass
			
		# Create meta file
		with open(self.dirname + '/templates/output/%s/meta.json'%self.meta['pattern'], 'w') as f:
			print(self.meta)
			json.dump(self.meta, f, indent=4)
	
	def render(self):
		raise NotImplementedError("Subclass must implement abstract method")
	
class State(Pattern):
	
	def __init__(self, meta):
		Pattern.__init__(self, meta)
		for fn in self.meta['functions']:
			fn['params'] = list(zip(fn['param_types'], fn['param_names']))
	
	def render(self):		
		# State.h
		with open(self.dirname + '/templates/State/include/state.h', 'r') as f:
			template = Template(f.read())
		
		with open(self.dirname + '/templates/output/state/include/state.h', 'w') as f:
			f.write(template.render(functions=self.meta['functions'], states=self.meta['states']))
		
		# State.cpp
		with open(self.dirname + '/templates/State/src/state.cpp', 'r') as f:
			template = Template(f.read())
		
		with open(self.dirname + '/templates/output/state/src/state.cpp', 'w') as f:
			f.write(template.render(functions=self.meta['functions'], states=self.meta['states']))
		
		# Context.h
		with open(self.dirname + '/templates/State/include/context.h', 'r') as f:
			template = Template(f.read())
		
		with open(self.dirname + '/templates/output/state/include/context.h', 'w') as f:
			f.write(template.render(functions=self.meta['functions']))
		
		# Context.cpp
		with open(self.dirname + '/templates/State/src/context.cpp', 'r') as f:
			template = Template(f.read())
		
		with open(self.dirname + '/templates/output/state/src/context.cpp', 'w') as f:
			f.write(template.render(functions=self.meta['functions']))
		
		# makefile
		with open(self.dirname + '/templates/State/makefile', 'r') as f:
			template = Template(f.read())
		
		with open(self.dirname + '/templates/output/state/makefile', 'w') as f:
			f.write(template.render())
		
		#test.cpp
		with open(self.dirname + '/templates/State/test.cpp', 'r') as f:
			template = Template(f.read())
		
		with open(self.dirname + '/templates/output/state/test.cpp', 'w') as f:
			f.write(template.render(functions=self.meta['functions'], states=self.meta['states']))

class Policy(Pattern):
	
	def __init__(self, meta):
		Pattern.__init__(self, meta)
		for fn in self.meta['functions']:
			fn['params'] = list(zip(fn['param_types'], fn['param_names']))
	
	def render(self):
		# policy.h
		with open(self.dirname + '/templates/Policy/include/policy.h', 'r') as f:
			template = Template(f.read())
		
		with open(self.dirname + '/templates/output/policy/include/policy.h', 'w') as f:
			f.write(template.render(functions=self.meta['functions'], policies=self.meta['policies']))
		
		# policy.cpp
		with open(self.dirname + '/templates/Policy/src/policy.cpp', 'r') as f:
			template = Template(f.read())
		
		with open(self.dirname + '/templates/output/policy/src/policy.cpp', 'w') as f:
			f.write(template.render(functions=self.meta['functions'], policies=self.meta['policies']))
		
		# context.h
		with open(self.dirname + '/templates/Policy/include/context.h', 'r') as f:
			template = Template(f.read())
		
		with open(self.dirname + '/templates/output/policy/include/context.h', 'w') as f:
			f.write(template.render(functions=self.meta['functions']))
		
		# context.cpp
		with open(self.dirname + '/templates/Policy/src/context.cpp', 'r') as f:
			template = Template(f.read())
		
		with open(self.dirname + '/templates/output/policy/src/context.cpp', 'w') as f:
			f.write(template.render(functions=self.meta['functions']))
		
		# makefile
		with open(self.dirname + '/templates/Policy/makefile', 'r') as f:
			template = Template(f.read())
		
		with open(self.dirname + '/templates/output/policy/makefile', 'w') as f:
			f.write(template.render())
		
		#test.cpp
		with open(self.dirname + '/templates/Policy/test.cpp', 'r') as f:
			template = Template(f.read())
		
		with open(self.dirname + '/templates/output/policy/test.cpp', 'w') as f:
			f.write(template.render(functions=self.meta['functions'], policies=self.meta['policies']))

class Iterator(Pattern):
	
	def __init__(self, meta):
		Pattern.__init__(self, meta)
	
	def render(self):
		
		# container.h
		with open(self.dirname + '/templates/Iterator/include/container.h', 'r') as f:
			template = Template(f.read())
		
		with open(self.dirname + '/templates/output/iterator/include/container.h', 'w') as f:
			f.write(template.render(container_name=self.meta['container_name'], iterator_name=self.meta['iterator_name']))
		
		# container.cpp
		with open(self.dirname + '/templates/Iterator/src/container.cpp', 'r') as f:
			template = Template(f.read())
		
		with open(self.dirname + '/templates/output/iterator/src/container.cpp', 'w') as f:
			f.write(template.render(container_name=self.meta['container_name'], supported_types=self.meta['supported_types']))
		
		# utils.h
		with open(self.dirname + '/templates/Iterator/include/utils.h', 'r') as f:
			template = Template(f.read())
		
		with open(self.dirname + '/templates/output/iterator/include/utils.h', 'w') as f:
			f.write(template.render())
		
		# makefile
		with open(self.dirname + '/templates/Iterator/makefile', 'r') as f:
			template = Template(f.read())
		
		with open(self.dirname + '/templates/output/iterator/makefile', 'w') as f:
			f.write(template.render())
		
		#test.cpp
		with open(self.dirname + '/templates/Iterator/test.cpp', 'r') as f:
			template = Template(f.read())
		
		with open(self.dirname + '/templates/output/iterator/test.cpp', 'w') as f:
			f.write(template.render(container_name=self.meta['container_name']))
		
		
if __name__ == '__main__':
	payload = json.dumps( {'pattern': 'iterator',
							'container_name': 'C1',
							'iterator_name': 'I1',
							'supported_types': ['int', 'float', 'std::string']
							}
						 )
						 
	i = Iterator(json.loads(payload))
	i.render()