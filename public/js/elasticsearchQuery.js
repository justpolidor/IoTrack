/**
 * Created by justin on 30/06/16.
 */
var localServer='http://localhost:3000/trucks/';
var remoteServer='http://giottogui.cloudapp.net:8000/trucks/';
function getFirstCoordinates(id) {
    var point ;

    switch (id) {
        case 1 :
            point= new google.maps.LatLng(41.95766, 12.56132);
            pericoloso=1;
            non_pericoloso=0;
            libero=0;
            continuo=0;
            break;
        case 2 :
            point= new google.maps.LatLng(41.95731202599423 , 12.56136953830719);
            pericoloso=0;
            libero=0;
            non_pericoloso=1;
            continuo=0;
            break;
        case 3 :
            point= new google.maps.LatLng(41.956937 , 12.561348);
            pericoloso=0;
            non_pericoloso=0;
            libero=1;
            continuo=0;
            break;
        case 4 :
            point= new google.maps.LatLng(41.956937 , 12.561348);
            pericoloso=0;
            non_pericoloso=0;
            libero=0;
            continuo=1;
            break;
    }
    //console.log(non_pericoloso + ' ' + pericoloso +' ' + libero);

    putMarker(id,point);
}

function start() {
    if(non_pericoloso==0 && pericoloso==0 && libero==0 && continuo==0) {
        alert("Seleziona il tipo di carico");
    }
    if(non_pericoloso==1){
        $.ajax({
            //url: 'http://'+remoteServer+'2',
            url: localServer+'2',
            success: function(data) {
                console.log(data);
                var getFromElastic = setInterval(function () {
                    client.search({
                        index: 'truck',
                        type: 'rt',
                        body: {
                            query: {
                                match: {
                                    id: 2
                                }
                            }
                        }
                    }).then(function (resp) {
                        var hits = resp.hits.hits[0]['_source']['location'];
                        putMarker(2, new google.maps.LatLng(hits.lat, hits.lon));
                        console.log(hits);
                    }, function (err) {
                        console.trace(err.message);
                    });
                },2000);
            },
            type: 'GET'
        });
    } else if (pericoloso==1){
        $.ajax({
            //url: remoteServer+'1',
            url: localServer+'1',
            success: function(data) {
                console.log(data);
                var getFromElastic = setInterval(function () {
                    client.search({
                        index: 'truck',
                        type: 'rt',
                        body: {
                            query: {
                                match: {
                                    id: 1
                                }
                            }
                        }
                    }).then(function (resp) {
                        var hits = resp.hits.hits[0]['_source']['location'];
                        putMarker(1, new google.maps.LatLng(hits.lat, hits.lon));
                        console.log(hits);
                    }, function (err) {
                        console.trace(err.message);
                    });
                },2000);
            },
            type: 'GET'
        });
    } else if(libero==1) {
        $.ajax({
            //url: remoteServer+'3',
            url: localServer+'3',
            success: function(data) {
                console.log(data);
                var getFromElastic = setInterval(function () {
                    client.search({
                        index: 'truck',
                        type: 'rt',
                        body: {
                            query: {
                                match: {
                                    id: 3
                                }
                            }
                        }
                    }).then(function (resp) {
                        var hits = resp.hits.hits[0]['_source']['location'];
                        putMarker(3, new google.maps.LatLng(hits.lat, hits.lon));
                        console.log(hits);
                    }, function (err) {
                        console.trace(err.message);
                    });
                },2000);
            },
            type: 'GET'
        });
    } else if(continuo==1) {
        $.ajax({
            //url: remoteServer+'4',
            url: localServer+'4',
            success: function(data) {
                console.log(data);
                var getFromElastic = setInterval(function () {
                    client.search({
                        index: 'truck',
                        type: 'rt',
                        body: {
                            query: {
                                match: {
                                    id: 4
                                }
                            }
                        }
                    }).then(function (resp) {
                        var hits = resp.hits.hits[0]['_source']['location'];
                        putMarker(4, new google.maps.LatLng(hits.lat, hits.lon));
                        console.log(hits);
                    }, function (err) {
                        console.trace(err.message);
                    });
                },2000);
            },
            type: 'GET'
        });
    }

}

function deleteLastRecords() {
    client.bulk({
        body: [
            // action description
            { delete: { _index: 'truck', _type: 'rt', _id: 1 } },
            { delete: { _index: 'truck', _type: 'rt', _id: 2 } },
            { delete: { _index: 'truck', _type: 'rt', _id: 3 } },
            { delete: { _index: 'truck', _type: 'rt', _id: 4 } }
        ]
    }, function (err, resp) {
        console.log(resp);
    });
}

var getFromElastic = function(id) {
    client.search({
        index: 'truck',
        type: 'rt',
        body: {
            query: {
                match: {
                    id: id
                }
            }
        }
    }).then(function (resp) {
        var hits = resp.hits.hits[0]['_source']['location'];
        //console.log(hits);
    }, function (err) {
        console.trace(err.message);
    });
};