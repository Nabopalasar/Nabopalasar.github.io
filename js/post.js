document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const token = '8076178360:AAEMNOLDYUjLEtvnE3SjEbEvXzlNzPbnf1g';
    const chat_id = '386807281';
  
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();
  
    const text = `New message from portfolio:\n\n` +
                 `Name: ${name}\n` +
                 `Email: ${email}\n` +
                 `Phone: ${phone}\n` +
                 `Message:\n${message}`;
  
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chat_id,
        text: text
      })
    })
    .then(res => {
      if (res.ok) {
        alert("Сообщение отправлено успешно!");
        form.reset();
      } else {
        alert("Ошибка при отправке сообщения.");
      }
    })
    .catch(err => {
      console.error("Fetch error:", err);
      alert("Ошибка подключения.");
    });
  });