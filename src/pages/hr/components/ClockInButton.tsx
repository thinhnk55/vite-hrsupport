import { useState } from "react";

interface ClockInButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
function ClockInButton({ onClick }: ClockInButtonProps) {
  const [isDisabled, setIsDisabled] = useState(false);
  const handleClick = (event: any) => {
    setIsDisabled(true);
    onClick(event);
  };
  return (
    <>
      <button
        disabled={isDisabled}
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Chấm công vào
      </button>
    </>
  );
}

export default ClockInButton;
