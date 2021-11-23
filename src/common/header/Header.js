
import React from 'react'
import "./Header.css"
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Button } from '@material-ui/core';
import Modal from "../modal/Modal"

const Header = () => {

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
                    <Button variant="contained" onClick={ openModal}>Login</Button>
                    <Button variant="contained">Logout</Button>
                    <Button variant="contained" color="primary">Book Show</Button>
          </div>
            </div>
            <Modal closeModal={ closeModal} modalIsOpen={modalIsOpen} />
      </div>
    );
 };
export default Header;