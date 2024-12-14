// Optional: Add interactivity (e.g., smooth scrolling)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  
const pdfUrl = 'path-to-your-brochure.pdf';

pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
  pdf.getPage(1).then(page => {
    const canvas = document.getElementById('pdf-canvas');
    const ctx = canvas.getContext('2d');

    // Set viewport to scale the PDF
    const viewport = page.getViewport({ scale: 1.2 });
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    // Render the PDF page
    page.render({ canvasContext: ctx, viewport: viewport });
  });
});