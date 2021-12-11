import React from "react";
import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout(props: LayoutProps): JSX.Element {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Sidebar />
        {props.children}
        <Footer />
      </div>
    </>
  );
}
