import React from 'react';

const Footer = () => {
    return(
    <footer style={footerStyle}>
        <p>© 2024 Your Company Name. All rights reserved and oooo.</p>
        <div className="banner">
            <div className="title">
            </div>
            <div className="tag">
                <div>
                <input type="text" placeholder="Email"/>
                <button>Subscribe</button>
                </div>  
                <p>sign up with your email address to recieve news and updates!</p>  
            </div>
        </div>
    </footer>
    );
};
const footerStyle = {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    marginTop: '30px',
};

export default Footer;