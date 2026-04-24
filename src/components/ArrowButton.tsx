import arrowLeft from "@/assets/arrow-left.svg";

interface ArrowButtonProps {
  direction?: "left" | "right";
  size?: number;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

const ArrowButton = ({
  direction = "left",
  size = 105,
  onClick,
  ariaLabel,
  className = "",
}: ArrowButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel ?? (direction === "left" ? "Önceki" : "Sonraki")}
      className={`inline-flex items-center justify-center hover:opacity-80 transition-opacity ${className}`}
      style={{ width: size, height: size, lineHeight: 0 }}
    >
      <img
        src={arrowLeft}
        alt=""
        aria-hidden="true"
        style={{
          width: size,
          height: size,
          transform: direction === "right" ? "scaleX(-1)" : undefined,
          display: "block",
        }}
      />
    </button>
  );
};

export default ArrowButton;
