  function addDiary() {
    let input = document.getElementById("diaryInput").value;
    if (input.trim() === "") {
      alert("Bro you forgot to write anything in that fuck");
      return;
    }

    let output = document.getElementById("diaryOutput");
    let today = new Date().toLocaleDateString();
    
    let newEntry = `
      <p style="background:#fff; padding:15px; border-radius:10px; box-shadow:0 0 10px rgba(0,0,0,0.1);">
        <strong>${today}</strong><br>
        ${input.replace(/\n/g, "<br>")}
      </p>
    `;

    output.innerHTML = newEntry + output.innerHTML; 
    document.getElementById("diaryInput").value = "";
  }
