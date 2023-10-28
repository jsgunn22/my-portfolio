export default function Button(props) {
  const classList = `${"bg-pri-5  rounded  px-4  py-3  h-10  cursor-pointer hover:bg-pri-9 text-h4  font-medium  text-neu-0 "} ${
    props.style
  }`;
  return <button className={classList}>{props.label}</button>;
}
