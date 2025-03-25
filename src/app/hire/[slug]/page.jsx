import React from "react";
import HireRorDevelopers from "../../../components/hire/HireRorDevelopers";
import HireReactJsDevelopers from "../../../components/hire/HireReactJsDevelopers";
import NodeDevelopment from "../../../components/services/NodeDevelopment";
import AngularDevelopment from "../../../components/services/AngularDevelopment";
import FullStackDevelopment from "../../../components/services/FullStackDevelopment";
import AWSDevelopment from  "../../../components/services/AWSDevelopment";
import HerokuDevelopment from "../../../components/services/HerokuDevelopment";
import UiDevelopment from "../../../components/services/UiDevelopment";
const Page = ({ params }) => {
  if (params?.slug === "ror") {
    return <HireRorDevelopers />;
  } else if (params?.slug === "reactjs"){
    return <HireReactJsDevelopers/>
  }else if (params?.slug === "nodejs"){
    return <NodeDevelopment/>
  }else if (params?.slug === "angularjs"){
    return <AngularDevelopment/>
  }else if (params?.slug === "fullstackdevelopment"){
    return <FullStackDevelopment/>
  }else if (params?.slug === "uiuxdevelopment"){
     return <UiDevelopment/>
  }else if (params?.slug === "aws"){
    return <AWSDevelopment/>
  }else if (params?.slug === "heroku"){
    return <HerokuDevelopment/>
  }
};
export default Page;
