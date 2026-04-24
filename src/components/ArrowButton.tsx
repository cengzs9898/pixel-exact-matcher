import arrowLeft from "@/assets/arrow-left.svg";

interface ArrowButtonProps {
  direction?: "left" | "right";
  onClick?: () => void;
  ariaLabel?: string;
  /** Tailwind size classes, e.g. "w-[60px] h-[60px] md:w-[105px] md:h-[105px]" */
  sizeClassName?: string;
}

const ArrowButton = ({
  direction = "left",
  onClick,
  ariaLabel,
  sizeClassName = "w-[105px] h-[105px]",
}: ArrowButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel ?? (direction === "left" ? "Önceki" : "Sonraki")}
      className={`inline-flex items-center justify-center hover:opacity-80 active:scale-95 transition-transform ${sizeClassName}`}
      style={{ lineHeight: 0 }}
    >
      <img
        src={arrowLeft}
        alt=""
        aria-hidden="true"
        className="w-full h-full block"
        style={{
          transform: direction === "right" ? "scaleX(-1)" : undefined,
        }}
      />
    </button>
  );
};

export default ArrowButton;
