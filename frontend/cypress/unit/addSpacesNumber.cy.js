import addSpacesNumber from "../../src/components/InforCard/func/addSpacesNumber";

it("function adds space between 3 digits", () => {
  expect(addSpacesNumber(1236)).to.eq("1 236");
  expect(addSpacesNumber(1234567)).to.eq("1 234 567");
  expect(addSpacesNumber(1)).to.eq("1");
  expect(addSpacesNumber(123)).to.eq("123");
  expect(addSpacesNumber("London")).to.eq("London");
  expect(addSpacesNumber(undefined)).to.eq(undefined);
});
