import React from "react";

class home extends React.Component{
    render(){
        return(
            <div>

<header class="header">

    <a href="#" class="logo"> <i class="fas fa-bread-slice"></i> bakery </a>

    <nav class="navbar">
        <a href="#home">home</a>
        <a href="#product">recipes</a>
        <a href="#gallery">gallery</a>
        <a href="#order">order</a>
    </nav>

    <div class="icons">
        <div id="cart-btn" class="fas fa-shopping-cart"></div>
        <div id="menu-btn" class="fas fa-bars"></div>
    </div>

</header>

<div class="cart-items-container">

    <div id="close-form" class="fas fa-times"></div>
    <h3 class="title">checkout</h3>

    <div class="cart-item">
        <span class="fas fa-times"></span>
        <img src="images/cart-1.jpg" alt="" />
        <div class="content">
            <h3>bakery item 1</h3>
            <div class="price">$45.99/-</div>
        </div>
    </div>

    <div class="cart-item">
        <span class="fas fa-times"></span>
        <img src="images/cart-2.jpg" alt="" />
        <div class="content">
            <h3>bakery item 2</h3>
            <div class="price">$15.99/-</div>
        </div>
    </div>

    <div class="cart-item">
        <span class="fas fa-times"></span>
        <img src="images/cart-3.jpg" alt="" />
        <div class="content">
            <h3>bakery item 3</h3>
            <div class="price">$29.99/-</div>
        </div>
    </div>

    <a href="#" class="btn"> checkout </a>

</div>


<section class="home" id="home">

    <div class="swiper home-slider">

        <div class="swiper-wrapper">

            <div class="swiper-slide slide" style="background: url(images/slider1.jpg) no-repeat;">
                <div class="content">
                    <h3>we bake the world a better place</h3>
                    <a href="#" class="btn"> get started </a>
                </div>
            </div>

            <div class="swiper-slide slide" style="background: url(images/slider2.jpg) no-repeat;">
                <div class="content">
                    <h3>we bake the world a better place</h3>
                    <a href="#" class="btn"> get started </a>
                </div>
            </div>

        </div>

        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>

    </div>

</section>

<section class="banner">
    <img src="images/banner.png" alt="" />
</section>

<section class="product" id="product">

    <h1 class="heading">our <span> recipes list</span></h1>

    <div class="box-container">

        <div class="box">
            <div class="image">
                <img src="images/product-1.jpg" alt="" />
            </div>
            <div class="content">
                <h3>Early Grey Bundt Cake</h3>
                <p>Steeping tea bags in milk gives this party-ready Bundt cake a lovely, subtle Earl Grey flavor that’s perfectly paired with bright citrus zest.
                    For a tight, dense crumb,use room temperature ingredients and make sure to thoroughly mix at every step (without over-mixing the batter).</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <a href="#" class="btn">view recipe</a>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src="images/product-2.jpg" alt="" />
            </div>
            <div class="content">
                <h3>Cornmeal Biscotti</h3>
                <p>Cornmeal, ground ginger, and orange zest add flair to these biscotti, and jeweled dried cranberries and pistachios round out the seasonal flavor profile.</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <a href="#" class="btn">view recipe</a>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src="images/product-3.jpg" alt="" />
            </div>
            <div class="content">
                <h3>Banna Bread</h3>
                <p>The perfect end-of-summer brunch recipe or sweet afternoon snack, zucchini bread is easy to make and doesn’t require any complicated steps or techniques.</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <a href="#" class="btn">view recipe</a>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src="images/product-4.jpg" alt="" />
            </div>
            <div class="content">
                <h3>Peanut Butter Molten Strawberry Cake</h3>
                <p>It's a good thing these 3-ingredient bites are easy to make, you'll want to double the recipe so you don't run out.</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <a href="#" class="btn">view recipe</a>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src="images/product-5.jpg" alt="" />
            </div>
            <div class="content">
                <h3>Lavender Shortbread Wedges</h3>
                <p>Stuff leftover cranberry sauce in pie dough, or use spicy-sweet jam if you're making these outside of the holidays.</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <a href="#" class="btn">view recipe</a>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src="images/product-6.jpg" alt="" />
            </div>
            <div class="content">
                <h3>hunny pie</h3>

                <p>They might look fancy, but these lavender-infused madeleines are super simple.</p>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <a href="#" class="btn">view recipe</a>
            </div>
        </div>

    </div>

</section>

<section class="gallery" id="gallery">

    <h1 class="heading">our <span> gallery</span></h1>

    <div class="gallery-container">

        <a href="images/gallery1.jpg" class="box">
            <img src="images/gallery1.jpg" alt="" />
            <div class="icons"><i class="fas fa-plus"></i></div>
        </a>

        <a href="images/gallery2.jpg" class="box">
            <img src="images/gallery2.jpg" alt="" />
            <div class="icons"><i class="fas fa-plus"></i></div>
        </a>

        <a href="images/gallery3.jpg" class="box">
            <img src="images/gallery3.jpg" alt="" />
            <div class="icons"><i class="fas fa-plus"></i></div>
        </a>

        <a href="images/gallery4.jpg" class="box">
            <img src="images/gallery4.jpg" alt="" />
            <div class="icons"><i class="fas fa-plus"></i></div>
        </a>

        <a href="images/gallery5.jpg" class="box">
            <img src="images/gallery5.jpg" alt="" />
            <div class="icons"><i class="fas fa-plus"></i></div>
        </a>

        <a href="images/gallery6.jpg" class="box">
            <img src="images/gallery6.jpg" alt="" />
            <div class="icons"><i class="fas fa-plus"></i></div>
        </a>

    </div>

</section>

<section class="promotion">

    <h1 class="heading">weekly <span>promotions</span></h1>

    <div class="box-container">

        <div class="box">
            <div class="content">
                <h3>chocolat cake</h3>
                <p>Chocolate flavour oozes all through this cake even though it’s only made with cocoa powder, like our very own Fudgy Chocolate Cake. With a crumb so incredibly tender, this cake stays moist for a good 4-5 days. Whether you eat it plain, dust it with powdered sugar or serve with dollops of cream or scoops of ice cream, it truly is perfectly perfect!</p>
            </div>

            <img src="images/promotion1.png" alt="" />
        </div>

        <div class="box">
            <img src="images/promotion2.png" alt="" />
            <div class="content">
                <h3>nut cake</h3>
                <p>Nut cake can be enjoyed on its own or paired with a cup of coffee or tea for a delightful treat. Whether served as a dessert or enjoyed as a snack, nut cake is sure to satisfy any sweet tooth craving.</p>
            </div>
            
        </div>

    </div>

</section>

<section class="order" id="order">

    <h1 class="heading"><span>order</span> now </h1>

    <div class="row">

        <div class="image">
            <img src="images/order.gif" alt="" />
        </div>

        <form action="">

            <div class="inputBox">
                <input type="text" placeholder="first name" />
                <input type="text" placeholder="last name" />
            </div>

            <div class="inputBox">
                <input type="email" placeholder="email address" />
                <input type="number" placeholder="phone number" />
            </div>

            <div class="inputBox">
                <input type="text" placeholder="food name" />
                <input type="number" placeholder="how much" />
            </div>

            <textarea placeholder="your address" name="" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="order now" class="btn">
        </form>

    </div>

</section>

<section class="footer">

    <div class="box-container">

        <div class="box">
            <h3>address</h3>
            <p>493 Deneysville Refengkgotso, Free state</p>
            <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
                <a href="#" class="fab fa-linkedin"></a>
            </div>
        </div>

        <div class="box">
            <h3>E-mail</h3>
            <a href="#" class="link">kissmartmoeketsi@gmail.com</a>
        </div>

        <div class="box">
            <h3>call us</h3>
            <p>+27 060 420 0987</p>
        
        </div>

        <div class="box">
            <h3> opening hours</h3>
            <p>Monday - Friday: 9:00 - 23:00 <br> Saturday: 8:00 - 24:00 </p>
        </div>

    </div>

    <div class="credit">created by <span>Sirkissmart</span> all rights reserved! </div>

</section>


<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/js/lightgallery.min.js"></script>

<script src="js/script.js"></script>

<script>
    lightGallery(document.querySelector('.gallery .gallery-container'));
</script>

<script>
    const recipeContainers = document.querySelectorAll('.recipe-container');

    recipeContainers.forEach((container) => {
        const info = container.querySelector('.recipe-info');
        const btn = container.querySelector('.view-recipe-btn');

        btn.addEventListener('click', () => {
            info.classList.toggle('show-info');
        });
    });
</script>

        </div>
        );   
    }
}

export default home;