
function fn_ValForm() {
  var sMsg = "";

  var nameEl = document.getElementById("name");
  var mailEl = document.getElementById("email");
  var msgEl  = document.getElementById("message");

  if (nameEl.value == "") {
    sMsg += "\n* Anda belum mengisikan nama";
  }

 
  var emailRegex = /^[a-z0-9][a-z0-9._-]*@[a-z0-9][a-z0-9.-]*\.[a-z0-9]{2,4}$/i;

  if (mailEl.value == "") {
    sMsg += "\n* Anda belum mengisikan email";
  } else if (!emailRegex.test(mailEl.value)) {
    sMsg += "\n* Format email tidak valid";
  }

  if (msgEl.value == "") {
    sMsg += "\n* Anda belum mengisikan pesan";
  }

  if (sMsg != "") {
    alert("Peringatan:\n" + sMsg);
    return false;
  }
  return true;
}

