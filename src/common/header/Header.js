
import React from 'react'
import "./Header.css"
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Button } from '@material-ui/core';
import Modal from "../modal/Modal"
import { useNavigate } from 'react-router-dom';

const Header = ({movieId,baseUrl}) => {
  const navigate = useNavigate();
     const [modalIsOpen, setIsOpen] = React.useState(false);

     function openModal() {
       setIsOpen(true);
     }

    

     function closeModal() {
       setIsOpen(false);
     }


    return (
      <div className="header__container">
        <div className="header__elements">
          <Logo className="header__logo" />
          <div className="button__container">
            <Button variant="contained" onClick={openModal}>
              Login
            </Button>
            <Button variant="contained">Logout</Button>

            {movieId && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  navigate(`/bookshow/${movieId}`);
                }}
              >
                Book Show
              </Button>
            )}
          </div>
        </div>
        <Modal closeModal={closeModal} modalIsOpen={modalIsOpen} baseUrl={ baseUrl} />
      </div>
    );
 };
export default Header;