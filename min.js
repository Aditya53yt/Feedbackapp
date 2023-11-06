let form=document.querySelector("form")
let select=document.querySelector('#rating')
let textarea=document.querySelector('#description')
let ul=document.querySelector('ul')


const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join(" ")

  alertPlaceholder.append(wrapper)
}



const saveReview= (e) =>{
    e.preventDefault();
let h1=document.createElement('h1')
let h2=document.createElement('h2')
 
h1.className = "display-1";
h2.className = "display-6 text-secondary";
 
h1.innerText="Rating:" +select.value 
h2.innerText="Review:"+  textarea.value
 

let li= document.createElement('li')
li.className = "list-group-item rounded-0 shadow-sm";




 let dltbtn=document.createElement('button')
 dltbtn.className = "btn btn-sm btn-danger rounded-0 float-end";
 dltbtn.innerText = "Delete";
    li.appendChild(h1)
    li.appendChild(h2) 
    li.appendChild(dltbtn)

    ul.appendChild(li)
    appendAlert("Review Saved","succes")
    form.reset()
}

form.addEventListener('submit',saveReview)


const DeleteReview= (e) =>{
if(e.target.className.includes("btn-danger"))
{
    let li = e.target.parentElement;
    if(window.confirm('Are you sure?'))
    {
        ul.removeChild(li);
        appendAlert("Feedback Deleted", "danger");
    }
}
}
ul.addEventListener("click", DeleteReview);