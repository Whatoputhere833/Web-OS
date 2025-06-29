function launchApp(appName) {
  const win = document.createElement("iframe");
  win.src = `apps/${appName}.html`;
  win.className = "app-window";
  win.style.position = "absolute";
  win.style.top = "50px";
  win.style.left = "100px";
  win.style.width = "400px";
  win.style.height = "300px";
  win.style.zIndex = "999";
  document.getElementById("desktop").appendChild(win);
}
