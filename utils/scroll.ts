export function lockScroll() {
  document.body.style.overflow = "hidden";
}
export function unlockScroll() {
  document.body.style.overflow = "";
}
export function toggleScroll() {
  document.body.style.overflow =
    document.body.style.overflow == "hidden" ? "" : "hidden";
}
