from server.flaskr import app

from flask import Flask,render_template,redirect,url_for,flash, redirect, request, session, abort, jsonify, Response, send_from_directory,send_file
from werkzeug import secure_filename
import os
import datetime
import json
import sys

# Custom imports
from GOF_templates import render

from server.flaskr import utils

app.secret_key = 'secretkeyhereplease'

@app.route("/")
def home():
	return render_template("index.html",title="GOF-Templates",isError=False, errorMessage=False)


@app.route("/abstractFactory")
def abstractFactory():
	return render_template("patterns/abstractFactory.html", title="Abstract Factory")

@app.route("/adapter")
def adapter():
	return render_template("patterns/adapter.html", title="Adapter")

@app.route("/bridge")
def bridge():
	return render_template("patterns/bridge.html", title="Bridge")

@app.route("/builder")
def builder():
	return render_template("patterns/builder.html", title="Mediator")

@app.route("/chainOfResponsibility")
def chainOfResponsibility():
	return render_template("patterns/chainOfResponsibility.html", title="Chain Of Responsibility")

@app.route("/command")
def command():
	return render_template("patterns/command.html", title="Command")

@app.route("/composite")
def composite():
	return render_template("patterns/composite.html", title="Composite")

@app.route("/decorator")
def decorator():
	return render_template("patterns/decorator.html", title="Decorator")

@app.route("/facade")
def facade():
	return render_template("patterns/facade.html", title="Facade")

@app.route("/factory")
def factory():
	return render_template("patterns/factory.html", title="Factory")

@app.route("/flyweight")
def flyweight():
	return render_template("patterns/flyweight.html", title="Flyweight")

@app.route("/interpreter")
def interpreter():
	return render_template("patterns/interpreter.html", title="Interpreter")

@app.route("/iterator")
def iterator():
	return render_template("patterns/iterator.html", title="Iterator")

@app.route("/mediator")
def mediator():
	return render_template("patterns/mediator.html", title="Mediator")

@app.route("/memento")
def memento():
	return render_template("patterns/memento.html", title="Memento")

@app.route("/observer")
def observer():
	return render_template("patterns/observer.html", title="Observer")

@app.route("/policy")
def policy():
	return render_template("patterns/policy.html", title="Policy", inpValueField1="Policies", inpValueField2="Functions")

@app.route("/prototype")
def prototype():
	return render_template("patterns/prototype.html", title="Prototype")

@app.route("/proxy")
def proxy():
	return render_template("patterns/proxy.html", title="Proxy")

@app.route("/singleton")
def singleton():
	return render_template("patterns/singleton.html", title="Singleton")

@app.route("/state")
def state():
	return render_template("patterns/state.html", title="State", inpValueField1="States", inpValueField2="Functions")

@app.route("/templateMethod")
def templateMethod():
	return render_template("patterns/templateMethod.html", title="Template Method")

@app.route("/visitor")
def visitor():
	return render_template("patterns/visitor.html", title="Visitor")


@app.route("/commonCodeCreate",methods=["POST"])
def commonCodeCreate():
	payload = request.get_json()
	session["fileType"] = ".tar.gz"
	
	if(len(payload["fileType"])<=8): # else, use what user chose
		session["fileType"] = payload["fileType"]
	
	del payload["fileType"]

	print("Payload Data: ", payload)
	print("Session Data: ", session)

	if(payload["pattern"] == "state"): # See if there's a way to avoid this via inheritance
		session["pattern"] = "state"
		s = render.State(json.loads(json.dumps(payload)))
		s.render()

	elif(payload["pattern"] == "iterator"): # See if there's a way to avoid this via inheritance
		session["pattern"] = "iterator"
		s = render.Iterator(json.loads(json.dumps(payload)))
		s.render()
    
	elif(payload["pattern"] == "policy"):
		session["pattern"] = "policy"
		s = render.Policy(json.loads(json.dumps(payload)))
		s.render()
	
	print("Session Data: ", session)

	return jsonify({
			"success":True
		})


@app.route("/downloadCode",methods=["POST"])
def downloadCode():
	return redirect(url_for("codeDownload",
						filename=session.get("pattern") + session.get("fileType"), 
						patternType=session.get("pattern"), 
						fileType=session.get("fileType")))


@app.route("/codeDownload/<path:filename>/<path:patternType>/<path:fileType>")
def codeDownload(filename,patternType,fileType):
	if(fileType in app.config["ALLOWED_COMPRESSED_FILE_EXTENSIONS"]):
		beautify_cmd = "astyle --style=attach -s4 -xG -xe -YFpCHUSK --recursive ./GOF_templates/templates/output/" + patternType + "/*.cpp,*.h"
		os.system(beautify_cmd)
		os.system("find . -type f -name '*.orig' -exec rm {} +")
		
		utils.checkAndCreateDownloadsFolder()

		utils.makeCompressedfile(outputFilename=os.path.join(app.config['CODE_DOWNLOAD_FOLDER'],filename),
						   sourceDir=os.path.join("./GOF_templates/templates/output/",patternType),
						   fileType=fileType)

		print("Path:",os.path.join(app.config["USER_DOWNLOAD_FOLDER"],filename))

		return send_from_directory(app.config["USER_DOWNLOAD_FOLDER"],filename,as_attachment=True)
	else:
		print("codeDownload error")
		return (render_template("index.html",isError=True,errorMessage="Please create code by choosing a pattern first."),302)
