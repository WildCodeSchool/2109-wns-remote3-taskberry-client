import * as React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../test/testUtils";
import { ComponentA } from "./ComponentA";

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<ComponentA name="John Doe" />);
};

describe("render ComponentA", () => {
  test("Should show name correctly", () => {
    const wrapper = shallow(<ComponentA name="John Doe" />);
    expect(wrapper.find("#name").text()).toBe("Hello John Doe");
  });
});

describe("render ComponentA with utils", () => {
  it("should render without error", () => {
    const wrapper = setup();
    const ComponentA = findByTestAttr(wrapper, "component-content");
    expect(ComponentA.length).toBe(1);
  });
});
