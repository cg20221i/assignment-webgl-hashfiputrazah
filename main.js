function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices = [
        // A
        -0.9, 0.3,
        -0.83, 0.3,
        -0.75, 0.9,
        -0.825, 0.3,
        -0.745, 0.9,
        -0.677, 0.9,
        -0.672, 0.9,
        -0.672, 0.3,
        -0.602, 0.3,
        -0.758, 0.55,
        -0.677, 0.55,
        -0.677, 0.88,

        // T
        -0.4, 0.9,
        -0.4, 0.3,
        -0.35, 0.6,
        -0.36, 0.7,
        -0.25, 0.7,
        -0.342, 0.6,
        -0.21, 0.9,
        -0.21, 0.3,
        -0.26, 0.6,
        -0.33255, 0.6,
        -0.265, 0.6,
        -0.2455, 0.7,

        // digit 2

        -0.82, -0.23,
        -0.9, -0.23,
        -0.85, -0.0,
        -0.7, -0.0,
        -0.65, -0.2,
        -0.65, -0.35,
        -0.777, -0.6,
        -0.65, -0.6,
        -0.65, -0.75,
        -0.9, -0.75,
        -0.9, -0.6,
        -0.74, -0.35,
        -0.74, -0.23,
        -0.76, -0.15,
        -0.8, -0.15,

        // digit 1
        -0.43, -0.25,
        -0.35, 0.0,
        -0.25, 0.0,
        -0.17, -0.25,
        -0.17, -0.5,
        -0.25, -0.75,
        -0.35, -0.75,
        -0.43, -0.5,
        -0.36, -0.25,
        -0.325, -0.12,
        -0.275, -0.12,
        -0.24, -0.25,
        -0.24, -0.5,
        -0.275, -0.63,
        -0.325, -0.63,
        -0.36, -0.5,
    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW)

    // VERTEX SHADER
    var vertexShaderCode = `
        attribute vec2 aPosition;
        void main() {
            gl_PointSize = 10.0;
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
    `;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    // FRAGMENT SHADER
    var fragmentShaderCode = `
        precision mediump float;
        void main() {
            gl_FragColor = vec4(0.25, 0.75, 0.20, 1.0);
        }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    gl.clearColor(0.75, 0.40, 0.30, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    //A
    gl.drawArrays(gl.LINE_STRIP, 0, 3);
    gl.drawArrays(gl.LINE_STRIP, 3, 3);
    gl.drawArrays(gl.LINE_STRIP, 6, 3);
    gl.drawArrays(gl.LINE_STRIP, 9, 3);

    //T
    gl.drawArrays(gl.LINE_STRIP, 10, 4);
    gl.drawArrays(gl.LINE_STRIP, 11, 2);

    
    //2
    gl.drawArrays(gl.LINE_STRIP, 21, 3);
    gl.drawArrays(gl.LINE_STRIP, 24, 15);

    //1
    gl.drawArrays(gl.LINE_STRIP, 50, 2);
    gl.drawArrays(gl.LINE_STRIP, 42, 2);


    
}