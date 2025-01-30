
onload = main

// begin anynimous fun 
function main(){

    var a_lst = window.document.querySelectorAll('a')
    
    for(let i =0; i< a_lst.length; i++){
        
        a_lst[i].onmouseover = chngBgClr
        a_lst[i].onmouseout = chngBgClr
    }
    
    function chngBgClr(e){

        if(e.type == 'mouseover'){

            this.style.backgroundColor ='#C0413B'
        }
        else if(e.type == 'mouseout'){

            this.style.backgroundColor = '#1B1B1B'
        }

    }
}

// end anon function

// window.document.body.onmouseover