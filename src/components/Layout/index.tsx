import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <p>Hello World</p>
      {children}
    </div>
  );
};

export default Layout;
