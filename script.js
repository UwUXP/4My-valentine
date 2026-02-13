const wrapper = document.getElementById("wrapper");
const question = document.getElementById("question");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

yesBtn.addEventListener("click", () => {
  // ซ่อนปุ่มทิ้งไปเลยพอกด Yes แล้ว (จะได้ดูคลีนๆ)
  document.getElementById("btn-group").style.display = "none";
  
  // ใช้ innerHTML และใส่ Class CSS ที่เราเตรียมไว้
  question.innerHTML = `
    <div class="love-msg">
        ขอบคุณที่เข้ามาในชีวิตนะครับ<br>
        ขอบคุณที่ทำให้ผมมีคุณค่า<br>
        ขอบคุณที่ทำให้ผมรู้จักความรัก<br>
        
        <span class="highlight">หลังจากนี้ผมอยากมีเธอไปตลอดเลยนะค้าบ</span>
        <span class="love-text">รักนะค้าบบบ My Dear (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)💝</span>
    </div>
  `;
  
  // เปลี่ยนรูปเป็นหมีกอดกัน
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  
  // คำนวณขอบเขตหน้าจอ ไม่ให้ปุ่มหลุดจอ
  const maxX = window.innerWidth - noBtnRect.width - 20;
  const maxY = window.innerHeight - noBtnRect.height - 20;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // สั่งให้ปุ่มบินไป
  noBtn.style.position = "fixed"; // เปลี่ยนเป็น fixed เพื่อให้บินทั่วจอได้จริง
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});