import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useLocation, Link as RouterLink } from "react-router-dom";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
  console.log(event.target);
}

function BasicBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  // console.log(pathnames);

  return (
    <div role="presentation" onClick={handleClick} className="my-2">
      <Breadcrumbs aria-label="breadcrumb" sx={{ padding: 2 }}>
        <Link component={RouterLink} to="/" underline="hover" className="text-black">
          Home
        </Link>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return index === pathnames.length - 1 ? (
            <Typography key={to} color="textSecondary">
              {value}
            </Typography>
          ) : (
            <Link key={to} component={RouterLink} to={to} underline="hover" className="text-black">
              {value}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}

export default BasicBreadcrumbs;
