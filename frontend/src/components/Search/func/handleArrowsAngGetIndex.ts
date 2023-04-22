import { NUMBER_OF_LIST_ELEMENTS as N } from "../../../consts";

export default function handleArrowsAndGetIndex(
  keyCode: string,
  selectedElement: number | null
) {
  let index;

  if (keyCode === "ArrowDown") {
    index = selectedElement === null ? 0 : selectedElement + 1;
  } else if (keyCode === "ArrowUp") {
    index = selectedElement === null ? N - 1 : selectedElement - 1;
  }

  if (typeof index === "number") {
    if (index < 0) {
      return N - (Math.abs(index) % N);
    } else {
      return index % N;
    }
  }
}
