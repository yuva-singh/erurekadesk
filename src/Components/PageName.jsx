import React from "react";
import { Link } from "react-router-dom";

function PageName({PageNames,icons}) {
  return (
    <li>
      <Link to={{}} className={"nav-link px-1 fs-5 PageName"}>
       {icons} {PageNames}
      </Link>
    </li>
  );
}

export default PageName;
