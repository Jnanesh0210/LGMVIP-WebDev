import React from 'react';
import {Button} from '@material-ui/core';

const Navigation = ({onButtonSubmit}) => {

            return(
                //used to provide the button funtionality and displays the logo
                <nav className='navbar'>
                    <h2 className="logo ">MEATSLICEO7</h2>
                    <div className='nav-links align-item-right'>
                        <Button  variant="contained" onClick={onButtonSubmit} color="secondary">
                            Get Users
                        </Button>
                       
                    </div>
                </nav>
            );
        }

//{onRouteChange, isSignedIn}
export default Navigation;
