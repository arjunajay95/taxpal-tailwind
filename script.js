// ------------------------------------------- < Selecting elements >----------------------------------------------- //
const tabs = document.querySelectorAll(".feature-tab");
const featureImg = document.getElementById("feature-img");
const mobile_tabs = document.querySelectorAll(".feature-tab-mobile");
const mobile_featureImg = document.getElementById("mobile-feature-img");
const mobile_feature_info = document.querySelectorAll(".feature-info");

const feature_card = document.querySelectorAll(".feature-card");

// ------------------------------------------- < Primary Features >----------------------------------------------- //

// Store feature image screenshot URLs in an array matching the order of tabs
const imageUrls = ["https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.948a58d4.png&w=3840&q=75", "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpenses.6dca4b99.png&w=3840&q=75", "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvat-returns.90e74b9d.png&w=3840&q=75", "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freporting.81550c92.png&w=3840&q=75"];

// Active classes
const active_classes = ["active", "bg-white/10", "ring-1", "ring-white/10", "ring-inset"];
const mobile_active_classes = ["active", "bg-white"];

// ---------------------- Initialize first tab - active on page load
// Larger screens
if (tabs.length > 0) {
  tabs[0].classList.add(...active_classes);
  const active_p = tabs[0].querySelector("p");
  active_p.classList.replace("text-blue-100", "text-white");
}

// Mobile and medium screens
if (mobile_tabs.length > 0) {
  mobile_tabs[0].classList.add(...mobile_active_classes);
  mobile_tabs[0].classList.replace("text-blue-50", "text-blue-600");
  mobile_tabs[0].classList.remove("font-light");
  mobile_feature_info[0].classList.toggle("hidden");
}

// ---------------------- Activate the user-clicked tab and rest the others
// Larger screens
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    // Remove active classes from EVERY tab
    // Replace p element colors to inactive text color
    tabs.forEach((t) => {
      t.classList.remove(...active_classes);
      const p = t.querySelector("p");
      p.classList.replace("text-white", "text-blue-100");
    });

    // Add active classes ONLY to the tab that was just clicked
    // Replace text with active color for the active tab's p element
    tab.classList.add(...active_classes);
    const active_p = tab.querySelector("p");
    active_p.classList.replace("text-blue-100", "text-white");

    // Swap the image URL to match the tab index
    featureImg.src = imageUrls[i];
  });
});

// Mobile and medium screens
mobile_tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    // Remove active classes from EVERY tab
    mobile_tabs.forEach((t) => {
      t.classList.remove(...mobile_active_classes);
      t.classList.replace("text-blue-600", "text-blue-50");
      t.classList.add("font-light");
    });

    mobile_feature_info.forEach((i) => {
      i.classList.add("hidden");
    });

    // Add active classes ONLY to the tab that was just clicked
    tab.classList.add(...mobile_active_classes);
    tab.classList.replace("text-blue-50", "text-blue-600");
    tab.classList.remove("font-light");

    // Swap the image URL to match the tab index
    mobile_featureImg.src = imageUrls[i];

    // Toggle feature info elements on/off
    mobile_feature_info[i].classList.toggle("hidden");
  });
});

// ------------------------------------------- < Secondary Features >----------------------------------------------- //

// Initialize functions for larger screens

// Activating / deactivating card elements
function activate_card(element) {
  element.classList.remove("lg:opacity-75", "lg:hover:opacity-100");
  const icon = element.querySelector(".icon");
  const heading = element.querySelector("h3");
  icon.classList.remove("lg:bg-slate-500");
  heading.classList.remove("lg:text-slate-600");
}

function dectivate_card(element) {
  element.classList.add("lg:opacity-75", "lg:hover:opacity-100");
  const icon = element.querySelector(".icon");
  const heading = element.querySelector("h3");
  icon.classList.add("lg:bg-slate-500");
  heading.classList.add("lg:text-slate-600");
}

// Scroll Feature Image Screenshot div to center with click event
function scrollToDiv(index) {
  const container = document.getElementById("scroll-container");
  const divsList = Array.from(container.children);
  const targetDiv = divsList[index];

  // Increase focus for selected div in center
  divsList.forEach((div, i) => {
    if (i === index) {
      div.classList.remove("opacity-65");
    } else {
      div.classList.add("opacity-65");
    }
  });

  targetDiv.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
}

// ---------------------- Initialize first card - active on page load
// Larger screens
if (feature_card.length > 0) {
  activate_card(feature_card[0]);
}

// ---------------------- Activate the user-clicked tab and rest the others
// Larger screens
feature_card.forEach((card, i) => {
  card.addEventListener("click", () => {
    // first inactive all cards
    feature_card.forEach((c) => {
      dectivate_card(c);
    });

    // activate only the card with click event
    activate_card(card);

    scrollToDiv(i);
  });
});
