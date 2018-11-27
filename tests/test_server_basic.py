import pytest
import pytest_flask
from server.flaskr import app
from flask import url_for

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
        for fileType in app.config["ALLOWED_COMPRESSED_FILE_EXTENSIONS"]:
            res = client.get(url_for('codeDownload',
                                    filename="code"+fileType,
                                    patternType="state",
                                    fileType=fileType
                            ))
            assert res.status_code == 200
        