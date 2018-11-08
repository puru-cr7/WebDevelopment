from django.shortcuts import render
from django.core.mail import send_mail
from django.http import HttpResponse
import datetime
from django.core.mail import EmailMessage

# Create your views here.
def hello(request):
   today = datetime.datetime.now().date()
   daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
   return render(request, "index.html", {"today" : today, "days_of_week" : daysOfWeek})

def sendSimpleEmail(request):
   res = send_mail("hello cute", "test mail, no need to reply", "from@gmail.com", ['to@gmail.com'])
   return HttpResponse('%s'%res)

def sendEmailWithAttach(request):
   html_content = "Comment tu vas?"
   email = EmailMessage("my subject", html_content, "from@gmail.com", ['to@gmail.com'])
   email.content_subtype = "html"
   
   fd = open('manage.py', 'r')
   email.attach('manage.py', fd.read(), 'text/plain')
   
   res = email.send()
   return HttpResponse('%s'%res)