import requests

def demo_python(event, context):
  requests.get('https://www.google.com')
  return "Go AppDefender!"