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

@app.route("/state")
def state():
    return render_template("patterns/state.html", title="State", inpValueField1="States", inpValueField2="Functions")

@app.route("/policy")
def policy():
    return render_template("patterns/policy.html", title="Policy", inpValueField1="Policies", inpValueField2="Functions")

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

@app.route("/codeCreateForState", methods=["POST"])
def codeCreateForState():
    try:
        statesList = request.form.getlist("statesList")[0].split(',')
        retType = request.form.getlist("retType")
        funcName = request.form.getlist("funcName")
        paramTypeList = request.form.getlist("paramTypeList")
        paramNameList = request.form.getlist("paramNameList")
        fileType = request.form.get("fileType")
        print("statesList:",statesList)
        print("retType:",retType)
        print("funcName:",funcName)
        print("paramTypeList:",paramTypeList)
        print("paramNameList:",paramNameList)
        print("fileType:",fileType)
        
        # create json to be passed to State class
        inpData = {}
        inpData['pattern'] = 'state'
        inpData['states'] = []
        for state in statesList:
            inpData['states'].append({'name': state})
        
        inpData['functions'] = []

        for i in range(len(funcName)):
            function = {}
            function['name'] = funcName[i]
            function['param_types'] = paramTypeList[i].split(',')
            function['param_names'] = paramNameList[i].split(',')
            function['return'] = retType[i]
            inpData['functions'].append(function)
        
        s = render.State(json.loads(json.dumps(inpData)))
        s.render()
        flash("Files for State Pattern are created!")

        return redirect(url_for("codeDownload",
                                filename="State"+fileType, 
                                patternType="state", 
                                fileType=fileType))
    except Exception as e:
        print("Exception:",e)
        return (render_template("index.html",isError=True,errorMessage="Please create code by choosing a pattern first."),302)

@app.route("/codeCreateForPolicy", methods=["POST"])
def codeCreateForPolicy():
    try:
        policiesList = request.form.getlist("policiesList")[0].split(',')
        retType = request.form.getlist("retType")
        funcName = request.form.getlist("funcName")
        paramTypeList = request.form.getlist("paramTypeList")
        paramNameList = request.form.getlist("paramNameList")
        fileType = request.form.get("fileType")
        print("policiesList:",policiesList)
        print("retType:",retType)
        print("funcName:",funcName)
        print("paramTypeList:",paramTypeList)
        print("paramNameList:",paramNameList)
        print("fileType:",fileType)

        # create json to be passed to Policy class
        inpData = {}
        inpData['pattern'] = 'policy'
        inpData['policies'] = []
        for policy in policiesList:
            inpData['policies'].append({'name': policy})
        
        inpData['functions'] = []

        for i in range(len(funcName)):
            function = {}
            function['name'] = funcName[i]
            function['param_types'] = paramTypeList[i].split(',')
            function['param_names'] = paramNameList[i].split(',')
            function['return'] = retType[i]
            inpData['functions'].append(function)
        
        print(inpData)
        s = render.Policy(json.loads(json.dumps(inpData)))
        s.render()
        flash("Files for Policy Pattern are created!")

        return redirect(url_for("codeDownload",
                                filename="Policy"+fileType, 
                                patternType="policy", 
                                fileType=fileType))
    except Exception as e:
        print("Exception:",e)
        return (render_template("index.html",isError=True,errorMessage="Please create code by choosing a pattern first."),302)

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
