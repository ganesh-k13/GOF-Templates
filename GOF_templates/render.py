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

			print("\n\nNew Files Created!\n\n")
		except(FileExistsError):
			print("\n\nNew Files NOT Created! Delete existing files first! \n\n")
			pass
		
		# State.h
		with open(dirname + '/templates/State/include/state.h', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/state/include/state.h', 'w') as f:
			f.write(template.render(functions=self.meta['functions'], states=self.meta['states']))
		
		# State.cpp
		with open(dirname + '/templates/State/src/state.cpp', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/state/src/state.cpp', 'w') as f:
			f.write(template.render(functions=self.meta['functions'], states=self.meta['states']))
		
		# Context.h
		with open(dirname + '/templates/State/include/context.h', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/state/include/context.h', 'w') as f:
			f.write(template.render(functions=self.meta['functions']))
		
		# Context.cpp
		with open(dirname + '/templates/State/src/context.cpp', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/state/src/context.cpp', 'w') as f:
			f.write(template.render(functions=self.meta['functions']))
		
		# makefile
		with open(dirname + '/templates/State/makefile', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/state/makefile', 'w') as f:
			f.write(template.render())
		
		#test.cpp
		with open(dirname + '/templates/State/test.cpp', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/state/test.cpp', 'w') as f:
			f.write(template.render(functions=self.meta['functions'], states=self.meta['states']))

class Policy(Pattern):
	
	def __init__(self, meta):
		Pattern.__init__(self, meta)
		for fn in self.meta['functions']:
			fn['params'] = list(zip(fn['param_types'], fn['param_names']))
	
	def render(self):
		# Create output
		dirname = os.path.dirname(os.path.abspath(__file__))
		print("\n\nDirname for Policy: {0}\n\n".format(dirname))
		try: 
			# os.makedirs(dirname + '/templates/output')
			os.makedirs(dirname + '/templates/output/policy')
			os.makedirs(dirname + '/templates/output/policy/include')
			os.makedirs(dirname + '/templates/output/policy/obj')
			os.makedirs(dirname + '/templates/output/policy/src')

			print("\n\nNew Files Created!\n\n")
		except(FileExistsError):
			print("\n\nNew Files NOT Created! Delete existing files first! \n\n")
			pass
		
		# policy.h
		with open(dirname + '/templates/Policy/include/policy.h', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/policy/include/policy.h', 'w') as f:
			f.write(template.render(functions=self.meta['functions'], policies=self.meta['policies']))
		
		# policy.cpp
		with open(dirname + '/templates/Policy/src/policy.cpp', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/policy/src/policy.cpp', 'w') as f:
			f.write(template.render(functions=self.meta['functions'], policies=self.meta['policies']))
		
		# context.h
		with open(dirname + '/templates/Policy/include/context.h', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/policy/include/context.h', 'w') as f:
			f.write(template.render(functions=self.meta['functions']))
		
		# context.cpp
		with open(dirname + '/templates/Policy/src/context.cpp', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/policy/src/context.cpp', 'w') as f:
			f.write(template.render(functions=self.meta['functions']))
		
		# makefile
		with open(dirname + '/templates/Policy/makefile', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/policy/makefile', 'w') as f:
			f.write(template.render())
		
		#test.cpp
		with open(dirname + '/templates/Policy/test.cpp', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/policy/test.cpp', 'w') as f:
			f.write(template.render(functions=self.meta['functions'], policies=self.meta['policies']))

class Iterator(Pattern):
	
	def __init__(self, meta):
		Pattern.__init__(self, meta)
	
	def render(self):
		# Create output
		dirname = os.path.dirname(os.path.abspath(__file__))
		try: 
			os.makedirs(dirname + '/templates/output')
			os.makedirs(dirname + '/templates/output/Iterator')
			os.makedirs(dirname + '/templates/output/Iterator/include')
			os.makedirs(dirname + '/templates/output/Iterator/obj')
			os.makedirs(dirname + '/templates/output/Iterator/src')

			print("\n\nNew Files Created!\n\n")
		except(FileExistsError):
			print("\n\nNew Files NOT Created! Delete existing files first! \n\n")
			pass
		
		# container.h
		with open(dirname + '/templates/Iterator/include/container.h', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/Iterator/include/container.h', 'w') as f:
			f.write(template.render(container_name=self.meta['container_name'], iterator_name=self.meta['iterator_name']))
		
		# container.cpp
		with open(dirname + '/templates/Iterator/src/container.cpp', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/Iterator/src/container.cpp', 'w') as f:
			f.write(template.render(container_name=self.meta['container_name'], iterator_name=self.meta['iterator_name']))
		
		# utils.h
		with open(dirname + '/templates/Iterator/include/utils.h', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/Iterator/include/utils.h', 'w') as f:
			f.write(template.render())
		
		# makefile
		with open(dirname + '/templates/Iterator/makefile', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/Iterator/makefile', 'w') as f:
			f.write(template.render())
		
		#test.cpp
		with open(dirname + '/templates/State/test.cpp', 'r') as f:
			template = Template(f.read())
		
		with open(dirname + '/templates/output/state/test.cpp', 'w') as f:
			f.write(template.render(container_name=self.meta['container_name']))