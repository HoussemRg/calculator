let operation=false;
const arr=['+','-','*','/','%','.'];
function verfication(){
    if(arr.includes(document.querySelector('.text').innerHTML[document.querySelector('.text').innerHTML.length-1])){
        return false;
    }
    else{
        return true;
    }
}

function clearAll(){
    
    document.querySelector('.text').innerHTML='0';
    
}

function deleteOperation(){
    if(document.querySelector('.text').innerHTML!='0' && document.querySelector('.text').innerHTML.length > 1){
        document.querySelector('.text').innerHTML=document.querySelector('.text').innerHTML.slice(0,document.querySelector('.text').innerHTML.length-1);
    }else if(document.querySelector('.text').innerHTML.length == 1){
        document.querySelector('.text').innerHTML='0';
    }
}


function printValueOfButton(str){
    if(document.querySelector('.text').innerHTML=='0' && arr.includes(str)){
        document.querySelector('.text').innerHTML='ERROR';
    }
    else if(!verfication() && arr.includes(str)){
        document.querySelector('.text').innerHTML='ERROR';
    }
    else{
        if(document.querySelector('.text').innerHTML!='ERROR' && document.querySelector('.text').innerHTML!='0'  && document.querySelector('.text').innerHTML!='Infinity' && !operation){
            document.querySelector('.text').innerHTML+=str;
        }
        else{
            document.querySelector('.text').innerHTML=str;
            operation=false;
        }
        
    }
}

function calculate(){
    if(verfication()){
        let result=eval(document.querySelector('.text').innerHTML);
        document.querySelector('.text').innerHTML=result;
        operation=true;
    }
    else{
        document.querySelector('.text').innerHTML='ERROR';
    }
}






