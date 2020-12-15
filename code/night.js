


function theme(){
	const toggleTheme =document.querySelector('#night-mode');
	let el = document.documentElement
	toggleTheme.addEventListener('click',function(){
		
		if(el.hasAttribute('data-theme')){
			el.removeAttribute('data-theme')
			localStorage.removeItem('theme','dark')
		} else{
			el.setAttribute('data-theme','dark')
			localStorage.setItem('theme','dark')
		}


	})
			if(localStorage.getItem('theme') !== null){
			el.setAttribute('data-theme','dark')
		}
}
theme()

