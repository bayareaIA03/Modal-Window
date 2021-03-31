'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function(){
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

const openModal = function(){
		//console.log('button clicked');
		modal.classList.remove('hidden');
		overlay.classList.remove('hidden');
	};

 for(let i = 0; i < btnsOpenModal.length; i++){
	btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(event){ //when pressing any key
	//console.log('a key was pressed');
	console.log(event.key);

	if(event.key == 'Escape' && !modal.classList.contains('hidden')){//if modal is not closed
		//when press the escape button the modal closes
		//if modal is not closed
		closeModal();
	}
});
