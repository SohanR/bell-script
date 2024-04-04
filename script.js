// Load CSS for icon
const cssIcon = document.createElement("link");
cssIcon.href = "https://unpkg.com/css.gg@2.0.0/icons/css/bell.css";
cssIcon.rel = "stylesheet";
document.head.appendChild(cssIcon);

// Define styles for the drawer and notification button
const styles = `
<style>
  .drawer {
    display: none;
  }
  .drawer__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 200;
    opacity: 0;
    transition: opacity 0.3s;
    will-change: opacity;
    background-color: #000;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .drawer__header {
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
  }
  .drawer__close {
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    background-image: url("data:image/svg+xml,%0A%3Csvg width='15px' height='16px' viewBox='0 0 15 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='2.-Menu' transform='translate(-15.000000, -13.000000)' stroke='%23000000'%3E%3Cg id='Group' transform='translate(15.000000, 13.521000)'%3E%3Cpath d='M0,0.479000129 L15,14.2971819' id='Path-3'%3E%3C/path%3E%3Cpath d='M0,14.7761821 L15,-1.24344979e-14' id='Path-3'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    margin-left: 1rem;
  }
  .drawer__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    max-width: 500px;
    z-index: 9999;
    overflow: auto;
    transition: transform 0.3s;
    will-change: transform;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    -webkit-transform: translate3d(103%, 0, 0);
    transform: translate3d(103%, 0, 0);
    -webkit-overflow-scrolling: touch;
    box-shadow: 0 2px 6px #777;
  }
  .drawer__content {
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    flex-grow: 1;
    padding: 1.5rem;
  }
  .drawer--left .drawer__wrapper {
    left: 0;
    right: auto;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  .drawer.is-active {
    display: block;
  }
  .drawer.is-visible .drawer__wrapper {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .drawer.is-visible .drawer__overlay {
    opacity: 0.5;
  }
</style>
`;

// Define HTML for notification button
const notificationButtonHTML = `
<div>
  <a href="#" data-drawer-trigger aria-controls="drawer-name-left" aria-expanded="false">
    <button id="notificationButton" style="position: fixed; top: 50px; left: 50px; width: 40px; height: 40px; border-radius: 50%; background-color: #ff802a; color: white; border: none; cursor: pointer; font-size: 20px;">
      <i class="gg-bell" style="font-size: 20px; color: white; position: relative; left: 6px"></i>
    </button>
  </a>
</div>
`;

// section

const drawerHTML = `
<section
class="drawer drawer--left"
id="drawer-name-left"
data-drawer-target
>
<div class="drawer__overlay" data-drawer-close tabindex="-1"></div>
<div class="drawer__wrapper">
  <div class="drawer__header">
    <div class="drawer__title">Header Title</div>
    <button
      class="drawer__close"
      data-drawer-close
      aria-label="Close Drawer"
    ></button>
  </div>
  <div class="drawer__content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in
      aliquid nulla, sed veritatis, officiis ea aut natus quas voluptates
      perferendis ratione modi ab qui omnis cum labore alias eos.
    </p>
    <div style="padding: 100px 0"></div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut
      exercitationem laborum vero tenetur officiis facilis eveniet sunt
      quo voluptatibus sit reiciendis, iusto quia et quidem? Dolores dolor
      et necessitatibus.
    </p>
    <div style="padding: 100px 0"></div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut
      exercitationem laborum vero tenetur officiis facilis eveniet sunt
      quo voluptatibus sit reiciendis, iusto quia et quidem? Dolores dolor
      et necessitatibus.
    </p>
    <div style="padding: 100px 0"></div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut
      exercitationem laborum vero tenetur officiis facilis eveniet sunt
      quo voluptatibus sit reiciendis, iusto quia et quidem? Dolores dolor
      et necessitatibus.
    </p>
    <div style="padding: 100px 0"></div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aut
      exercitationem laborum vero tenetur officiis facilis eveniet sunt
      quo voluptatibus sit reiciendis, iusto quia et quidem? Dolores dolor
      et necessitatibus.
    </p>
    <p>
      <a href="#" data-drawer-close aria-label="Close Drawer"
        >Close drawer</a
      >
    </p>
  </div>
</div>
</section>

`;

// Add styles to the head of the document
document.head.insertAdjacentHTML("beforeend", styles);

// Add notification button HTML to the body of the document
document.body.insertAdjacentHTML("beforeend", notificationButtonHTML);

document.body.insertAdjacentHTML("beforeend", drawerHTML);

// Define JavaScript for drawer functionality
const drawerScript = `
<script>
  /*!
   * Based on articles on
   * https://gomakethings.com
   */

  var drawer = function () {
    // Trap Focus
    function trapFocus(element) {
      var focusableEls = element.querySelectorAll(
        'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
      );
      var firstFocusableEl = focusableEls[0];
      var lastFocusableEl = focusableEls[focusableEls.length - 1];
      var KEYCODE_TAB = 9;

      element.addEventListener("keydown", function (e) {
        var isTabPressed = e.key === "Tab" || e.keyCode === KEYCODE_TAB;

        if (!isTabPressed) {
          return;
        }

        if (e.shiftKey) {
          /* shift + tab */ if (
            document.activeElement === firstFocusableEl
          ) {
            lastFocusableEl.focus();
            e.preventDefault();
          }
        } /* tab */ else {
          if (document.activeElement === lastFocusableEl) {
            firstFocusableEl.focus();
            e.preventDefault();
          }
        }
      });
    }

    //
    // Settings
    //
    var settings = {
      speedOpen: 50,
      speedClose: 350,
      activeClass: "is-active",
      visibleClass: "is-visible",
      selectorTarget: "[data-drawer-target]",
      selectorTrigger: "[data-drawer-trigger]",
      selectorClose: "[data-drawer-close]",
    };

    //
    // Methods
    //

    // Toggle accessibility
    var toggleAccessibility = function (event) {
      if (event.getAttribute("aria-expanded") === "true") {
        event.setAttribute("aria-expanded", false);
      } else {
        event.setAttribute("aria-expanded", true);
      }
    };

    // Open Drawer
    var openDrawer = function (trigger) {
      // Find target
      var target = document.getElementById(
        trigger.getAttribute("aria-controls")
      );

      // Make it active
      target.classList.add(settings.activeClass);

      // Make body overflow hidden so it's not scrollable
      document.documentElement.style.overflow = "hidden";

      // Toggle accessibility
      toggleAccessibility(trigger);

      // Make it visible
      setTimeout(function () {
        target.classList.add(settings.visibleClass);
        trapFocus(target);
      }, settings.speedOpen);
    };

    // Close Drawer
    var closeDrawer = function (event) {
      // Find target
      var closestParent = event.closest(settings.selectorTarget),
        childrenTrigger = document.querySelector(
          '[aria-controls="' + closestParent.id + '"'
        );

      // Make it not visible
      closestParent.classList.remove(settings.visibleClass);

      // Remove body overflow hidden
      document.documentElement.style.overflow = "";

      // Toggle accessibility
      toggleAccessibility(childrenTrigger);

      // Make it not active
      setTimeout(function () {
        closestParent.classList.remove(settings.activeClass);
      }, settings.speedClose);
    };

    // Click Handler
    var clickHandler = function (event) {
      // Find elements
      var toggle = event.target,
        open = toggle.closest(settings.selectorTrigger),
        close = toggle.closest(settings.selectorClose);

      // Open drawer when the open button is clicked
      if (open) {
        openDrawer(open);
      }

      // Close drawer when the close button (or overlay area) is clicked
      if (close) {
        closeDrawer(close);
      }

      // Prevent default link behavior
      if (open || close) {
        event.preventDefault();
      }
    };

    // Keydown Handler, handle Escape button
    var keydownHandler = function (event) {
      if (event.key === "Escape" || event.keyCode === 27) {
        // Find all possible drawers
        var drawers = document.querySelectorAll(settings.selectorTarget),
          i;

        // Find active drawers and close them when escape is clicked
        for (i = 0; i < drawers.length; ++i) {
          if (drawers[i].classList.contains(settings.activeClass)) {
            closeDrawer(drawers[i]);
          }
        }
      }
    };

    //
    // Inits & Event Listeners
    //
    document.addEventListener("click", clickHandler, false);
    document.addEventListener("keydown", keydownHandler, false);

    // Click handler for document body
    document.body.addEventListener("click", function(event) {
      // Find target
      var target = event.target;

      // Check if the click is outside of the drawer
      if (!target.closest(".drawer__wrapper") && !target.closest("[data-drawer-trigger]") && document.querySelector(".drawer.is-active")) {
        closeDrawer(document.querySelector(".drawer.is-active"));
      }

      // Check if the click is on the close button or the "Close drawer" link
      if (target.closest("[data-drawer-close]")) {
        closeDrawer(target.closest(".drawer"));
      }
    });

    // Click handler for drawer open buttons
    document.querySelectorAll("[data-drawer-trigger]").forEach(function(button) {
      button.addEventListener("click", function(event) {
        openDrawer(button);
      });
    });

    // Keydown handler for escape key
    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape" || event.keyCode === 27) {
        // Find all possible drawers
        var drawers = document.querySelectorAll(settings.selectorTarget);

        // Find active drawers and close them when escape is clicked
        drawers.forEach(function(drawer) {
          if (drawer.classList.contains(settings.activeClass)) {
            closeDrawer(drawer);
          }
        });
      }
    });
  };

  drawer();
</script>
`;

// Append JavaScript for drawer functionality to the body of the document
document.body.insertAdjacentHTML("beforeend", drawerScript);

// Define notification button click event listener
document
  .getElementById("notificationButton")
  .addEventListener("click", function (event) {
    var drawer = document.querySelector(".drawer--left");
    drawer.classList.add("is-active");
    drawer.classList.add("is-visible");
    document.documentElement.style.overflow = "hidden";
  });

// Define close drawer click event listener
document
  .querySelector("[data-drawer-close]")
  .addEventListener("click", function (event) {
    var drawer = document.querySelector(".drawer--left");
    drawer.classList.remove("is-active");
    drawer.classList.remove("is-visible");
    document.documentElement.style.overflow = "";
  });
