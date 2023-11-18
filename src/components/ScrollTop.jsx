import { useState } from "react";

import { useEffect } from "react";

const ScrollTop = () => {
  const [ScrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  const ScrollUP = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div>
      {ScrollTop && (
        <button onClick={ScrollUP} className="topbtn">
          ⇑
        </button>
      )}
    </div>
  );
};
export default ScrollTop;
