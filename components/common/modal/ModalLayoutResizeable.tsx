import { ReactNode } from "react";

interface ModalLayoutResizeableProps {
  width: string;
  height: string;
  children: ReactNode;
}

const ModalLayoutResizeable = ({
  width,
  height,
  children,
}: ModalLayoutResizeableProps) => {
  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className="overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-full bg-black bg-opacity-70 flex justify-center items-center"
    >
      <div className="w-full h-auto opacity-100 flex-1">
        <div
          className={`w-${width} h-${height} mx-[150px] lg:mx-[200px] xl:mx-[422px] rounded-3xl shadow bg-background flex flex-col p-8 border-[3px] border-text-3`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalLayoutResizeable;
