import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Accordion, AccordionSection } from "../../components/Accordion";

describe("Accordion Component", () => {
  it("should render accordion correctly", () => {
    render(
      <Accordion>
        <AccordionSection title="Section 1">
          <p>Content For Section 1</p>
        </AccordionSection>
      </Accordion>
    );
    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.queryByText("Content For Section 1")).not.toBeInTheDocument();
  });

  it("should toggle section content visibility", () => {
    render(
      <Accordion>
        <AccordionSection title="Section 1">
          <p>Content For Section 1</p>
        </AccordionSection>
      </Accordion>
    );
    fireEvent.click(screen.getByText("Section 1"));
    expect(screen.getByText("Content For Section 1")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Section 1"));
    expect(screen.queryByText("Content For Section 1")).not.toBeInTheDocument();
  });
});
