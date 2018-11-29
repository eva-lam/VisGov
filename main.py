# -*- coding: utf-8 -*-
from os import listdir

def fileReader(prepend, fileName):
    filename = prepend + fileName
    text=''
    with open(filename) as file:
        for row in file:
            text+=row

    text=text.replace(text[3],"")
    print(text[2:])

for filepath in listdir('files'):
    fileReader('files/', filepath)
