import urllib.request, urllib.parse, urllib.error
import json

url = input('Enter url: ')
if len(url) < 1: url = "http://py4e-data.dr-chuck.net/comments_842606.json"

print('Retrieving', url)
uh = urllib.request.urlopen(url)

data = uh.read()
print('Retrieved', len(data), 'characters')
#print(data.decode())

info = json.loads(data)
print('User count:', len(info['comments']))

suma=list()

for item in info['comments']:
    #print('Name:', item['name'])
    #print('Count:', item['count'])
    count=int(item['count'])
    print(count)
    suma.append(count)

print('sum: ', sum(suma))
