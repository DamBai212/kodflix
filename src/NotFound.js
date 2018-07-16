import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (
<div className="page-container">
<h1 className="title">Ooops, it looks like this page doesn't exist :(</h1>
<Link to="/">Gallery</Link>

</div>
);









export default NotFound;