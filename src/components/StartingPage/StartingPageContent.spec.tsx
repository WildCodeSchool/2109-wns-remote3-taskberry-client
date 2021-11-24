import * as React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../test/testUtils";
import StartingPageContent from "./StartingPageContent";

/**
 * Factory function to create a ShallowWrapper for the StartingPageContent component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<StartingPageContent />);
};

describe("render", () => {
  it("should render without error", () => {
    const wrapper = setup();
    const StartingPageContentComponent = findByTestAttr(
      wrapper,
      "starting-page-content"
    );
    expect(StartingPageContentComponent.length).toBe(1);
  });
});
