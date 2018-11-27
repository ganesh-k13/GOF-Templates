import json
import pytest
import pytest_flask
from server.flaskr import app
from flask import url_for, jsonify

class TestApp:

    def test_index(self, client):
        res = client.get(url_for('home'))
        assert res.status_code == 200

    def test_code_create(self, client):
        res = client.get(url_for('home'))
        assert res.status_code == 200

    def test_invalid_code_download(self, client):
        res = client.get(url_for('codeDownload',
                                filename="a.pdf",
                                patternType="state",
                                fileType=".pdf"
                        ))
        assert res.status_code == 302

    def test_valid_code_download(self, client):
        for fileType in list(app.config["ALLOWED_COMPRESSED_FILE_EXTENSIONS"]):
            res = client.get(url_for('codeDownload',
                                    filename="code"+fileType,
                                    patternType="state",
                                    fileType=fileType
                            ))
            assert res.status_code == 200
        
    def test_invalid_code_create(self,client):
        # improve this test
        mimetype = "application/x-www-form-urlencoded"
        headers = {
            "Content-Type": mimetype,
            "Accept": mimetype
        }
        data = {
            "key1":"value1",
        }
        url = "/codeCreate"

        response = client.post(url, data=json.dumps(data), headers=headers)

        assert response.status_code == 302

    def test_valid_code_create(self,client):
        for fileType in list(app.config["ALLOWED_COMPRESSED_FILE_EXTENSIONS"]):
            mimetype = "application/x-www-form-urlencoded"
            headers = {
                "Content-Type": mimetype
            }
            data = {
                "statesList" : ["a,b,c,d"],
                "retType" : ["int","float"],
                "funcName" : ["f1","f2"],
                "paramTypeList" : ["pt1,pt2,pt3,pt4","apt1,apt2,apt3,apt4"],
                "paramNameList" : ["pn1,pn2,pn3,pn4","apn1,apn2,apn3,apn4"],
                "fileType" : fileType
            }

            url = "/codeCreate"

            response = client.post(url, data=data, headers=headers,follow_redirects=True)
            assert response.status_code == 200