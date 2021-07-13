function post (){
  const submit = document.getElementById("submit");
    //送信のようそ取り出し
  submit.addEventListener("click", (e) => {
    //送信ボタンをクリックしたら
    e.preventDefault();
      //既定のpostイベント無効化 JavaScriptイベントのみに
    const form = document.getElementById("form");
      //フォームの要素取り出し
    const formData = new FormData(form);
      //フォームのデータをformに入れておく
    const XHR = new XMLHttpRequest();
      //非同期通信を行う設定 XHLHttpRequestをXHRに入れる
    XHR.open("POST", "/posts", true);
      //送信メソッドで、パスは/posts、非同期通信ON
    XHR.responseType = "json";
      //jsonというデータフォーマット指定
    XHR.send(formData);
      //formDataを送る
  });
};

window.addEventListener('load', post);
//post変数でイベント設定