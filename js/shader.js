// Vertex Shader id="vs" type="x-shader/x-vertex"
export const VS_CODE = `
attribute vec3 position;
uniform   mat4 mvpMatrix;

void main(void){
    gl_Position = mvpMatrix * vec4(position, 1.0);
}
`;

// Fragment Shader id="fs" type="x-shader/x-fragment"
export const FS_CODE = `
void main(void){
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
`;