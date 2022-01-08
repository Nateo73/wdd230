const dateLastModified = document.lastModified;
const optionsyear = { year: "numeric" };

document.getElementById("currentyear").textContent =
  new Date().toLocaleDateString("en-US", optionsyear);

document.getElementById("lastModified").textContent = dateLastModified;
