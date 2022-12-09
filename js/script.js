import { VS_CODE, FS_CODE } from '../js/shader.js';

onload = function initCanvas(){
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

/*
function create_shader(){
    // シェーダを格納する変数
    // var shader;
    const shader = gl.createShader(gl.VERTEX_SHADER);

    // 生成されたシェーダにソースを割り当てる
    gl.shaderSource(shader, VS_CODE);
    
    // シェーダをコンパイルする
    gl.compileShader(shader);
    
    // シェーダが正しくコンパイルされたかチェック
    if(gl.getShaderParameter(shader, gl.COMPILE_STATUS)){
        
        // 成功していたらシェーダを返して終了
        return shader;
    }
    else{
        
        // 失敗していたらエラーログをアラートする
        alert(gl.getShaderInfoLog(shader));
    }
}


function create_program(vs, fs){
    // プログラムオブジェクトの生成
    var program = gl.createProgram();
    
    // プログラムオブジェクトにシェーダを割り当てる
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    
    // シェーダをリンク
    gl.linkProgram(program);
    
    // シェーダのリンクが正しく行なわれたかチェック
    if(gl.getProgramParameter(program, gl.LINK_STATUS)){
    
        // 成功していたらプログラムオブジェクトを有効にする
        gl.useProgram(program);
        
        // プログラムオブジェクトを返して終了
        return program;
    }else{
        
        // 失敗していたらエラーログをアラートする
        alert(gl.getProgramInfoLog(program));
    }
}
*/