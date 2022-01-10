// Get the modal element
var modal = document.getElementById('readMoreModal');


// Get the open modal button
var modalBtn = document.getElementById('modalBtn');

//Get the close button 
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for a open click
modalBtn.addEventListener('click', openModal);

//Listen for a close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', clickOutside);

// open function
function openModal(){
   modal.style.display = 'block';

}

//close function
function closeModal(){
    modal.style.display = 'none';
}

//outside close function
function clickOutside(e){
    if(e.target == modal){
    modal.style.display = 'none';
    }
}