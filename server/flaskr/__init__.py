from flask import Flask
import sys
print("----------------------------")
for p in sys.path:
	print(p)
print("----------------------------")

# from ..config import Config
import server.config as config

print(config)
app = Flask(__name__)
# app.config.from_object(Config.DevelopmentConfig)
app.config.from_object(config.DevelopmentConfig)
# print("app.config['DEBUG']:",app.config['DEBUG'])

for key,val in app.config.items():
	print("app.config['{0}']=".format(key),app.config[key])

from server.flaskr import views 
