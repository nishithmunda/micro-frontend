import { mount } from "auth/AuthApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default ({ setSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate, onSignIn } = mount(ref.current, {
      initialPath: history?.location?.pathname,
      onNavigate: ({ pathname }) => {
        if (history?.location?.pathname !== pathname) {
          history.push(pathname);
        }
      },
      onSignIn: (e) => {
        setSignIn(e);
      },
    });

    //Trigger onParentNavigate when route changes is container
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
