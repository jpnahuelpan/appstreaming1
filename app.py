import socketio
from random import randint
import time
"""
Author: Juan Pablo Nahuelpán
Aplicación basica para el uso de python-socketio.
"""

sio = socketio.Server(cors_allowed_origins='*')
app = socketio.WSGIApp(sio)


@sio.event
def connect(sid, environ):
    print(sid, 'connected')


@sio.event
def disconnect(sid):
    print(sid, 'disconnected')


@sio.event
def send(sid, data):
    time.sleep(1)
    print(data)
    new_point = randint(0, 15)
    sio.emit('message', {'new_point': new_point}, to=sid)
