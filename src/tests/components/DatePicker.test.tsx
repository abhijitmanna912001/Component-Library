import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { vi } from "vitest";
import DatePicker from "../../components/DatePicker";

describe("DatePicker Component", () => {
  it("should render correctly with initial date", () => {
    const handleChange = vi.fn();
    render(<DatePicker selectedDate="2025-03-01" onChange={handleChange} />);

    const input = screen.getByDisplayValue("2025-03-01");
    expect(input).toBeInTheDocument();
  });

  it("should call onChange when date is selected", () => {
    const handleChange = vi.fn();
    render(<DatePicker selectedDate="2025-03-01" onChange={handleChange} />);

    const input = screen.getByDisplayValue("2025-03-01");
    fireEvent.change(input, { target: { value: "2025-04-02" } });
    expect(handleChange).toHaveBeenCalledWith("2025-04-02");
  });
});
