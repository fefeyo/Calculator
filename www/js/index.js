var num;
var activeNum = 0;
var state = 0;

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        setEvents();
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function setEvents(){
    $('td').on('touchstart', function(){
        $(this).css('background', '#f3f3f3');
    }).on('touchend click', function(){
        $(this).css('background', '#ffffff');
        console.log($(this));
        calc($(this).hasClass('number'), $(this).text());
    });
}

function calc(isNumber, chara){
    if(isNumber){
        addNum(chara);
    }else{
        calcNum(symbol);
    }
}

function addNum(number){
    activeNum =  (10 * activeNum) + parseInt(number);
    console.log(activeNum);
    console.log(activeNum / 2);
}

function calcNum(symbol){

}

app.initialize();