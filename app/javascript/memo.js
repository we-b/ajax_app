function post (){
  //リクエストを送信する処理
  // console.log("イベント発火");
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
  // submit.addEventListener("click", () => {
    const form = document.getElementById("form");
    // console.log("イベント発火");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
 };
 
 window.addEventListener('load', post);