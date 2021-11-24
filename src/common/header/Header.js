import React from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Button } from "@material-ui/core";
import Modal from "../modal/Modal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { performLogout} from "../Redux"
const Header = ({ movieId, baseUrl }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function logout() {
    dispatch(performLogout());
  }

  return (
    <div className="header__container">
      <div className="header__elements">
        <Logo className="header__logo" />
        <div className="button__container">
          {isLoggedIn ? (
            <Button variant="contained" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Button variant="contained" onClick={openModal}>
              Login
            </Button>
          )}

          {movieId && (
            <Button
              style={{ marginLeft: "10px" }}
              variant="contained"
              color="primary"
              onClick={() => {
                isLoggedIn ? navigate(`/movie/${movieId}`) : openModal();
              }}
            >
              Book Show
            </Button>
          )}
        </div>
      </div>
      <Modal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        baseUrl={baseUrl}
      />
    </div>
  );
};
export default Header;
