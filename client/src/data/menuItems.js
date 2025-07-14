// ✅ **Imports**

import paneer from "../assets/menu/paneer.jpg";
import biryani from "../assets/menu/biryani.jpg";
import pizza from "../assets/menu/pizza.jpg";
import burger from "../assets/menu/burger.jpg";
import dosa from "../assets/menu/dosa.jpg";
import idli from "../assets/menu/idli.jpg";
import chickencurry from "../assets/menu/chickencurry.jpg";
import fishfry from "../assets/menu/fishfry.jpg";
import friedrice from "../assets/menu/friedrice.jpg";
import noodles from "../assets/menu/noodles.jpg";
import pavbhaji from "../assets/menu/pavbhaji.jpg";
import samosa from "../assets/menu/samosa.jpg";
import vadapav from "../assets/menu/vadapav.jpg";
import butternaan from "../assets/menu/butternaan.jpg";
import dalmakhani from "../assets/menu/dalmakhani.jpg";
import kadaipaneer from "../assets/menu/kadaipaneer.jpg";
import cholebhature from "../assets/menu/cholebhature.jpg";
import gulabjamun from "../assets/menu/gulabjamun.jpg";
import icecream from "../assets/menu/icecream.jpg";
import coldcoffee from "../assets/menu/coldcoffee.jpg";
import momos from "../assets/menu/momos.jpg";
import springroll from "../assets/menu/springroll.jpg";
import rajmachawal from "../assets/menu/rajmachawal.jpg";
import masalatea from "../assets/menu/masalatea.jpg";
import lassi from "../assets/menu/lassi.jpg";
import eggcurry from "../assets/menu/eggcurry.jpg";
import chocolatecake from "../assets/menu/chokolatecake.jpg";
import rasgulla from "../assets/menu/rasgulla.jpg";
import tea from "../assets/menu/tea.jpg";
import coffee from "../assets/menu/coffee.jpg";
import jalebi from "../assets/menu/jalebi.jpg";
import kheer from "../assets/menu/kheer.jpg";
import moongdalhalwa from "../assets/menu/moongdalhalwa.jpg";
import rabri from "../assets/menu/rabri.jpg";
import paratha from "../assets/menu/paratha.jpg";
import breadbutter from "../assets/menu/breadbutter.jpg";
import sandwitch from "../assets/menu/sandwitch.jpg";
import poha from "../assets/menu/poha.jpg";

import maggi from "../assets/menu/maggi.jpg";
import macaroni from "../assets/menu/macroni.jpg";
import redsaucepasta from "../assets/menu/redsaucepasta.jpg";
import whitesaucepasta from "../assets/menu/whitesaucepasta.jpg";
import chillipotato from "../assets/menu/chillipotato.jpg";
import golgappe from "../assets/menu/golgappe.jpg";
import aloopuri from "../assets/menu/aloopuri.jpg";
import dahibhalle from "../assets/menu/dahibhalle.jpg";

import chocolateshake from "../assets/menu/chocolateshake.jpg";
import vanillashake from "../assets/menu/vanillashake.jpg";
import strawberryshake from "../assets/menu/strawberryshake.jpg";
import mangoshake from "../assets/menu/mangoshake.jpg";
import bananashake from "../assets/menu/bananashake.jpg";
import oreoshake from "../assets/menu/oreoshake.jpg";
import kitkatshake from "../assets/menu/kitkatshake.jpg";
import butterscotchshake from "../assets/menu/butterscotchshake.jpg";
import coldcoffeeshake from "../assets/menu/coldcoffeeshake.jpg";
import roseshake from "../assets/menu/roseshake.jpg";

import kulfifaluda from "../assets/menu/kulfifaluda.jpg";
import frenchfries from "../assets/menu/frenchfries.jpg";
import hotdog from "../assets/menu/hotdog.jpg";
import dabeli from "../assets/menu/dabeli.jpg";
import gajarhalwa from "../assets/menu/gajarhalwa.jpg";
import cheeseballs from "../assets/menu/cheeseballs.jpg";
import breadpakora from "../assets/menu/breadpakora.jpg";
import kachori from "../assets/menu/kachori.jpg";
import pastry from "../assets/menu/pastry.jpg";
import rabrimalpua from "../assets/menu/rabrimalpua.jpg";
import soyachaap from "../assets/menu/soyachaap.jpg";
import crispycorn from "../assets/menu/crispycorn.jpg";
import bhelpuri from "../assets/menu/bhelpuri.jpg";

const menuItems = [
  // ✅ **Breakfast**
  { id: 1, name: "Dosa", price: 100, category: "Breakfast", image: dosa },
  { id: 2, name: "Idli Sambar", price: 80, category: "Breakfast", image: idli },
  { id: 3, name: "Chole Bhature", price: 130, category: "Breakfast", image: cholebhature },
  { id: 4, name: "Paratha", price: 50, category: "Breakfast", image: paratha },
  { id: 5, name: "Bread Butter", price: 30, category: "Breakfast", image: breadbutter },
  { id: 6, name: "Sandwich", price: 40, category: "Breakfast", image: sandwitch },
  { id: 7, name: "Poha", price: 35, category: "Breakfast", image: poha },

  // ✅ **Lunch**
  { id: 8, name: "Paneer Butter Masala", price: 200, category: "Lunch", image: paneer },
  { id: 9, name: "Veg Biryani", price: 150, category: "Lunch", image: biryani },
  { id: 10, name: "Fried Rice", price: 180, category: "Lunch", image: friedrice },
  { id: 11, name: "Kadai Paneer", price: 210, category: "Lunch", image: kadaipaneer },
  { id: 12, name: "Rajma Chawal", price: 150, category: "Lunch", image: rajmachawal },

  // ✅ **Dinner**
  { id: 13, name: "Chicken Curry", price: 250, category: "Dinner", image: chickencurry },
  { id: 14, name: "Fish Fry", price: 300, category: "Dinner", image: fishfry },
  { id: 15, name: "Butter Naan", price: 40, category: "Dinner", image: butternaan },
  { id: 16, name: "Dal Makhani", price: 190, category: "Dinner", image: dalmakhani },
  { id: 17, name: "Egg Curry", price: 180, category: "Dinner", image: eggcurry },

  // ✅ **Snacks**
  { id: 18, name: "Pizza", price: 300, category: "Snacks", image: pizza },
  { id: 19, name: "Burger", price: 120, category: "Snacks", image: burger },
  { id: 20, name: "Noodles", price: 160, category: "Snacks", image: noodles },
  { id: 21, name: "Pav Bhaji", price: 140, category: "Snacks", image: pavbhaji },
  { id: 22, name: "Samosa", price: 50, category: "Snacks", image: samosa },
  { id: 23, name: "Vada Pav", price: 60, category: "Snacks", image: vadapav },
  { id: 24, name: "Momos", price: 120, category: "Snacks", image: momos },
  { id: 25, name: "Spring Roll", price: 120, category: "Snacks", image: springroll },

  // ✅ **Fast Food**
  { id: 26, name: "Maggi", price: 50, category: "Fast Food", image: maggi },
  { id: 27, name: "Macaroni", price: 60, category: "Fast Food", image: macaroni },
  { id: 28, name: "Red Sauce Pasta", price: 150, category: "Fast Food", image: redsaucepasta },
  { id: 29, name: "White Sauce Pasta", price: 150, category: "Fast Food", image: whitesaucepasta },
  { id: 30, name: "Chilli Potato", price: 120, category: "Fast Food", image: chillipotato },
  { id: 31, name: "Hot Dog", price: 100, category: "Fast Food", image: hotdog },
  { id: 32, name: "French Fries", price: 110, category: "Fast Food", image: frenchfries },
  { id: 33, name: "Cheese Balls", price: 150, category: "Fast Food", image: cheeseballs },
  { id: 34, name: "Crispy Corn", price: 130, category: "Fast Food", image: crispycorn },

  // ✅ **Street Food**
  { id: 35, name: "Golgappe", price: 40, category: "Street Food", image: golgappe },
  { id: 36, name: "Aloo Puri", price: 70, category: "Street Food", image: aloopuri },
  { id: 37, name: "Dahi Bhalla", price: 80, category: "Street Food", image: dahibhalle },
  { id: 38, name: "Dabeli", price: 40, category: "Street Food", image: dabeli },
  { id: 39, name: "Soya Chaap", price: 100, category: "Street Food", image: soyachaap },
  { id: 40, name: "Rabri with Malpua", price: 100, category: "Street Food", image: rabrimalpua },
  { id: 41, name: "Bhel Puri", price: 50, category: "Street Food", image: bhelpuri },

  // ✅ **Desserts**
  { id: 42, name: "Gulab Jamun", price: 70, category: "Dessert", image: gulabjamun },
  { id: 43, name: "Ice Cream", price: 90, category: "Dessert", image: icecream },
  { id: 44, name: "Chocolate Cake", price: 150, category: "Dessert", image: chocolatecake },
  { id: 45, name: "Rasgulla", price: 80, category: "Dessert", image: rasgulla },
  { id: 46, name: "Jalebi", price: 60, category: "Dessert", image: jalebi },
  { id: 47, name: "Kheer", price: 70, category: "Dessert", image: kheer },
  { id: 48, name: "Moong Dal Halwa", price: 80, category: "Dessert", image: moongdalhalwa },
  { id: 49, name: "Rabri", price: 90, category: "Dessert", image: rabri },
  { id: 50, name: "Kulfi Faluda", price: 100, category: "Dessert", image: kulfifaluda },
  { id: 51, name: "Gajar Halwa", price: 80, category: "Dessert", image: gajarhalwa },
  { id: 52, name: "Pastry", price: 80, category: "Dessert", image: pastry },

  // ✅ **Beverages**
  { id: 53, name: "Masala Tea", price: 50, category: "Beverages", image: masalatea },
  { id: 54, name: "Tea", price: 30, category: "Beverages", image: tea },
  { id: 55, name: "Coffee", price: 50, category: "Beverages", image: coffee },
  { id: 56, name: "Cold Coffee", price: 110, category: "Beverages", image: coldcoffee },
  { id: 57, name: "Lassi", price: 60, category: "Beverages", image: lassi },

  // ✅ **Shakes**
  { id: 58, name: "Chocolate Shake", price: 120, category: "Shakes", image: chocolateshake },
  { id: 59, name: "Vanilla Shake", price: 110, category: "Shakes", image: vanillashake },
  { id: 60, name: "Strawberry Shake", price: 130, category: "Shakes", image: strawberryshake },
  { id: 61, name: "Mango Shake", price: 120, category: "Shakes", image: mangoshake },
  { id: 62, name: "Banana Shake", price: 100, category: "Shakes", image: bananashake },
  { id: 63, name: "Oreo Shake", price: 150, category: "Shakes", image: oreoshake },
  { id: 64, name: "KitKat Shake", price: 150, category: "Shakes", image: kitkatshake },
  { id: 65, name: "Butterscotch Shake", price: 140, category: "Shakes", image: butterscotchshake },
  { id: 66, name: "Cold Coffee Shake", price: 130, category: "Shakes", image: coldcoffeeshake },
  { id: 67, name: "Rose Shake", price: 110, category: "Shakes", image: roseshake },
];

export default menuItems;
