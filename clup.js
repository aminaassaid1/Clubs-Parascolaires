let emailRe = /^\w+\.\w+@ofppt.ma$/i;
let nameRe = /^[a-z]{1,30}$/i;
let numRe = /^(05|06|07)\d{8}$/;
document.getElementById('side').addEventListener('submit',function(e){
    let validationResul = true;
    e.preventDefault();
    let email = document.getElementById('email').value;
    let name= document.getElementById('nameinput').value;
    let last_name = document.getElementById('last').value;
    let nomber =document.getElementById('num').value;
    let Gender = document.getElementById('Gender');
    let groups = document.getElementById('groups');
    let clubs = document.getElementById ('clubs');
    if(emailRe.test(email)==false){
        validationResul = false;
        document.getElementById('emailerror').classList.add('show');
        document.getElementById('email').classList.add('invalid');
        document.getElementById('email').classList.remove('valid');
    }else{
        document.getElementById('emailerror').classList.remove('show');
        document.getElementById('email').classList.add('valid');
        document.getElementById('email').classList.remove('invalid');
    }
    if(nameRe.test(name)==false){
        validationResul = false;
        document.getElementById('nerror').classList.add('show');
        document.getElementById('nameinput').classList.add('invalid');
        document.getElementById('nameinput').classList.remove('valid');
    
    }else{
        document.getElementById('nerror').classList.remove('show');
        document.getElementById('nameinput').classList.add('valid');
        document.getElementById('nameinput').classList.remove('invalid')
    
    }
    if(nameRe.test(last_name)==false){
        validationResul= false
        document.getElementById('lasterror').classList.add('show');
        document.getElementById('last').classList.add('invalid');
        document.getElementById('last').classList.remove('valid');
    }else{
        document.getElementById('lasterror').classList.remove('show');
        document.getElementById('last').classList.add('valid');
        document.getElementById('last').classList.remove('invalid');
    }
    if(numRe.test(nomber)==false){
        validationResul= false
        document.getElementById('phoneerror').classList.add('show');
        document.getElementById('num').classList.add('invalid');
        document.getElementById('num').classList.remove('valid')
    }else{
        document.getElementById('phoneerror').classList.remove('show');
        document.getElementById('num').classList.add('valid');
        document.getElementById('num').classList.remove('invalid')
    }
    if(document.querySelector('[name=Gender]:checked')==null){
        validationResul=false
        document.getElementById('gendererror').classList.add('show');
        Gender.classList.add('invalid');
        Gender.classList.remove('valid');
    }else{
        document.getElementById('gendererror').classList.remove('show');
        Gender.classList.add('valid');
        Gender.classList.remove('invalid');
    }
    if(document.querySelector('[name=Groups]:checked')==null){
        validationResul=false
        document.getElementById('grouperror').classList.add('show');
        groups.classList.add('invalid');
        groups.classList.remove('valid');
    }else{
        document.getElementById('grouperror').classList.remove('show');
        groups.classList.add('valid');
        groups.classList.remove('invalid');
    }
    if(document.querySelectorAll(".clubs:checked").length==0 || document.querySelectorAll(".clubs:checked").length>3){
        validationResul=false
        document.getElementById('cluberror').classList.add('show');
        clubs.classList.add('invalid');
        clubs.classList.remove('valid');
    }else{
        document.getElementById('cluberror').classList.remove('show');
        clubs.classList.add('valid');
        clubs.classList.remove('invalid');
    }
   






    if(validationResul===false){
        e.preventDefault();
    }

})