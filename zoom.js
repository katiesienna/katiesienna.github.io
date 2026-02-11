function zoomImage(frame) {
  const img = frame.querySelector("img");

  if (!frame.classList.contains("zoomed")) {
    // random point inside the image
    const x = Math.random() * 100;
    const y = Math.random() * 100;

    img.style.transformOrigin = `${x}% ${y}%`;
  }

  frame.classList.toggle("zoomed");
}