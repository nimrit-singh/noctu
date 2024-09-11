from flask import Flask, render_template,request,redirect
import json 
import smtplib
from email.message import EmailMessage
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication
from email.mime.multipart import MIMEMultipart
app = Flask(__name__)
def send(email_id,to_email,quote_email,quote_msg):
    msg = EmailMessage()
    msg['Subject'] = f'from {quote_email}'
    msg['From'] = email_id
    msg['To'] = to_email
    msg.set_content(f'{quote_msg}')
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(email_id, 'tyanoszdfykftptq')
        smtp.send_message(msg)

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
    
@app.route("/email",methods=['POST'])
def email():
    email = request.form['email']
    message = request.form['message']
    send("namitjain2111@gmail.com", "namitjain2111@gmail.com",email,message)
    
    print(email,message)
    return redirect("/")
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")