import { render, screen } from "@testing-library/react";
import React from "react";
import { Card } from "../../components";

describe("Card Component", () => {
  it("renders with default props", () => {
    render(<Card>Default Card</Card>);
    const cardElement = screen.getByText(/Default Card/i);
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass("w-80 h-60");
    expect(cardElement).toHaveClass("shadow-md");
    expect(cardElement).toHaveClass("border-gray-300");
  });

  it("applies large size class", () => {
    render(<Card size="large">Large Card</Card>);
    const cardElement = screen.getByText(/Large Card/i);
    expect(cardElement).toHaveClass("w-96 h-72");
  });

  it("applies no shadow when shadow is not there", () => {
    render(<Card shadow="none">No Shadow Card</Card>);
    const cardElement = screen.getByText(/No Shadow Card/i);
    expect(cardElement).toHaveClass("shadow-none");
  });

  it("applies large shadow when shadow is lg", () => {
    render(<Card shadow="lg">Large Shadow Card</Card>);
    const cardElement = screen.getByText(/Large Shadow Card/i);
    expect(cardElement).toHaveClass("shadow-lg");
  });

  it("applies no border when border is none", () => {
    render(<Card border="none">No Border Card</Card>);
    const cardElement = screen.getByText(/No Border Card/i);
    expect(cardElement).toHaveClass("border-none");
  });

  it("applies rounded border when border is rounded", () => {
    render(<Card border="rounded">Rounded Border Card</Card>);
    const cardElement = screen.getByText(/Rounded Border Card/i);
    expect(cardElement).toHaveClass("border-2 border-gray-300 rounded-lg");
  });

  it("applies additional custom className", () => {
    render(<Card className="custom-class">Custom Class Card</Card>);
    const cardElement = screen.getByText(/Custom Class Card/i);
    expect(cardElement).toHaveClass("custom-class");
  });

  it("renders children correctly", () => {
    render(
      <Card>
        <div>Child Content</div>
      </Card>
    );
    const childContent = screen.getByText(/Child Content/i);
    expect(childContent).toBeInTheDocument();
  });

  it("applies correct combination of size, shadow and border props", () => {
    render(
      <Card size="large" shadow="sm" border="solid">
        Combined Props Card
      </Card>
    );

    const cardElement = screen.getByText(/Combined Props Card/i);
    expect(cardElement).toHaveClass("w-96 h-72");
    expect(cardElement).toHaveClass("shadow-sm");
    expect(cardElement).toHaveClass("border-gray-300");
  });
});
