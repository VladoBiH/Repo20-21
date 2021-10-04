var i, v, caps = 0, shift = 0;
    
function init() {
    i = document.getElementById('keyboard').getElementsByTagName('button');
    for(v = 0; v < i.length; v++) {
        if(i[v].type === 'button') {
            i[v].addEventListener('onclick', makeClickHandler(v));
        }
    }
}

function makeClickHandler(v) {
    i[v].onclick = function() {
        if(i[v].id === 'backSpaceKey') {
            document.getElementById('textArea').value = document.getElementById('textArea').value.slice(0, -1);
        } else if(i[v].id === 'okKey') {
            document.getElementById('textArea').value += '\n';
        }  else if(i[v].id === 'capsLockKey') {
            if(caps === 0) {
                caps = 1;
            } else {
                caps = 0;
            }
        } else if(i[v].id === 'shiftKey') {
            shift = 1;
        } else if(caps === 1) {
            if(shift === 1) {
                document.getElementById('textArea').value += this.value.toLowerCase();
                shift = 0;
            } else {
                document.getElementById('textArea').value += this.value.toUpperCase();
            }
        } else {   
            if(shift === 1) {
                document.getElementById('textArea').value += this.value.toUpperCase();
                shift = 0;
            } else {
                document.getElementById('textArea').value += this.value.toLowerCase();
            }
       }
    };
}

function showAlert() {
    alert(document.getElementById('textArea').value);
}

window.addEventListener?
window.addEventListener('load', init, false) : window.attachEvent('onload', init);