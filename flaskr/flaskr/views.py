from flaskr import app

from flask import Flask,render_template,redirect,url_for,flash, redirect, request, session, abort, jsonify, Response
from werkzeug import secure_filename
from flask import send_from_directory
import os
import datetime

app.secret_key = 'secretkeyhereplease'

@app.route("/")
def home():
	return render_template("index.html",title="GOF-Templates")


@app.route("/state")
def state():
	return render_template("patterns/state.html", title="State", inpValueField1="States", inpValueField2="Functions")

@app.route("/strategy")
def strategy():
	return render_template("patterns/strategy.html", title="Strategy")

@app.route("/singleton")
def singleton():
	return render_template("patterns/singleton.html", title="Singleton")

@app.route("/decorator")
def decorator():
	return render_template("patterns/decorator.html", title="Decorator")

@app.route("/adapter")
def adapter():
	return render_template("patterns/adapter.html", title="Adapter")

@app.route("/mediator")
def mediator():
	return render_template("patterns/mediator.html", title="Mediator")

@app.route("/iterator")
def iterator():
	return render_template("patterns/iterator.html", title="Iterator")

@app.route("/codeDownload",methods=["POST"])
def codeDownload():
	
	statesList = request.form.getlist("statesList")
	retType = request.form.getlist("retType")
	funcName = request.form.getlist("funcName")
	paramTypeList = request.form.getlist("paramTypeList")
	paramNameList = request.form.getlist("paramNameList")

	print(statesList)
	print(retType)
	print(funcName)
	print(paramTypeList)
	print(paramNameList)

	# Below is a temporary representation, it's not final.
	inpData = {
		"statesList" : statesList,
		"retType" : retType,
		"funcName" : funcName,
		"paramTypeList" : paramTypeList,
		"paramNameList" : paramNameList
	}

	# -------------------------------------
	# write the program to send json
	# module.generateCode(jsonify(inpData))
	# -------------------------------------


	return redirect(url_for("home"))
