import * as React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../test/testUtils";
import MainNavigation from "./MainNavigation";

/**
 * Factory function to create a ShallowWrapper for the MainNavigation component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<MainNavigation />);
};

describe("render", () => {
  it("should render without error", () => {
    const wrapper = setup();
    const MainNavigationComponent = findByTestAttr(
      wrapper,
      "main-navigation-content"
    );
    expect(MainNavigationComponent.length).toBe(1);
    
  });
});
