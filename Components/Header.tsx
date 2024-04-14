type Headrerparams = {
  text?: string;
};
function Header(props: Headrerparams) {
  return <div>{props.text}</div>;
}
export default Header;
