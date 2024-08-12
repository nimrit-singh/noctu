from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/blogs")
def allBLog():
    return render_template("blog_list.html")

@app.route("/blog/:id")
def blog(id):
    return render_template("blog.html")

@app.route("/test-blog")
def t():
    return render_template("blog.html")
    

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")