import React from "react";
// import renderer from "react-test-renderer";
import { shallow } from "enzyme";
// enzyme uses renderer underneath the hood
import preload from "../..data.json";
import Search from "../Search";
import ShowCard from "../ShowCard";

test("Search renders correctly", () => {
  const component = shallow(<Search />);
  // const tree = component.toJSON();
  expect(component).toMatchSnapshot();
});

test("Search should render correct amount of shows", () => {
  const component = shallow(<Search />);
  expect(preload.shows.length).toEqual(component.find(ShowCard).length);
});

test("Search should render correct amount of shows based on search term", () => {});
