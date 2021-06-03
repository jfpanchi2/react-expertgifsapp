import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Preubas en GifGridItem", () => {
  test("Debe de mostrar el componente correctamente", () => {
    const wrapper = shallow(<GifGridItem></GifGridItem>);
    expect(wrapper).toMatchSnapshot();
  });
});
