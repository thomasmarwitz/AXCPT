from PIL import Image
import os

for file in [file for file in os.listdir() if file.endswith("png")]:
    im = Image.open(file)
    im.crop((0,0,1778,1000-2)).save("new/" + file)