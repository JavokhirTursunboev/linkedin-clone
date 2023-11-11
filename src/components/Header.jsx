import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <h1>This is header</h1>
      {/* ============== Header Left ====================== */}
      <div className="header__left">
        <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      {/* ============== Header Right ====================== */}
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
