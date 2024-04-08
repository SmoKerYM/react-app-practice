import { ReactNode } from "react";

/**
 * @param {ReactNode} children;
 */
function Alert({ children }) {
  return <div class="alert alert-primary">{children}</div>;
}
// const Alert = ({ children }) => {
//     return <div class="alert alert-primary">{children}</div>;
// }

export default Alert;
