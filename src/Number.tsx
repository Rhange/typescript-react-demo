import React from "react";
import styled from "styled-components";

// inline interface
const Container = styled.span<{ isBlue: boolean }>`
	color: ${(props) => (props.isBlue ? props.theme.blueColor : "black")};
`;

interface IProps {
	count: number;
}

// Set Number's type with IProps
const Number: React.FunctionComponent<IProps> = ({ count }) => (
	<Container isBlue={count > 10}>{count}</Container>
);

export default Number;
