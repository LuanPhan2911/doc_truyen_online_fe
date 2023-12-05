import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const { pathname } = useLocation();

  const paths = pathname.split("/").slice(1);
  const breadcrumbs = paths.map((item, index) => {
    return {
      title: item,
      path: `/${paths.slice(0, index + 1).join("/")}`,
    };
  });

  return (
    <div className="navbar-brand">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {breadcrumbs?.length > 0 &&
            breadcrumbs.map((item, index) => {
              return index !== breadcrumbs.length - 1 ? (
                <li className="breadcrumb-item" key={item.title}>
                  <Link
                    to={item.path}
                    className="text-decoration-none text-capitalize"
                  >
                    {item.title}
                  </Link>
                </li>
              ) : (
                <li className="breadcrumb-item" key={item.title}>
                  <p className="text-capitalize">{item.title}</p>
                </li>
              );
            })}
        </ol>
      </nav>
    </div>
  );
};
export default Breadcrumb;
