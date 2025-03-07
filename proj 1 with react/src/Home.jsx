import React from 'react';
import './Home.css';

// Import images from the 'src/images' folder
import mainImg from './img/main-img.jpg';
import beardImg from './img/beard_web.jpg';
import hairImg from './img/hair_web.jpg';
import skinImg from './img/skin_web.jpg';
import oilTextureImg from './img/oil-texture.jpg';

function Home() {
    return (
        <>
            <div className="sec1">
                <div className="sec1-text">
                    <h1>Ghost <br />Tracer<br />Utility Oil</h1>
                    <p>Our newest limited-edition Black Line <br />fragrance — A futuristic and fresh blend of <br />fallen rain, freesia, cyclamen, dark <br />Sandalwood — is available now!</p>
                    <a href="#shop" className="btn">SHOP GHOST TRACER</a>
                </div>
                <div className="sec1-img">
                    <img className="img-thumbnail" src={mainImg} alt="main-banner" />
                </div>
            </div>
            <div className="sec2">
                <h1>Keep on Growing®</h1>
                <div className="cate">
                    <div className="cate-item">
                        <img src={beardImg} alt="beard" />
                        <a href="#" className="shop-btn">SHOP NOW</a>
                    </div>
                    <div className="cate-item">
                        <img src={hairImg} alt="hair" />
                        <a href="#" className="shop-btn">SHOP NOW</a>
                    </div>
                    <div className="cate-item">
                        <img src={skinImg} alt="skin" />
                        <a href="#" className="shop-btn">SHOP NOW</a>
                    </div>
                </div>
            </div>
            <h1 className="blog">BLOG</h1>
            <div className="sec3">
                <div className="sec3-text">
                    <div className="txt">
                        <h1>Top Articles</h1>
                        <p>The 23 Best Beard Styles for 2025<br />
                            The Definitive Guide to Mustache Styles<br />
                            How to Grow an Awesome Beard<br />
                            How to Fix Your Patchy Beard<br />
                            The Ultimate Guide to Men’s Hair Products</p>
                    </div>
                    <div className="txt">
                        <h1>Beard Tips And Hacks</h1>
                        <p>5 Tips for an Epic White Beard<br />
                            5 Beard Tools You Need and 5 You Don’t<br />
                            The Ultimate Guide to Beards and Ingrown Hairs<br />
                            9 Advanced Beard Hacks to Level Up Your Beard<br />
                            What Beard Oil Does and How to Use It</p>
                    </div>
                    <div className="txt1">
                        <h1>Style</h1>
                        <p>7 Best Ways to Wear Cowboy Boots<br />
                            It’s Time to Ditch the Necktie for the Bolo Tie<br />
                            The Beardbrand Guide to Men’s Hat Styles<br />
                            Men’s Style Guide: 12 Tips to Take You to the Ultimate Level<br />
                            Top 5 Style Mistakes Men Make<br />
                            The Ultimate Outfit Guide Based on the Color of Your Beard</p>
                    </div>
                    <a href="#">SEE ALL POST</a>
                </div>
                <div className="sec3-img">
                    <img src={oilTextureImg} alt="oil-texture" />
                </div>
            </div>
            <div className="sec4">
                <h1>Grow Your Mind</h1>
                <input type="email" placeholder="Enter your email" />
            </div>
            <div className="sec5">
                <div className="txt">
                    <h1>Shoppers with Disabilities</h1>
                    <p>If you are vision-impaired or have <br />any impairment covered by the <br />Americans with Disabilities Act or <br />a similar law, and you wish to <br />discuss potential <br />accommodations related to using <br />this website, please contact us at <br />844-662-3273 ext 0 or email us at <br />support@beardbrand.com.</p>
                </div>
                <div className="txt">
                    <h1>Beardbrand</h1>
                    <a href="#">Beardbrand Barbershop</a>
                    <a href="#">About Us</a>
                    <a href="#">Ingredient Glossary</a>
                    <a href="#">Retail Locations</a>
                    <a href="#">Terms of Use, Privacy Policy & Trademarks</a>
                </div>
                <div className="txt">
                    <h1>Community</h1>
                    <a href="#">Account Login</a>
                    <a href="#">Returns & Exchanges</a>
                    <a href="#">FAQs</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </>
    );
}

export default Home;
