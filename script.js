function cls(){
    var div,p;
    div = document.getElementById('conteudo').childNodes;
    p = document.getElementById('p');
    p.innerHTML = div;
    console.log(div[1]);

}














/*
var div,n1,addtag = {}
addtag.adc = function(nome){

    div = document.createElement(nome);
    n1 = document.getElementById('conteudo');
    
    for (var i =0; i < 10; i++){
        iv = document.createElement(nome);
        n1 = document.getElementById('conteudo');
        
        n1.appendChild(div);
        if (i === 3){
            n1.appendChild(div);
            console.log('apaguei');

        }
    }
    
}
addtag.remove = function(nome){
    n1 = document.getElementById('conteudo');
    n1.removeChild();


}

function adc(){
    var n1, n2, div;
    for(var i =0; i < 10; i++){
        div = document.createElement('div');
        n1 = document.getElementById('conteudo');
        n1.appendChild(div);

    }
    
    
}
*/