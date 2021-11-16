import { useState, useMemo } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import  { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import Home from './pages/Home';
import { Restaurant } from './components/Restaurant';
import  Restaurants  from './components/Restaurants';
import { RestaurantMenu } from './components/RestaurantMenu';
import { menuData } from './data.menu';
import { restaurantData } from './data.restaurants';
import  Login  from './components/Login';
import { UserContext } from './UserContext';

function App() {

  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser}), [user, setUser]);

  const updatedRestaurants = restaurantData.map( data => {
   return { ...data, id: uuidv4()}
  });

  const menuDataIds = menuData.map( data => {
    return { ...data, id: uuidv4()}
  });
  
  return (
    <BrowserRouter>
    <UserContext.Provider value={value}>
      <div className="App">
    
          <Header />
      </div>
  
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
        <Route path="restaurants" element={<Restaurant />}>
            <Route path="" element={<Restaurants updatedRestaurants={updatedRestaurants} />}/>
            <Route path=":id" element={<RestaurantMenu  updatedRestaurants={updatedRestaurants} menuData={menuDataIds}  />}/>
        </Route>
    </Routes>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
