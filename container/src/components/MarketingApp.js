import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history?.location?.pathname,
      onNavigate: function({ pathname }){
        if (history?.location?.pathname !== pathname) {
          history.push(pathname);
        }
      },
    });

    //Trigger onParentNavigate when route changes is container
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
