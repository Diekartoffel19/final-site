document.addEventListener("DOMContentLoaded", () => {
    const inputfield = document.getElementById("inputfield");
    const button = document.getElementById("submit");
    const code = document.getElementById("qrcode");


    button.addEventListener("click", () => {

        const inputtext = inputfield.Value;
        
        
        if (inputtext.trim() === "") {
            alert("Bitte etwas eingen. :)");
            return;
        }


        qrcodeContainer.innerHTML = "";
        const qrcode = new QRCode(qrcodeContainer, {
            text: inputtext,
            with: 256,
            height: 256,
            colorDark : "#000000",
            colorLight : "#ffffff",
            corectLevel : QRCode.corectLevel.H

        });
    });


});