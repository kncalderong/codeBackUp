import urllib.request, urllib.parse, urllib.error
import xml.etree.ElementTree as ET
import ssl


# If you have a Google Places API key, enter it here
# api_key = 'AIzaSy___IDByT70'
# https://developers.google.com/maps/documentation/geocoding/intro


# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter location: ')
if len(url) < 1: url = "http://py4e-data.dr-chuck.net/comments_42.xml"

print('Retrieving', url)
uh = urllib.request.urlopen(url, context=ctx)

data = uh.read()
print('Retrieved', len(data), 'characters')
print(data.decode())
tree = ET.fromstring(data)

lst = tree.findall('comments/comment')
print(len(lst))

nums = list()

for item in lst:
    print('Name:', item.find('name').text)
    count = int((item.find('count')).text)
    nums.append(count)

print(nums)
print(sum(nums))
