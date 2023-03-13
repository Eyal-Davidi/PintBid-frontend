import { createWebHistory, createRouter } from "vue-router";

import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import ImprintView from "./views/ImprintView.vue";
import HelpView  from "./views/HelpView.vue";
import ProfileView from "./views/ProfileView.vue";
import ProductList from "./components/templates/products/ProductList.vue";
import Product from "./components/templates/products/Product.vue";
import AddProduct from"./components/templates/products/AddProduct.vue";
import AuctionsDetailsPage from "./components/templates/auctions/AuctionsDetailsPage.vue";
import OffersPage from "./components/templates/offers/OffersPage.vue";
import GiveOffer from "./components/templates/offers/GiveOffer.vue";
import AddAuction from "./components/templates/auctions/AddAuction.vue";
import YourBuyingOffers from "./components/templates/offers/YourBuyingOffers.vue";
import YourSellingOffers from "./components/templates/offers/YourSellingOffers.vue";
import Auctions from "./components/templates/auctions/Auctions.vue"
import Auction from "./components/templates/auctions/Auction.vue"
import Users from "./components/templates/users/Users.vue"
import User from "./components/templates/users/User.vue"

// lazy-loaded
const BoardAdmin = () => import("./views/BoardAdmin.vue")


const routes = [
 {
   path: "/auctions",
   name: "Auctions",
   component: Auctions,
},
{
     path: "/auctions/:id",
     name: "Auction",
     component: Auction,
},
  {
    path: "/users",
    name: "Users",
    component: Users,
},
{
    path: "/user/:id",
    name: "User",
    component: User,
},
{
  path: "/products",
  name: "products",
  component: ProductList
},
{
  path: "/products/:id",
  name: "product-details",
  component: Product
},
{
  path: "/products/add",
  name: "product-add",
  component: AddProduct
},
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    component: ProfileView,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: '/imprint',
    name: 'imprint',
    component: ImprintView,
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView,
  },
  {
    path: "/auctions-details/:id",
    name: "auctionsDetails",
    component: AuctionsDetailsPage
  },
  {
    path: "/offers",
    name: "offers",
    component: OffersPage
  },
  // {
  //   path: "/offer/:id",
  //   name: "offer",
  //   component: OfferPage
  // },
    {
    path: "/give-offer",
    name: "giveOffer",
    component: GiveOffer
  },
  {
    // path: "/add-auction/:id",
    path: "/add-auction",
    name: "addAuction",
    component: AddAuction
  },
  {
    path: "/your-buying-offers/:id",
    name: "yourBuyingOffers",
    component: YourBuyingOffers
  },
  {
    path: "/your-selling-offers/:id",
    name: "yourSellingOffers",
    component: YourSellingOffers
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
