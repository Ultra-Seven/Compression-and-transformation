/**
* Created by lenovo on 2017/7/11.
*/
const quantization = [16, 11, 10, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56,
    14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92,
    49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99];

function deQuantize(bytes) {
    for(let index in bytes) {
        bytes[index] = Math.floor(bytes[index] * quantization[index]);
    }
}
function decode(bytes) {
    deQuantize(bytes);
    const N = bytes.length;
    var decoded_list = [];
    console.log(bytes);
    for(let index = 0; index < N; index++) {
        let c = 0;
        for(let n = 1; n < N; n++) {
            c = c + bytes[n] * Math.cos((Math.PI / N) * n * (index + 0.5) )
        }
        c = c + 0.5 * bytes[0];
        c = Math.floor(c * 2.0 / N);
        decoded_list.push(Math.floor(c));
    }
    console.log(decoded_list);
    return decoded_list;
}
var data = [26.0, 0.0, -20.0, -2.0, 1.0, -1.0, -2.0, 0.0, 5.0, 4.0, 0.0, 1.0, -3.0];
var decodeList = decode(data);
console.log(decodeList);