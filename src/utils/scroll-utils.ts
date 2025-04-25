"use client";

export function scrollToSection(sectionId: string) {
  // Remove the # if it exists
  const id = sectionId.startsWith("#") ? sectionId.substring(1) : sectionId;

  // Find the element
  const element = document.getElementById(id);

  if (element) {
    // Get the navbar height to offset the scroll position
    const navbar = document.querySelector("nav");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    // Calculate the element's position relative to the viewport
    const elementPosition = element.getBoundingClientRect().top;

    // Calculate the absolute position and adjust for navbar height
    const offsetPosition =
      elementPosition + window.pageYOffset - navbarHeight - 20;

    // Scroll to the element
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}
