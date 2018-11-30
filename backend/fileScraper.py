import requests
from bs4 import BeautifulSoup as bs
import urllib2

URL = 'https://www.bundestag.de/ajax/filterlist/de/dokumente/protokolle/plenarprotokolle/plenarprotokolle/-/455046/h_6810466be65964217012227c14bad20f?limit=10&noFilterSet=true'
BASE_URL = 'https://www.bundestag.de'
r = requests.get(URL)

soup = bs(r.text, features="html.parser")
urls = []
names = []
for i, link in enumerate(soup.findAll('a')):
    FULL_URL = BASE_URL + link.get('href')
    if FULL_URL[-4:] == '.txt':
        print(FULL_URL)
        urls.append(FULL_URL)
        names.append(soup.select('a')[i].attrs['href'][-14:])

names_url = zip(names, urls)

for name, url in names_url:
    print url
    rq = urllib2.Request(url)
    res = urllib2.urlopen(rq)
    txt = open('files/' + name, 'wb')
    txt.write(res.read())
    txt.close()