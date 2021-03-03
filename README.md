# Typescript-react-demo

Course from NomadCoders

- 변수에 타입 설정 (`const name: string = 'jinsu'`)
- 함수 인자, 리턴값 타입 설정
- Object의 타입은 interface를 활용하여 설정
- `variable?: type` 과 같이 object의 key 값 유무의 유연성을 줄 수 있음.

---

- Component를 만들 때도 `const Number: React.FunctionComponent<IProps>` 와 같이 type을 설정해주고 interface(IProps) 설정.
- HTML에서 `<input>`과 `<form>` 같은 경우는 특정한 type이 있음.
  1.  input에서 event를 활용할 경우, event의 type은 아래와 같다.
  - `event: React.SyntheticEvent<HTMLInputElement>`
  2.  form에서 event를 활용할 경우
  - `event: React.FormEvent`
- Nico style: Functional Component에는 interface를 만들어주지만, Styled Component에는 inline으로 interface를 활용함.

---

- styled-component에 있는 'ThemeProvider'를 활용하여 자주 사용할 css value를 쉽게 사용해보기.

```{ts}
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

ReactDOM.render(
	<React.StrictMode>
    // App component를 ThemeProvider로 감싸기
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
```

- theme.tsx

```{ts}
export default {
	blueColor: "red",
};
```

- **styled.d.ts**

```{ts}
import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		blueColor: string;
	}
}
```
