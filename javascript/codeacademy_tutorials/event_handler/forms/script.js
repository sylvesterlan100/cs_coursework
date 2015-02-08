var form = {
	register: document.getElementById('register'),
	elab: document.getElementById('elabel'),
	ediv: document.getElementById('ediv'),
	email: document.getElementById('email'),
	p1lab: document.getElementById('p1label'),
	p1div: document.getElementById('p1div'),
	pass1: document.getElementById('pass1'),
	p2lab: document.getElementById('p2label'),
	p2div: document.getElementById('p2div'),
	pass2: document.getElementById('pass2')
}

form.register.addEventListener('submit', CheckForm);
//form.email.addEventListener('keypress', CheckEmail)
//form.pass1.addEventListener('keypress', CheckPass)
//form.pass2.addEventListener('keypress', CheckPass)
form.email.addEventListener('input', CheckEmail)
form.pass1.addEventListener('keypress', CheckPass)
form.pass2.addEventListener('keypress', CheckPass)


form.pass1.addEventListener('input', CheckPass)
form.pass2.addEventListener('input', CheckPass)

function CheckPass(e){
	if(e.charCode==32){
		preventDefault();
	}
	alert(e.target.id)
	if(e.target.id=='pass1'){
		if(form.pass1.value!='')
		{	
			form.p1lab.className='matched'
		}
		else
		{
			form.p1lab.className='mismatched'
		}
	}
	else{
		if(form.pass2.value!=''||form.pass2.value==form.pass1.value)
		{
			form.p2lab.className='matched'
		}
		else
		{
			form.p2lab.className='mismatched'
		}
	}
}
var regEmail= /^[a-z0-9._%]+@[a-z0-9.-]+\.[a-z]{2,4}$/
function CheckEmail(e){
	if(e.charCode==32){
		preventDefault();
	}
	if(regEmail.test(form.email.value)){
		form.elab.className="matched"
	}
	else{
		form.elab.className='mismatched'
	}
}
function CheckForm(e){
	var msg='';
	if(!regEmail.test(form.email.value)){
		msg += '\n Your email address';
	}
	if(form.pass1.value==''||form.pass1.value!=form.pass2.value){
		msg +='\n Your password'
	}
	if(msg!=''){
		msg='Please Check: '+msg;
		e.preventDefault();
	}
	else{
		msg='Submitting!'
	}
	alert(msg);
}