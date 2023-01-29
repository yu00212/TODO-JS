import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  // class付与
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  // 生成したliタグの中に上で取得した入力内容を入れる
  li.innerText = inputText;

  // button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  
  // button（削除）タグ生成
  const deleteButton = document.createElement("button");
  completeButton.innerText = "削除";

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

