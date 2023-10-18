import React from "react";

class Home extends React.Component {
    render() {
        return (

            class Home extends React.Component {
                render() {
                    return (
                        <div>
                            <header className="header">
                                <a href="#" className="logo">
                                    <i className="fas fa-bread-slice"></i> bakery
                                </a>
                                <nav className="navbar">
                                    <a href="#home">home</a>
                                    <a href="#product">recipes</a>
                                    <a href="#gallery">gallery</a>
                                    <a href="#order">order</a>
                                </nav>
                                <div className="icons">
                                    <div id="cart-btn" className="fas fa-shopping-cart"></div>
                                    <div id="menu-btn" className="fas fa-bars"></div>
                                </div>
                            </header>
                            <div className="cart-items-container">
                                <div id="close-form" className="fas fa-times"></div>
                                <h3 className="title">checkout</h3>
                                <div className="cart-item">
                                    <span className="fas fa-times"></span>
                                    <img src="images/cart-1.jpg" alt="" />
                                    <div className="content">
                                        <h3>bakery item 1</h3>
                                        <div className="price">$45.99/-</div>
                                    </div>
                                </div>
                                <div className="cart-item">
                                    <span className="fas fa-times"></span>
                                    <img src="images/cart-2.jpg" alt="" />
                                    <div className="content">
                                        <h3>bakery item 2</h3>
                                        <div className="price">$15.99/-</div>
                                    </div>
                                </div>
                                <div className="cart-item">
                                    <span className="fas fa-times"></span>
                                    <img src="images/cart-3.jpg" alt="" />
                                    <div className="content">
                                        <h3>bakery item 3</h3>
                                        <div className="price">$29.99/-</div>
                                    </div>
                                </div>
                                <a href="#" className="btn">
                                    checkout
                                </a>
                            </div>
                            <section className="home" id="home">
                                <div className="swiper home-slider">
                                    <div className="swiper-wrapper">
                                        <div
                                            className="swiper-slide slide"
                                            style={{
                                                background: "url(images/slider1.jpg) no-repeat",
                                            }}
                                        >
                                            <div className="content">
                                                <h3>we bake the world a better place</h3>
                                                <a href="#" className="btn">
                                                    get started
                                                </a>
                                            </div>
                                        </div>
                                        <div
                                            className="swiper-slide slide"
                                            style={{
                                                background: "url(images/slider2.jpg) no-repeat",
                                            }}
                                        >
                                            <div className="content">
                                                <h3>we bake the world a better place</h3>
                                                <a href="#" className="btn">
                                                    get started
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-button-next"></div>
                                    <div className="swiper-button-prev"></div>
                                </div>
                            </section>
                            <section class="banner">
                                <img src="images/banner.png" alt="" />
                            </section>
                            <section class="product" id="product">
                                <h1 className="heading">
                                    our <span> recipes list</span>
                                </h1>
                                <div className="box-container">
                                    <div className="box">
                                        <div className="image">
                                            <img src="images/product-1.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h3>Early Grey Bundt Cake</h3>
                                            <p>
                                                Steeping tea bags in milk gives this party-ready Bundt cake a
                                                lovely, subtle Earl Grey flavor that’s perfectly paired with
                                                bright citrus zest. For a tight, dense crumb, use room
                                                temperature ingredients and make sure to thoroughly mix at
                                                every step (without over-mixing the batter).
                                            </p>
                                            <div className="stars">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <a href="#" className="btn">
                                                view recipe
                                            </a>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="image">
                                            <img src="images/product-2.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h3>Cornmeal Biscotti</h3>
                                            <p>
                                                Cornmeal, ground ginger, and orange zest add flair to these
                                                biscotti, and jeweled dried cranberries and pistachios round
                                                out the seasonal flavor profile.
                                            </p>
                                            <div className="stars">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <a href="#" className="btn">
                                                view recipe
                                            </a>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="image">
                                            <img src="images/product-3.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h3>Banana Bread</h3>
                                            <p>
                                                The perfect end-of-summer brunch recipe or sweet afternoon
                                                snack, zucchini bread is easy to make and doesn’t require any
                                                complicated steps or techniques.
                                            </p>
                                            <div className="stars">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </div>
                                            <a href="#" className="btn">
                                                view recipe
                                            </a>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="image">
                                            <img src="images/product-4.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h3>Peanut Butter Molten Strawberry Cake</h3>
                                            <p>
                                                It's a good thing these 3-ingredient bites are easy to make,
                                                you'll want to double the recipe so you don't run out.
                                            </p>
                                            <div className="stars">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <a href="#" className="btn">
                                                view recipe
                                            </a>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="image">
                                            <img src="images/product-5.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h3>Lavender Shortbread Wedges</h3>
                                            <p>
                                                Stuff leftover cranberry sauce in pie dough, or use spicy-sweet
                                                jam if you're making these outside of the holidays.
                                            </p>
                                            <div className="stars">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </div>
                                            <a href="#" className="btn">
                                                view recipe
                                            </a>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="image">
                                            <img src="images/product-6.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h3>Honey Pie</h3>
                                            <p>
                                                They might look fancy, but these lavender-infused madeleines
                                                are super simple.
                                            </p>
                                            <div className="stars">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <a href="#" className="btn">
                                                view recipe
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="gallery" id="gallery">
                                <h1 className="heading">
                                    our <span> gallery</span>
                                </h1>
                                <div className="gallery-container">
                                    <a href="images/gallery1.jpg" className="box">
                                        <img src="images/gallery1.jpg" alt="" />
                                        <div className="icons">
                                            <i className="fas fa-plus"></i>
                                        </div>
                                    </a>
                                    <a href="images/gallery2.jpg" className="box">
                                        <img src="images/gallery2.jpg" alt="" />
                                        <div className="icons">
                                            <i className="fas fa-plus"></i>
                                        </div>
                                    </a>
                                    <a href="images/gallery3.jpg" className="box">
                                        <img src="images/gallery3.jpg" alt="" />
                                        <div className="icons">
                                            <i className="fas fa-plus"></i>
                                        </div>
                                    </a>
                                    <a href="images/gallery4.jpg" className="box">
                                        <img src="images/gallery4.jpg" alt="" />
                                        <div className="icons">
                                            <i className="fas fa-plus"></i>
                                        </div>
                                    </a>
                                    <a href="images/gallery5.jpg" className="box">
                                        <img src="images/gallery5.jpg" alt="" />
                                        <div className="icons">
                                            <i className="fas fa-plus"></i>
                                        </div>
                                    </a>
                                    <a href="images/gallery6.jpg" className="box">
                                        <img src="images/gallery6.jpg" alt="" />
                                        <div className="icons">
                                            <i className="fas fa-plus"></i>
                                        </div>
                                    </a>
                                </div>
                            </section>
                            <section className="promotion">
                                <h1 className="heading">
                                    weekly <span>promotions</span>
                                </h1>
                                <div className="box-container">
                                    <div className="box">
                                        <div className="content">
                                            <h3>chocolate cake</h3>
                                            <p>
                                                Chocolate flavor oozes all through this cake even though it's
                                                only made with cocoa powder, like our very own Fudgy Chocolate
                                                Cake. With a crumb so incredibly tender, this cake stays moist
                                                for a good 4-5 days. Whether you eat it plain, dust it with
                                                powdered sugar or serve with dollops of cream or scoops of ice
                                                cream, it truly is perfectly perfect!
                                            </p>
                                        </div>
                                        <img src="images/promotion1.png" alt="" />
                                    </div>
                                    <div className="box">
                                        <img src="images/promotion2.png" alt="" />
                                        <div className="content">
                                            <h3>nut cake</h3>
                                            <p>
                                                Nut cake can be enjoyed on its own or paired with a cup of
                                                coffee or tea for a delightful treat. Whether served as a
                                                dessert or enjoyed as a snack, nut cake is sure to satisfy any
                                                sweet tooth craving.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="order" id="order">
                                <h1 className="heading">
                                    <span>order</span> now
                                </h1>
                                <div className="row">
                                    <div className="image">
                                        <img src="images/order.gif" alt="" />
                                    </div>
                                    <form action="">
                                        <div className="inputBox">
                                            <input type="text" placeholder="first name" />
                                            <input type="text" placeholder="last name" />
                                        </div>
                                        <div className="inputBox">
                                            <input type="email" placeholder="email address" />
                                            <input type="number" placeholder="phone number" />
                                        </div>
                                        <div className="inputBox">
                                            <input type="text" placeholder="food name" />
                                            <input type="number" placeholder="how much" />
                                        </div>
                                        <textarea
                                            placeholder="your address"
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="10"
                                        ></textarea>
                                        <input type="submit" value="order now" className="btn" />
                                    </form>
                                </div>
                            </section>
                            <section className="footer">
                                <div className="box-container">
                                    <div className="box">
                                        <h3>address</h3>
                                        <p>493 Deneysville Refengkgotso, Free state</p>
                                        <div className="share">
                                            <a href="#" className="fab fa-facebook-f"></a>
                                            <a href="#" className="fab fa-twitter"></a>
                                            <a href="#" className="fab fa-instagram"></a>
                                            <a href="#" className="fab fa-linkedin"></a>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <h3>E-mail</h3>
                                        <a href="#" className="link">kissmartmoeketsi@gmail.com</a>
                                    </div>
                                    <div className="box">
                                        <h3>call us</h3>
                                        <p>+27 060 420 0987</p>
                                    </div>
                                    <div className="box">
                                        <h3> opening hours</h3>
                                        <p>
                                            Monday - Friday: 9:00 - 23:00 <br /> Saturday: 8:00 - 24:00
                                        </p>
                                    </div>
                                </div>
                                <div className="credit">
                                    created by <span>Sirkissmart</span> all rights reserved!
                                </div>
                            </section>
                            <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/js/lightgallery.min.js"></script>
                            <script src="js/script.js"></script>
                            <script>
                                lightGallery(document.querySelector('.gallery .gallery-container'));
                            </script>
                        </div>
                    );
                }
            });
        }   
        export default Home;

