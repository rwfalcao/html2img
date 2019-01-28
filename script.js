function screenshot() {
    var node = document.getElementById('my-node');
    html2canvas(node).then(function(canvas) {
        console.log(canvas);
        saveAs(canvas.toDataURL(), 'file-name.png');
    });
}

function saveAs(uri, filename) {

    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        //Firefox requires the link to be in the body
        document.body.appendChild(link);
        //simulate click
        link.click();
        //remove the link when done
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}

inputTitulo = document.getElementById("campotitulo");
inputData = document.getElementById("campodata");

inputTitulo.addEventListener('input', function (evt) {
    title = inputTitulo.value;
    document.getElementById("titu").textContent = title;
});

inputData.addEventListener('input', function (evt) {
    data = inputData.value;
    document.getElementById("dataz").textContent = data;
});