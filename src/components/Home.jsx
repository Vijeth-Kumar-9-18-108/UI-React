import React from 'react';
import '../styles/Home.css';

const Home = () => (
  <div className="home-container fade-in">
    <h1>Welcome to Food Wonder</h1>
    <p>Explore our delicious menu items and seasonal specials.</p>
    <div className="hero-image"></div>
    <div className="promotions">
      <h2>Promotions and Seasonal Specials</h2>
      <div className="promotion-item">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgAQlwbwK1PFLHUA9WF4gmaVEWOsYtl3c45-V__3vpXgns-u6W-cbR98owPILvrbWtMoXk22sVMmEpjpDeIsZwWVeleB1wGZb70SD-0X4hldT0uUZnhiA7ZMW8fEqJQRDQSpkGqQrm6-1osjAs_tviTPLgO-ZACPFNDRmEYexao3xkFXz_jnMTLRgCSZE/s320/summersalad.png" alt="Promotion 1" />
        <h3>Summer Special Salad</h3>
        <p>Enjoy a refreshing salad with a variety of seasonal fruits and veggies.</p>
      </div>
      <div className="promotion-item">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpCdu7AOUBcOKIrqiYWKF7X7mYbeLZKjS13wfyTPa7Lb9YO12vh28YNUToBHLJKF-CZSeHIdBEt0qtxJeHC0inqk7dqEsV87GYf-eZ6uQfwAKN8lKCQEzuk4zj1e1qc1eM7i9sKEXX0UYZGgdhDyVGEXtKpceQIK_F2HDrcbAWYmOs9pKePWP16KnUZvo/s320/feast.png" alt="Promotion 2" />
        <h3>Festive Feast</h3>
        <p>Indulge in our special festive menu available only for a limited time.</p>
      </div>
    </div>
    <div className="categories">
      <h2>Categories</h2>
      <div className="category-list">
        <div className="category">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdL5O5cY167zFikCZTpbZGNOHuVihSFEvYSAEW6wqB7t6Mr9J1XDqWGuR_RZMEUdp9EAksl-977bu8qXn57lt29_K22iRv2i_IIgmEJ38qfTlWBN1J-S4iJl_tTPRglqeDGgNP5v6Bt9IYdvq12S28E3ts-tsPecRFWzGSUPa8iykZgYbGXtEc-t1V_GA/s320/msaldosa.png" alt="Starters" />
          <h3>Starters</h3>
        </div>
        <div className="category">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinh-Es5zLJLyB-re2DSwsEUh8t6pfGfl3-P_gLMT7DWkp1LsXe87svf1G1-KR81yWoZEyp1-kgacaF9QBC9RYhe6gkRV04QnO9aIH9hK2kBYbpV9B8ifF3AvfWTDCyA45X6MqXYlMwO0BV4k_3G68ys-T42ZN88MqhLK-5mnygfcv4rHPrHAjPzcPqPTo/s320/golibaje.png" alt="Main Course" />
          <h3>Main Course</h3>
        </div>
        <div className="category">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtfz9E34LwR47JlFkv_iUO71C-cORXeardT2ZuD1sONskiSPHOpFNICXNFyHpbKfE8Xn1j0y1vdwJ43Q5VM4sJ2VXXAmnBVz-F5YZpLIirSShfDVkJ1Winxq8smTxmn4ousK7spi2cH_r3TTQvSDA8tRtqi0iYzLXsNS65RS-vT1id6qtqiC99KbJpZKo/s320/b.png" alt="Desserts" />
          <h3>Biryani</h3>
        </div>
        <div className="category">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_W69f-EtKOSqU7oDkCqb0cTzyXK7QV14TJi7aVwnBPik_nMdN0bIeTrYRBrOOv6kbADQrm730jAMivn7PqdKA4h3ihiBgYftM4eyT7ifPZ2Qsi7za8AJdBk91DDyGVhowsnwr13OyISoUIerCFEL4mI380A2SbvLCdgOe8llLc9wTUCQt_CzbUWgrZpQ/s320/gobi.png" alt="Salads" />
          <h3>Gobi Manchuriyan</h3>
        </div>
        <div className="category">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhpMey340Y1vjUx-Q9iIibJoQAsgubp5RNniIV8QRIGOb16TcTIWuzip08BgbIX8GAnc8ZF75lVsMyeqyqpPTkqY77C6uL_IVQC8bVG53wPdNx426HIDkYzZIKUSn-ZyOzSlFA-ye022pU6qGJEr9KRCbWgRbBvJ-XyNXybIeArXS5zw_ivGmAmDzB5vFg/s320/beverage.png" alt="Beverages" />
          <h3>Beverages</h3>
        </div>
        <div className="category">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-XpqtkiFcU2m-cMP9KpFDsDU2iKb9KqjLGUJByqwEkFNf-8hVCSqNCxLuNPhRWeCuHXLZpCKnYbD53mzHN_vEoSNYk8ItLIMECvAtZdeuaqG8sQ_1JGWlJ6cR5HS5Md_QunUpvd7qiMu2sxmrr-rXGP4zBfPb98Yl0L7_wHD1gnlmdnhPdOhUG5HEug0/s320/burger.png" alt="Sides" />
          <h3>Burger</h3>
        </div>
      </div>
    </div>
    <div className="featured-items">
      <h2>Featured Items</h2>
      <div className="featured-item">
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOF57uw_DNIUTbEcLBnCPTWt1LfGexB9vgF0wI837RteNt3bcFn1hS7Eq77Ue_1uZJUXefxqPtrqGCmkwdDOTFYVk4aJPZbw38AbgwNt5kQsJ8RCusOL_WFFFFuua69P3BD9r5iL4R-6fUi6GiYB2I7yxaQ_oRYNcBCfCWceeKyV1JpMgMtjy0_t5sWbs/s626/WhatsApp%20Image%202024-12-20%20at%2021.52.45.jpeg" alt="Sides" height={400} width={600}/>
        <h3>North Indian thali</h3>
        <p>A North Indian thali is a diverse platter featuring a variety of dishes like roti, rice, dal, sabzi, raita, pickles, and a sweet, offering a balanced and flavorful meal.</p>
      </div>
      <div className="featured-item">
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4c_dFrNfn0vhq3XXORHpV3lvaykcEQ_4QNOWyrMrQYKq_Pzlxg06i9UC7-NuTJpjthp_24V9hTMYQEGGzkDe_hzkZ34AlmY15G8nLk3UTjZB_MBaPO_PTjpI6aUM1oVRuD49-Dq_tSA3Z1otP6GsFIQ2WWxm9zEhSTRaCy6T9ux9Xdvit5uA5N_1TTPA/s800/WhatsApp%20Image%202024-12-20%20at%2021.56.22.jpeg" alt="Sides" height={400} width={600} />
        <h3>South Indian thali</h3>
        <p>A South Indian thali is a traditional meal served on a banana leaf, featuring a variety of dishes like rice, sambar, rasam, vegetable curries, chutneys, curd, and pickles, offering a flavorful and wholesome experience.</p>
      </div>
      <div className="featured-item">
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5gOeCEIIKuDgmw3R2BrJrdBXawfr7U8nZCV9fQPDJ0PAQoznPTHsSGBL02GyhtGtFIFFcc2yonvh0WUofo6rdfG0eVVrX66CQ9H7K1IDAdRoP-7o3BckOSUGDQpDsQ8aI5a-A9q6wcRykvXWIRi-dYjWvLQ9-za4AysQsqIaWYD8hp5CWo-YnYZ2M5xQ/s1280/WhatsApp%20Image%202024-12-20%20at%2021.59.38.jpeg" alt="Sides" height={400} width={600} />
        <h3>Chicken Tikka Kebab</h3>
        <p>Chicken Tikka Kebab is a popular Indian appetizer made of marinated chicken pieces, grilled or baked to perfection, offering a smoky, flavorful taste with a tender, juicy texture.</p>
      </div>
      <div className="featured-item">
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgR5h__2y40dopEgMpaNhzPZAi-z0Kc0N3r1GeRLo4r4WJV34oWNCa2TnOoySstPpgEbAq-g_pR1TjDD-vSKVSlcFNIMWSVSiPdstMK5WMJzp0MWQ5VBV5tfToosDrFgC4_RJEKYw8k6DpyzcGIRP15LXt-wf4jfZVZppdG3j3tIGfQuDrathPe0eXWgbU/s474/WhatsApp%20Image%202024-12-20%20at%2022.01.01.jpeg" alt="Sides"  height={400} width={600}/>
                <h3>Paneer Tikka</h3>
        <p>Paneer Tikka is a vegetarian Indian dish made of marinated cubes of paneer (Indian cottage cheese), grilled or baked to a smoky, flavorful perfection.</p>
      </div>
      <div className="featured-item">
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc3GdoXZUHD7QfEYA_7Ca5uAiuaZ7yKLeP7mZJDd90Dufkik2rtlMsfQlfQAjQ8QVDhSYP-i8B8U8KEh1kL0mnuLH8ZUfCxgilv5mYhp1m6L6519xXwholnlnMKTfeZEhrWT8i9962jLaSuxXRSB2AAMBnESTHJp_Ebzi_E16e4ZXMXNyWrUnWmOfBCss/s1280/WhatsApp%20Image%202024-12-20%20at%2022.06.24.jpeg" alt="Sides"  height={400} width={600}/>
        <h3>Gobi</h3>
        <p>Gobi is a popular Indian dish made with cauliflower, often cooked in a spiced gravy or dry sautéed, offering a flavorful and aromatic vegetarian option.</p>
      </div>
      <div className="featured-item">
      <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2YyJ06XBCwTthhC7JLNcrAKwSs37x-fFYYSKZyZBj8e3KcNXjJHSb86JToxVTYbjUVcKhppZxv_aaSUFSgC7YP-OFgLfJsHFonRSXrACFnOnSOZqZHjx1_TGrVekxeb8AUelGUD4v5V64HUBVVOoVkuTYfOYJPFKCp-5VuECfPznfH8HnaKEF6rEPaAc/s550/WhatsApp%20Image%202024-12-20%20at%2022.12.06.jpeg" alt="Sides"  height={400} width={600}/>
        <h3>Babycorn Manchurian</h3>
        <p>Babycorn Manchurian is a popular Indo-Chinese dish made with crispy fried baby corn pieces tossed in a tangy, spicy Manchurian sauce.</p>
      </div>
    </div>
  </div>
);

export default Home;

