import comm from './common'

window.onload = function(){
    document.body.onclick = function(){
        alert(comm.sum(12,34,5,76,89,2,3,4,7,90,24))
    }
}