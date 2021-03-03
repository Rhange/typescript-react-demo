# Typescript-react-demo

- [x] 변수에 타입 설정 (`const name: string = 'jinsu'`)
- [x] 함수 인자, 리턴값 타입 설정
- [x] Object의 타입은 interface를 활용하여 설정
- [x] `variable?: type` 과 같이 object의 key 값 유무의 유연성을 줄 수 있음.
- [x] Component를 만들 때도 `const Number: React.FunctionComponent<IProps>` 와 같이 type을 설정해주고 interface(IProps) 설정.
- HTML에서 `<input>`과 `<form>` 같은 경우는 특정한 type이 있음.
  1.  input에서 event를 활용할 경우, event의 type은 아래와 같다.
  - `event: React.SyntheticEvent<HTMLInputElement>`
  2.  form에서 event를 활용할 경우
  - `event: React.FormEvent`
