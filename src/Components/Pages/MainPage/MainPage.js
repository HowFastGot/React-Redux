import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import fetchCarts from "../../../redux/actions/mainPageActions";
import { useHttp } from "../../../hooks/http.hook"
import { mainPageSelector } from "../../../redux/reducers-actions/mainPageSlice";
import { cartAddNewCarts } from "../../../redux/reducers-actions/cartSlice";

import { AppHeader, AppFilters, Categories, PizzaCart, NetflixLoader } from "../../transponder";


const MainPage = () => {

     const { carts, cartsLoadingStatus } = useSelector(mainPageSelector);

     const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
     const filters = [
          { filter: "rating", name: "популярности" },
          { filter: "price", name: "цене" },
          { filter: "feedback", name: "отзывам" },
          { filter: "alphabet", name: "алфавиту" }
     ];

     const { request } = useHttp();
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(fetchCarts(request))
     }, []);

     const onClickAddPizza = (pizzaObj) => {
          dispatch(cartAddNewCarts(pizzaObj))
     }

     const renderCarts = (arr = []) => {
          return arr.map((item) => {
               return (
                    <PizzaCart {...item} onClickAddPizza={(obj) => onClickAddPizza(obj)} />
               );
          })
     };

     return (
          <>
               <AppHeader mainPage />
               <main className=" _container">
                    <h3 class="page__title-pizza">Все пиццы</h3>
                    <div className="page__filter-row filter-row">
                         <Categories categories={categories} />
                         <AppFilters filtersList={filters} />
                    </div>
                    <div class="page__pizza-grid grid-pizza">
                         {
                              cartsLoadingStatus === "loading" ? <NetflixLoader /> : renderCarts(carts)
                         }
                    </div>
               </main>

          </>
     );
};
export default MainPage;