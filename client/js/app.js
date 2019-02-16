var app=angular.module('myApp',[]);

var socket = io.connect(); //global variable for client-side access

app.controller('mainController',['$scope',function($scope){
    $scope.send = function(){
        socket.emit('chat message', $scope.message);
        $scope.message="";
    }
    socket.on('load messages', function(docs){
        for(var i = docs.length-1; i >= 0; i--){
            displayMsg(docs[i].name, docs[i].message);
        }
    });
    socket.on('chat message', function(name, msg){
        displayMsg(name, msg);
    });

    function displayMsg(name, msg){
        var li = document.createElement("li");
        var elt_name = document.createElement("b");
        elt_name.appendChild(document.createTextNode(name + ": "));
        li.appendChild(elt_name);
        var elt_msg = document.createTextNode(msg);
        li.appendChild(elt_msg);
        document.getElementById("messages").appendChild(li);
    }
}]);
