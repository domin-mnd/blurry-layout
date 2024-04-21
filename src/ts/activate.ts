const CURRENT_URL = normalize(window.location.href);

/**
 * Normalize href by removing trailing parameters.
 * @param {string} href - Href of the element.
 */
function normalize(href: string) {
  return href.split("?")[0];
}

/**
 * Apply active data to the element if it matches the URL.
 * @param {HTMLAnchorElement} element - The element to apply active data to.
 */
function applyDataActive(element: HTMLAnchorElement) {
  if (element.href === CURRENT_URL)
    element.setAttribute("data-active", "");
}

document.querySelectorAll("a").forEach(applyDataActive);
