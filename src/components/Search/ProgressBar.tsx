import "@/assets/styles/ProgressBar.css";

type ProgressBar = {
  percents: string;
  barName: string;
  className: string;
};

function ProgressBar({ barName, percents, className }: ProgressBar) {
  if (Number.isNaN(Number.parseInt(percents))) {
    return null;
  }
  return (
    <div className={[className, "progress"].join(" ")}>
      {barName}: {percents}
      <span
        className="filler"
        style={{
          width: `${percents}%`,
        }}
      />
    </div>
  );
}

export default ProgressBar;
