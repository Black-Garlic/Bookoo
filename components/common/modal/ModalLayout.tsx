import { ReactNode } from "react";

const ModalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full bg-black bg-opacity-70 flex justify-center items-center"
    >
      <div className="w-full h-auto opacity-100 flex-1">
        <div className="w-[600px] h-full mx-auto rounded-3xl shadow bg-background flex flex-col p-8 border-[3px] border-text-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalLayout;
