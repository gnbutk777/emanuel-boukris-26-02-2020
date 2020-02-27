import React from 'react';
import { BsHeart,BsHeartFill } from 'react-icons/bs';
import { Col } from 'react-bootstrap';

const FavHeartIcon = ({isFill}) => {
    return (
        <Col className="align-self-center justify-content-center">
            {
                isFill ?
                <BsHeartFill size="3em"/>
                :
                <BsHeart size="3em"/>
            }
        </Col>
    );
}
 
export default FavHeartIcon;