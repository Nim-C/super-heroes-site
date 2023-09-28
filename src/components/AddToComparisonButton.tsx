import React, { useCallback, useState } from "react";

import AddToComparison from "@/assets/svg/add-to-comparison.svg?react";
import "@/assets/styles/AddToComparisonButton.css";

function AddToComparisonButton({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const [tooltipStatus, setTooltipStatus] = useState<"out" | "hidden" | "in">(
    "out"
  );

  const handleMouseEnter = useCallback(() => {
    setTooltipStatus("in");
  }, []);
  const handleMouseLeave = useCallback(() => {
    setTooltipStatus("hidden");
  }, []);
  const handleHideAnimationEnd = useCallback(() => {
    setTooltipStatus("out");
  }, []);

  return (
    <button
      className="add-to-comparison-button"
      type="button"
      title="Add superhero to comparison table"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      + 🦸 \ 🦹
      {tooltipStatus === "in" && <AddToComparison className="tooltip-show" />}
      {tooltipStatus === "hidden" && (
        <AddToComparison
          className="tooltip-hide"
          onAnimationEnd={handleHideAnimationEnd}
        />
      )}
    </button>
  );
}

export default AddToComparisonButton;
