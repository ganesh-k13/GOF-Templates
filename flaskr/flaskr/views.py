from hawkeye import app

from flask import Flask,render_template,redirect,url_for,flash, redirect, request, session, abort, jsonify, Response
from werkzeug import secure_filename
from flask import send_from_directory
import os
import datetime

app.secret_key = 'secretkeyhereplease'

@app.route("/")
def home():
    try:
        res = session["{0}LoggedIn".format(session["accType"])]
        return render_template("Home/home.html",title="User",userLoggedIn=True)
    except Exception as e:
        return render_template("Home/home.html",title="User",userLoggedIn=False)
