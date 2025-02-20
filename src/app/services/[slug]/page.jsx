import React from "react";
import RorDevelopment from "../../../components/services/RorDevelopment";
import ReactDevelopment from "../../../components/services/ReactDevelopment";
import NodeDevelopment from "../../../components/services/NodeDevelopment";
import AngularDevelopment from "../../../components/services/AngularDevelopment";
import FullStackDevelopment from "../../../components/services/FullStackDevelopment";
import AWSDevelopment from  "../../../components/services/AWSDevelopment";
import HerokuDevelopment from "../../../components/services/HerokuDevelopment";

const Page = ({ params }) => {
  if (params?.slug === "ror") {
    return <RorDevelopment />;
  } else if (params?.slug === "react"){
    return <ReactDevelopment/>
  }else if (params?.slug === "node"){
    return <NodeDevelopment/>
  }else if (params?.slug === "angular"){
    return <AngularDevelopment/>
  }else if (params?.slug === "fullstack"){
    return <FullStackDevelopment/>
  }else if (params?.slug === "aws"){
    return <AWSDevelopment/>
  }else if (params?.slug === "heroku"){
    return <HerokuDevelopment/>
  }

};

export default Page;
