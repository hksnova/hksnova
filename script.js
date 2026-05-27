console.log("HKSNova Notes Loaded Successfully");

function copyCode(button) {
  // Find the closest code wrapper, then the pre tag inside it
  const wrapper = button.closest('.code-wrapper');
  if (!wrapper) return;
  const code = wrapper.querySelector('pre');
  if (!code) return;

  navigator.clipboard.writeText(code.innerText).then(() => {
    const originalText = button.innerText;
    button.innerText = "Copied!";
    button.style.background = "#4caf50";
    button.style.color = "white";
    
    setTimeout(() => {
      button.innerText = "Copy Code";
      button.style.background = ""; // Revert to CSS default
      button.style.color = "";
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}