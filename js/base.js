// mainのエレメントを取得
const viewBody = document.getElementById("main");
// mainにcanvasを描画
viewBody.innerHTML = '<p>here is canvas page.</p><br><canvas id="canvas"></canvas>';


// const promise = 
new Promise((resolve, reject) => {
  resolve();
}).then(() => {
  console.log("promise resolve");
});

