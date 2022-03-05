import { Link } from "react-router-dom";
import { Path } from "../consts";

function AppLinks() {
  return (
    <>
      <h1>Links</h1>
      <Link to={Path.home}>Home</Link>
      <Link to={Path.list}>List</Link>
    </>
  );
}

export default AppLinks;
