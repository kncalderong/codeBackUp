# To run this, download the BeautifulSoup zip file
# http://www.py4e.com/code3/bs4.zip
# and unzip it in the same directory as this file

import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup
import ssl

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter - ')
if len(url) < 1: url="http://py4e-data.dr-chuck.net/known_by_Fikret.html"
html = urllib.request.urlopen(url, context=ctx).read()
soup = BeautifulSoup(html, 'html.parser')

# Retrieve all of the anchor tags
names=list()

tags = soup('a')
tag = tags[17]
href=tag.get('href', None)

print(href)
inicio=href.find("by")
final=href.find("html")
name=href[inicio+3:final-1]
names.append(name)
print(names)

### inicio cycles
cycles= (1,2,3,4,5,6)

for num in cycles:
    html = urllib.request.urlopen(href, context=ctx).read()
    soup = BeautifulSoup(html, 'html.parser')
    tags = soup('a')
    tag = tags[17]
    href = tag.get('href', None)
    print(href)
    ## hasta aqui va bien :v
    inicio=href.find("by")
    final=href.find("html")
    name=href[inicio+3:final-1]

    print(name)
    names.append(name)

print(names)
print('the last name of this page is:',names[len(names)-1])
