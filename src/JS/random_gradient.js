function getRandomGradient() {
  const colors = [];

  // Generate the first random color
  const color1 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  colors.push(color1);

  // Generate the second random color
  const color2 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  colors.push(color2);

  // Create the CSS gradient string
  const gradient = `linear-gradient(to right, ${colors[0]}, ${colors[1]})`;

  return gradient;
}
