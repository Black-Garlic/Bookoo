interface HeaderProps {
  setNotificationOpen: any;
  setMyPageOpen: any;
  setLoginOpen: any;
}

const Header = ({
  setLoginOpen,
  setNotificationOpen,
  setMyPageOpen,
}: HeaderProps) => {
  return (
    // GNB
    <div className={"w-full h-[80px] flex flex-row bg-[#292929] p-7 fixed"}>
      {/* Left Area */}
      <div className={"flex text-text-1 justify-star"}>
        {/* Logo */}
        <div className={"w-20"}>Logo</div>
      </div>
      {/* Search Bar */}
      <div className={"text-text-1 flex-1 ml-40"}>Search Bar</div>
      {/* Right Area */}
      <div className={"flex flex-row text-text-1 justify-end"}>
        <button className={"w-6 h-6"}>
          <img src={"svg/uil_search-alt.svg"} alt={"search"} />
        </button>
        <div className={"w-6 h-6"} />
        <button className={"w-6 h-6"}>
          <img src={"svg/uil_pen.svg"} alt={"pen"} />
        </button>
        <div className={"w-6 h-6"} />
        <button
          className={"w-6 h-6"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            setNotificationOpen(true);
          }}
        >
          <img src={"svg/uil_bell.svg"} alt={"bell"} />
        </button>
        <div className={"w-6 h-6"} />
        <button
          className={"w-6 h-6"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            setMyPageOpen(true);
          }}
        >
          <img src={"svg/uil_grin.svg"} alt={"grin"} />
        </button>
        <div className={"w-6 h-6"} />
        <button
          className={"w-6 h-6"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            setLoginOpen(true);
          }}
        >
          <img src={"svg/uil_grin.svg"} alt={"grin"} />
        </button>
      </div>
    </div>
  );
};
export default Header;
