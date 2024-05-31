import React from "react";
import "./Home.css";
import Product from"./Product";

function Home(){
    return(
            <div className="home">
                <div className="home_container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image"/>
                    
                    
                        <div className="home__row">
                                <Product
                                    id= "1213212338787"
                                    title="Urban Jungle Downtown Workpack 16.5 Liters Water Resistant, Padded, Premium Polyester Laptop Backpack"
                                    price={3500}
                                    rating={5}
                                    image="https://m.media-amazon.com/images/I/61JcZZqFheL._SX679_.jpg"
                                    />
                                <Product
                                    id= "121320909879"
                                    title="Lenovo IdeaPad Slim 3 Intel Core i7 12th Gen 15.6 inch (39.62cm) FHD Thin & Light Laptop (8GB/512GB SSD/Windows 11/Office 2021/1Yr ADP Free/3months Game Pass/Arctic Grey/1.63Kg), 82RK011EIN"
                                    price={62000}
                                    rating={4}
                                    image="https://m.media-amazon.com/images/I/81a3Ij-xXGL._SL1500_.jpg"
                                    />
                                
                            
                            </div>
                            <div className="home__row">
                                <Product
                                id= "19098769"
                                title="IFB 8 Kg 5 Star AI Powered Fully Automatic Front Load Washing Machine, 2X Power Steam (SENATOR NEO SXS 8012, 2023 Model, Silver, In-built Heater, 4 years Comprehensive Warranty"
                                price={33990}
                                rating={4}
                                image="https://m.media-amazon.com/images/I/61jwL4rgSZL._SL1500_.jpg"
                                />
                                <Product
                                id = "909877789"
                                title="Voltas 1 ton 5 Star, Inverter Split AC (Copper, 4-in-1 Adjustable Mode, Anti-dust Filter, 2024 Model, 125V Vectra CAW, White)"
                                price={34500}
                                rating={3}
                                image="https://m.media-amazon.com/images/I/51YQcpqaqFL._SL1500_.jpg"
                                />
                                <Product
                                id = "1234576"
                                title="OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 256GB Storage)"
                                price={19999}
                                rating={4}
                                image="https://m.media-amazon.com/images/I/41Xe96WtZoL._SX300_SY300_QL70_FMwebp_.jpg"
                                />
                                
                            </div>
                            <div className="home__row">
                                    <Product
                                        id= "9477657"
                                        title="LG 242 L 3 Star Smart Inverter Frost-Free Double Door Refrigerator (GL-I292RPZX, Shiny Steel, Door Cooling+)"
                                        price={36500}
                                        rating={4}
                                        image="https://m.media-amazon.com/images/I/61+pdg8CfmL._SL1500_.jpg"
                                        />  

                                        
                                       
                            </div>
                </div>
       </div>


    )
}
export default Home;