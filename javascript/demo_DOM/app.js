
//domcontentloaded specifies hat our htmldocument is loaded without any dependencies like stylesheets and more
document.addEventListener('DOMContentLoaded',function(){
    const list=document.querySelector('#movie-list ul');
    const forms=document.forms;

    //delete movie
    list.addEventListener('click',(e)=>{
        if(e.target.className == 'delete'){
            const li =e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });

    //add movie
    const addForm = forms['add-movie'];
    addForm.addEventListener('submit',function(e){
        e.preventDefault();

        //creating element
        const value =addForm.querySelector('input[type="text"]').value;
        const li = document.createElement('li');  //li is parent element
        const movieName =document.createElement('span'); //span is child element
        const deleteBtn =document.createElement('span');

        //add text content
        movieName.textContent=value;
        deleteBtn.textContent='delete';

        //add classes
        movieName.classList.add('name');
        deleteBtn.classList.add('delete');

        //append to DOM
        li.appendChild(movieName);  //li ko child moviename
        li.appendChild(deleteBtn);  //li ko child deletebtn
        list.appendChild(li);       //list ko child ul or list

    });
})