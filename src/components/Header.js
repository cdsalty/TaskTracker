import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = e => {
    console.log("Button Clicked");
  };

  return (
    <header className="header">
      <h2>{title}</h2>
      <Button color="blue" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker"
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
