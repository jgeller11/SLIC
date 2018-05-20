function dateLock(m, d=0, h=0, min=0, sec=0){
    today = new Date();
    if (today.getMonth()+1>m){
        return true
    } else if (today.getMonth()+1==m) {
        if (today.getDate()>d){
            return true
        } else if (today.getDate()==d){
            if (today.getHours()>h){
                return true
            } else if (today.getHours()==h){
                if (today.getMinutes()>min){
                    return true
                } else if (today.getMinutes()==min){
                    if (today.getSeconds()>=sec){
                        return true
                    }
                }
            }
        }
    }
    return false
}

function addEntry(e,m,d=0,h=0,c=0,v=0){
    if (dateLock(m,d,h,c,v)){
        document.getElementById('journal').innerHTML += "<p>"+e+"</p>"
    }
}

function fillContent(){
    var open = document.getElementById("whiteboard")
    open.style.backgroundImage = "url(eric.png)"
}

function buy(contentId) {
//    var link = document.createElement("a");
//    link.download = name;
//    link.href = uri;
//    link.click();


    // TODO: use above code to implement downloading from file, or if possible, dropbox
    alert(contentId)
}
