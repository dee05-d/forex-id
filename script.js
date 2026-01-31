// Generate QR code for the back card
new QRCode(document.getElementById("qrcode"), {
  text: "https://yourdomain.com/forex-id/profile.html", // change to your actual page
  width: 100,
  height: 100,
  colorDark: "#00ffc8",
  colorLight: "#f5f5f5",
  correctLevel: QRCode.CorrectLevel.H
});
