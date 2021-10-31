# Mini app python-socketio

### Configurar enviroment
```txt
$ virtualenv env
$ source env/bin/activate
(env)$ pip install -r requirements.txt
        :
        :
```
### Ejecución python-socketio mini app
```txt
(env)$ gunicorn -k eventlet -w 1 --reload app:app
```
### Abrir y/o ejecutar el html
```txt
indexl.html (seleccionar navegador de preferencia; chrome, firefox, etc...)
```