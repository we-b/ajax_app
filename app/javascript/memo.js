function post(){
  const submit=document.getElementById("submit");
  submit.addEventListener("click",(e) =>{
    e.preventDefault();
    const form=document.getElementById("form");
    const formDate= new FormDate(form);
    const XHR=new XMLHttpRequest();
    XHR.open("POST","/posts",true);
    XHR.responseType="json";
    XHR.send(formDate);
  });
};

window.addEventListener('load',post);