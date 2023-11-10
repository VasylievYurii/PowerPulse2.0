import React from 'react';
import PropTypes from 'prop-types';
import { TitlePageStyle } from '.';

const TitlePage = ({ title }) => {
    console.log(title);
    return (
        <TitlePageStyle>{title}</TitlePageStyle>
)};

TitlePage.propTypes = {
    title: PropTypes.string.isRequired
};

export default TitlePage;
