import { Link } from "react-router-dom";

function AppLinks() {
  return (
    <>
      <h1>Links</h1>
      <Link to="/foo">Foo</Link>
      <Link to="/bar">Bar</Link>
    </>
  );
}

export default AppLinks;
