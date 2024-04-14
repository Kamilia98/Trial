type Descriptionparams = {
  desc: string;
};
function Description(props: Descriptionparams) {
  return (
    <>
      <div>{props.desc}</div>
      <div>DES</div>
    </>
  );
}
export default Description;
