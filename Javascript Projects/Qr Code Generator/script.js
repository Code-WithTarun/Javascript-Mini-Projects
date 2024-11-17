const input = document.getElementById("input")
const qr_img = document.getElementById("qr-img")

function generateQrImage(){
    qr_img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
}