import cn from "classnames";

interface MenuItemProps {
  menuTitleKor: string;
  menuTitleEng: string;
  selectedMenu: string;
  setSelectedMenu: any;
}

const MenuItem = ({
  menuTitleKor,
  menuTitleEng,
  selectedMenu,
  setSelectedMenu,
}: MenuItemProps) => {
  return (
    <button
      className={cn(
        "text-xl text-start mb-6",
        selectedMenu === menuTitleEng ? "text-white" : "text-[#6D6D6D]"
      )}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        setSelectedMenu(menuTitleEng);
      }}
    >
      {menuTitleKor}
    </button>
  );
};

export default MenuItem;
