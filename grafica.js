var arrayLength = 30
var newArray = []

for(var i = 0; i < arrayLength; i++) {
    var y = Math.round(Math.random()*10) + 1
    newArray[i] = y
}

Plotly.plot('graph', [{
y: newArray,
mode: 'lines',
line: {color: '#80CAF6'}
}]);
sio.on('message', (data) => {
    console.log(data);
    var y = data['new_point'];
    newArray = newArray.concat(y);
    newArray.splice(0, 1);            
    var data_update = {
        y: [newArray]
    };            
    Plotly.update('graph', data_update);
    sio.emit('send', "Insertado exitosamente!");
});