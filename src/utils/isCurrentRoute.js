const isCurrentRoute = (href, location) => {
  const target = new URL(href, "http://localhost");

  return (
    target.pathname === location.pathname &&
    target.search === location.search &&
    target.hash === location.hash
  );
};

export default isCurrentRoute;
