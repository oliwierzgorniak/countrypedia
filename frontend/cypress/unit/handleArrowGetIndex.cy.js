import func from "../../src/components/Search/func/handleArrowsAngGetIndex";
import { NUMBER_OF_LIST_ELEMENTS as N } from "../../src/consts";

it("function handles vertical arrows click and returns an index of an element on the list", () => {
  expect(func("ArrowDown", 0)).to.eq(1);
  expect(func("ArrowDown", N - 1)).to.eq(0);
  expect(func("ArrowUp", N - 1)).to.eq(N - 2);
  expect(func("ArrowUp", 0)).to.eq(N - 1);
  expect(func("ArrowDown", null)).to.eq(0);
  expect(func("ArrowUp", null)).to.eq(N - 1);
});
