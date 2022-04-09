//short element name
let div = document.createElement('div')
//body
let body = document.querySelector("body");

let mainDiv = document.createElement('div');
mainDiv.classList.add("mainDiv");

//logo div
let logoDiv = document.createElement('div');
logoDiv.classList.add("logoDiv");
// logoDiv.appendChild(document.createElement('img'))
//content div
let contentDiv = document.createElement('div');
contentDiv.classList.add("contentDiv");
let videoPlayLink = document.createElement('a');
videoPlayLink.appendChild(document.createTextNode('Add to home screen'));


//close div
let closeDiv = document.createElement('div');
closeDiv.classList.add("closeDiv");
//close btn
let spanEle = document.createElement('span');
let textEle = document.createTextNode('x')
spanEle.appendChild(textEle)
//add spaneleme in closediv
closeDiv.appendChild(spanEle)
//append subdiv in maindiv
mainDiv.appendChild(logoDiv);
mainDiv.appendChild(contentDiv);
mainDiv.appendChild(closeDiv);
//herodiv
let heroDiv = document.createElement('div');
heroDiv.classList.add('heroDiv')
heroDiv.appendChild(mainDiv)
//append main div in body
body.appendChild(heroDiv)
//action on close btn
spanEle.addEventListener('click',()=>{
	heroDiv.style.display = 'none'
})
//auto show 
window.onload = showAddToHome;
function showAddToHome(){
	let val = localStorage.getItem('addToHome');
	if(val % 5 == 0){
		heroDiv.style.display = 'block'
		localStorage.setItem('addToHome',++val);
	}else{
		localStorage.setItem('addToHome',++val)
	}
}
/*Add Source of video*/
//add video src
videoPlayLink.href ="addToHomeScreen/how_to.mp4"
contentDiv.appendChild(videoPlayLink);
// add custom message
//descript
let desc = document.createElement('p')
desc.classList.add('msgSec')
desc.appendChild(document.createTextNode("Ignore If alredy added."))
contentDiv.appendChild(desc)
