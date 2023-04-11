export default function handleArrowsAndGetIndex(
  keyCode: string,
  selectedElement: number | null
) {
  let index;
  if (keyCode === "ArrowDown") {
    index = selectedElement === null ? 0 : selectedElement + 1;
  } else if (keyCode === "ArrowUp") {
    index = selectedElement === null ? 6 : selectedElement - 1;
  }

  return index;
}
