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
        selectedMenu === menuTitleEng ? "text-text-1" : "text-text-2"
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
