function run() {
  var htmlCode = document.getElementById("html-editor").value;
  var cssCode = document.getElementById("css-editor").value;
  var jsCode = document.getElementById("js-editor").value;
  
  // Save code to localStorage
  localStorage.setItem('htmlCode', htmlCode);
  localStorage.setItem('cssCode', cssCode);
  localStorage.setItem('jsCode', jsCode);

  var preview = window.open();
  preview.document.write(`
    <html>
      <head>
        <style>${cssCode}</style>
      </head>
      <body>
        ${htmlCode}
        <script>${jsCode}</script>
      </body>
    </html>
  `);
  preview.document.close();
}

// Retrieve code from localStorage
document.getElementById("html-editor").value = localStorage.getItem('htmlCode');
document.getElementById("css-editor").value = localStorage.getItem('cssCode');
document.getElementById("js-editor").value = localStorage.getItem('jsCode');

alert("🔴This Website Is For InfiniteSoft Team Only");
