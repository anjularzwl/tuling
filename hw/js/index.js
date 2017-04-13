var txt = document.getElementById('txt')
var app = document.getElementById('app')
//输入框键盘事件
function keyupHandle(e){
    if(e.keyCode == 13){
        sendMsg(txt.value)
    }
}
var txt = document.getElementById('txt')
function sendMsg(msg){
    var xhr = new XMLHttpRequest
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
           
            var shows = JSON.parse(xhr.response)
            app.innerHTML += '提问:'+txt.value+'<br>'+'回答:'+ shows.text+'<hr>'
            txt.value = ''
            
        }
    }
    xhr.open('get','http://www.tuling123.com/openapi/api?key=8381a63bbd104feea5dedac6baf69cf3&info='+txt.value)
    xhr.send()
}