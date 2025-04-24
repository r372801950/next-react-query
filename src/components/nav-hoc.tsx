import {ComponentType, ReactElement} from "react";

export const NavHoc = <P extends object>(Component:ComponentType<P>) => {

  // return (
  //   <component />
  // )

  // return (props: P): ReactElement=> {
  //   return <Component {...props} />
  // };

  // // 方法二：使用箭头函数
  // return (props: P): ReactElement => {
  //   return <Component {...props} />;
  // };
  return function WithNav(props: P): ReactElement {
    return (
      <Component {...props} />
    );
  };
}