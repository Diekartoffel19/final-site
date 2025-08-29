document.addEventListener('DOMContentLoaded', () => {

  // QR-Code Generator Logik
  const qrForm = document.getElementById('qr-form');
  const qrTextInput = document.getElementById('qr-text');
  const qrCodeContainer = document.getElementById('qr-code-container');
  const qrCodeEl = document.getElementById('qrcode');
  const downloadBtn = document.getElementById('download-btn');

  // Initialisiere ein leeres QR-Code-Objekt
  let qrcode = null;

  qrForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const text = qrTextInput.value.trim();
    if (text === '') {
      alert('Bitte geben Sie einen Text oder eine URL ein.');
      return;
    }

    // Leere den Container, bevor ein neuer Code generiert wird
    qrCodeEl.innerHTML = '';
    
    // Erstelle den QR-Code
    if (qrcode) {
      qrcode.clear(); // Bestehenden Code löschen
      qrcode.makeCode(text); // Neuen Code generieren
    } else {
      qrcode = new QRCode(qrCodeEl, {
        text: text,
        width: 256,
        height: 256,
        colorDark : "#000000", // dark:text-indigo-900
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
      });
    }

    // Container einblenden
    qrCodeContainer.classList.remove('hidden');
    qrCodeContainer.classList.add('flex');
    
    // Update Download-Link nach kurzer Verzögerung
    setTimeout(() => {
        const qrCanvas = qrCodeEl.querySelector('canvas');
        if(qrCanvas){
            downloadBtn.href = qrCanvas.toDataURL('image/png');
        }
    }, 50);
  });

  // Burger-Menü Logik (aus deiner Seite übernommen)
  const burgerBtn = document.getElementById('burger-btn');
  const navLinks = document.getElementById('nav-links');
  
  if (burgerBtn && navLinks) {
    burgerBtn.addEventListener('click', function() {
      navLinks.classList.toggle('hidden');
      navLinks.classList.toggle('flex');
      // Zusätzliche Klassen für die mobile Ansicht
      navLinks.classList.toggle('absolute');
      navLinks.classList.toggle('top-20');
      navLinks.classList.toggle('right-4');
      navLinks.classList.toggle('bg-white');
      navLinks.classList.toggle('dark:bg-slate-900');
      navLinks.classList.toggle('rounded-xl');
      navLinks.classList.toggle('shadow-2xl');
      navLinks.classList.toggle('p-6');
      navLinks.classList.toggle('z-50');
    });
  }
});