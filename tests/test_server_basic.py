import json
import pytest
import pytest_flask
from server.flaskr import app
from flask import url_for, jsonify

class TestApp:

    def test_index(self, client):
        res = client.get(url_for('home'))
        assert res.status_code == 200

    def test_state_page(self, client):
        res = client.get(url_for('state'))
        assert res.status_code == 200

    def test_policy_page(self, client):
        res = client.get(url_for('policy'))
        assert res.status_code == 200
    
