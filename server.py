from flask import Flask
import os

app = Flask(__name__)

@app.route("/")
def root():
    return "Hello world"

@app.route("/play")
def play_music(song="song.mp3"):
    os.system("mpv --no-video --really-quiet {} &".format(song))
    print("Started mpv")
    return "{ \"music\" : \"playing\" }"

@app.route("/stop")
def stop_music():
    os.system("sudo killall -9 mpv")
    print("Killed mpv")
    return "{ \"music\" : \"stopped\" }"

app.run(port=80)

