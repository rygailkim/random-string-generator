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

document.getElementById("download-btn").onclick = function(){
    const filename = "test_data.txt";
    const content = document.getElementById("string-output").value;

    downloadFile(filename, content);
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

function downloadFile(filename, content){
  const element = document.createElement('a');

    const blob = new Blob([content], {
      type: 'plain/text'
    });

    const fileUrl = URL.createObjectURL(blob);
    
    element.setAttribute('href', fileUrl);
    element.setAttribute('download', filename);

    element.style.display = 'none';

    document.body.appendChild(element);
    element.click();

    document.body.removeChild(element);
}



