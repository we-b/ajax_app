const buildHTML = (XHR) => {
  const item = XHR.response.post;
    //レスポンス変数postは変数itemsへ
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

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
    XHR.onload = () => {
      if (XHR.status != 200){
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
          //ステータスコード に応じたメッセージ表示
        return null;
          //エラー出たらこれ以降処理しない
      }
      const list = document.getElementById("list");
        //list要素取り出す
      const formText = document.getElementById("content");
        //content要素取り出す
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
        //要素の直後に変数item情報入れる
      formText.value = "";
      
    };
  });
};

window.addEventListener('load', post);
//post変数でイベント設定