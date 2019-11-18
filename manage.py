# -*- coding=utf8-*-

from flask import Flask, render_template

app = Flask(__name__,static_folder='./dist/static', template_folder='./dist')

@app.route('/')
def index():
    return render_template('index.html')
	
	
app.run(host="0.0.0.0", debug=False, port=9000)