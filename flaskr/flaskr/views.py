from flaskr import app

from flask import Flask,render_template,redirect,url_for,flash, redirect, request, session, abort, jsonify, Response
from werkzeug import secure_filename
from flask import send_from_directory
import os
import datetime

app.secret_key = 'secretkeyhereplease'

@app.route("/")
def home():
	return render_template("index.html")


@app.route("/state")
def state():
	return render_template("patterns/state.html")

@app.route("/strategy")
def strategy():
	return render_template("patterns/strategy.html")

@app.route("/singleton")
def singleton():
	return render_template("patterns/singleton.html")

@app.route("/decorator")
def decorator():
	return render_template("patterns/decorator.html")

@app.route("/adapter")
def adapter():
	return render_template("patterns/adapter.html")

@app.route("/mediator")
def mediator():
	return render_template("patterns/mediator.html")

@app.route("/iterator")
def iterator():
	return render_template("patterns/iterator.html")