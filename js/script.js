// mainのエレメントを取得
const viewBody = document.getElementById("main");
// mainにcanvasを描画
viewBody.innerHTML = '<p>here is canvas page.</p><br><canvas id="canvas"></canvas>';

onload = function(){
    // canvasのエレメントを取得
    const c = document.getElementById("canvas");
    // canvasの描画範囲を指定
    c.width = 500;
    c.height = 300;

    // webglコンテキストの取得
    const gl = c.getContext('webgl') || c.getContext('experimental-webgl');
    // canvasを黒で初期化！
    gl.clearColor(0.0 ,0.0 , 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}