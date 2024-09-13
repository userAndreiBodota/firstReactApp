import { Button } from "../ui/button";

export default function ButtonGrid({
  onNumberClick,
  onOperationClick,
  onEqualsClick,
  onClearClick,
}) {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {buttons.map((btn) => (
        <Button
          key={btn}
          onClick={() => {
            if (btn === "=") onEqualsClick();
            else if (["+", "-", "*", "/"].includes(btn)) onOperationClick(btn);
            else onNumberClick(btn);
          }}
          className={`h-14 text-xl font-bold ${
            ["/", "*", "-", "+", "="].includes(btn)
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-gray-800 hover:bg-gray-700"
          } text-gray-100`}
        >
          {btn}
        </Button>
      ))}
      <Button
        onClick={onClearClick}
        className="col-span-4 h-14 text-xl font-bold bg-gray-700 hover:bg-gray-600 text-gray-100"
      >
        Clear
      </Button>
    </div>
  );
}
