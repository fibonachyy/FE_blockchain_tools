import React from "react";

import Sidebar from "./sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function SecondLayout(props: LayoutProps): JSX.Element {
  return (
    <>
      <div className="main-wrapper">
        {props.children}
        <Sidebar />
      </div>
    </>
  );
}
