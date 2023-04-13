let regexInput;
let qty;

document.getElementById("generate-string-btn").onclick = function(){
    regexInput = document.getElementById("regex-input").value;
    qty = document.getElementById("qty-input").value;

    let textarea = document.getElementById("string-output");
    textarea.value = convertRegexInput(regexInput, qty).join("\n");
}

document.getElementById("copy-btn").onclick = function() {
    let text = document.getElementById('string-output').value;
    navigator.clipboard.writeText(text)
    .then(() => {
      showTooltip('Text copied to clipboard!');
    })
    .catch(() => {
      showTooltip('Error copying text to clipboard.');
    });
}

function convertRegexInput(regexInput, qty) {
    let outputs = [];
    qty = Number(qty);

    for (i = 0; i < qty; i++){
        outputs[i] = new RandExp(regexInput).gen();
        console.log(i);
    }

    return outputs;
}

function showTooltip(message) {
    tooltip.innerText = message;
    tooltip.style.display = 'block';
  
    setTimeout(() => {
      tooltip.style.display = 'none';
    }, 2000);
  }