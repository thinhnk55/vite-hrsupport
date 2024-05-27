import { useState } from "react";

interface ClockOutButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
function ClockOutButton({ onClick }: ClockOutButtonProps) {
  const [isDisabled, setIsDisabled] = useState(false);
  const handleClick = (event: any) => {
    setIsDisabled(true);
    onClick(event);
  };
  return (
    <>
      <button
        disabled={isDisabled}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Chấm công ra
      </button>
    </>
  );
}

export default ClockOutButton;
