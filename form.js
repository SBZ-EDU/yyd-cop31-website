/* YYD COP31 iletişim formu
   BOT_API boşsa: demo mod (mailto davranışı korunur).
   BOT_API doldurulunca: POST {BOT_API}/site-form (Cloudflare Worker). */
(function () {
  var BOT_API = ""; // ör. https://yyd-cop31-bot.elasa2next.workers.dev
  var form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    if (!BOT_API) return; // demo mod: mailto varsayılan davranışı
    e.preventDefault();
    var btn = form.querySelector('button[type="submit"]');
    var note = form.querySelector(".form-status");
    if (!note) {
      note = document.createElement("div");
      note.className = "form-status";
      btn.parentNode.insertBefore(note, btn);
    }
    btn.disabled = true;
    btn.textContent = "Gönderiliyor…";
    note.className = "form-status";
    note.textContent = "";

    var payload = {
      name: form.ad.value,
      email: form.eposta.value,
      subject: form.konu.value,
      message: form.mesaj.value,
      source: "site"
    };

    fetch(BOT_API + "/site-form", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(function (r) {
        return r.json().then(function (d) { return { ok: r.ok, d: d }; });
      })
      .then(function (res) {
        btn.disabled = false;
        btn.textContent = "Gönder";
        if (res.ok) {
          note.className = "form-status ok";
          note.textContent = "✅ Mesajınız alındı, en kısa sürede dönüş yapacağız.";
          form.reset();
        } else {
          note.className = "form-status err";
          note.textContent = "⚠️ Gönderim başarısız oldu. Doğrudan cop31@yyd.org.tr adresine yazabilirsiniz.";
        }
      })
      .catch(function () {
        btn.disabled = false;
        btn.textContent = "Gönder";
        note.className = "form-status err";
        note.textContent = "⚠️ Bağlantı hatası. Doğrudan cop31@yyd.org.tr adresine yazabilirsiniz.";
      });
  });
})();
