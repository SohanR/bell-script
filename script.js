// Load CSS for icon
const cssIcon = document.createElement("link");
cssIcon.href = "https://unpkg.com/css.gg@2.0.0/icons/css/bell.css";
cssIcon.rel = "stylesheet";
document.head.appendChild(cssIcon);

//Wait for the CSS to load
// cssIcon.onload = function () {
//   // Create a notification button
//   const notificationButton = document.createElement("button");
//   notificationButton.style.position = "fixed";
//   notificationButton.style.top = "50px";
//   notificationButton.style.left = "50px";
//   notificationButton.style.width = "40px";
//   notificationButton.style.height = "40px";
//   notificationButton.style.borderRadius = "50%";
//   notificationButton.style.backgroundColor = "red";
//   notificationButton.style.color = "white";
//   notificationButton.style.border = "none";
//   notificationButton.style.cursor = "pointer";
//   notificationButton.style.fontSize = "20px";

//   // Add icon to this button
//   const bellIcon = document.createElement("i");
//   bellIcon.className = "gg-bell";
//   bellIcon.style.fontSize = "20px"; // Adjust icon size if necessary
//   bellIcon.style.color = "white"; // Set icon color to match button
//   bellIcon.style.position = "relative";
//   bellIcon.style.left = "6px";

//   notificationButton.appendChild(bellIcon);

//   // Add click event listener to the button
//   notificationButton.addEventListener("click", () => {
//     alert("Hello World");
//   });

//   // Append the button to the body of the document
//   document.body.appendChild(notificationButton);

//   // Load Alpine.js dynamically
//   const alpineScript = document.createElement("script");
//   alpineScript.src =
//     "https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js";
//   alpineScript.defer = true;
//   document.body.appendChild(alpineScript);
// };

// // Define Alpine.js app for drawer functionality
// window.toggleDrawer = function () {
//   if (typeof Alpine === "undefined") {
//     console.error("Alpine.js is not loaded yet.");
//     return;
//   }

//   Alpine.data("drawer", () => ({
//     open: false,
//     toggleDrawer() {
//       this.open = !this.open;
//     },
//   }));
// };
