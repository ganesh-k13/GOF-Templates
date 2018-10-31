import utils
from jinja2 import Template
import os, sys

class Pattern:
	def __init__(self, meta):
		self.meta = meta
	
	def render(self):
		raise NotImplementedError("Subclass must implement abstract method")
	
class State(Pattern):
	def render(self):
		with open('templates/state/include/state.h') as f:
			template = Template(f.read())
		
		print(template.render(functions=self.meta['functions'], states=self.meta['states']))
		
if __name__ == '__main__':
	s = State(utils.get_input())
	s.render()