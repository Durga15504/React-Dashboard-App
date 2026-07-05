import { useState } from "react";
import useWindowSize from "../../Hooks/useWindowSize";
import useFetch from "../../Hooks/useFetch";
import Search from "./Search";
import Profile from "./Profile";
import WindowInfo from "./WindowInfo"
import Notes from "./Notes";
import RepositoryList from "../Repository/RepositoryList";
import FavoriteRepositories from "../Repository/FavouriteRepository";
import useLocalStorage from "../../Hooks/useLocalStorage";
import Stats from "./Stats";
import './Dashboard.css';

function Dashboard() {

  const [searchUser, setSearchUser] = useState("");
  const { width, height } = useWindowSize();
  const { data, loading, error } = useFetch( searchUser ? `https://api.github.com/users/${searchUser}` : null );

  const { data: repositories, loading: repositoriesLoading, error: repositoriesError } = useFetch( searchUser ? `https://api.github.com/users/${searchUser}/repos` : null );

  const [favorites, setFavorites] = useLocalStorage( "favorite-repositories", [] );


  function toggleFavorite(repo) {
    const exists = favorites.some(
      favorite => favorite.id === repo.id
    );

    if (exists) {
      setFavorites(
        favorites.filter(
          favorite => favorite.id !== repo.id
        )
      );
    } else {
      setFavorites(prev => [...prev, repo]);
    }
  }
  
  return (
  
  <div className="dashboard">
    
    <Search onSearch={setSearchUser} />
    
    <div className="dashboard-grid">
      <Profile data={data} loading={loading} error={error} />
      <Stats profile={data} repositories={repositories} favorites={favorites} />
      <FavoriteRepositories favorites={favorites} toggleFavorite={toggleFavorite} />
      <Notes />
    </div>
    
    <RepositoryList repositories={repositories} loading={repositoriesLoading} error={repositoriesError}
        favorites={favorites} toggleFavorite={toggleFavorite} />

    <WindowInfo width={width} height={height} />

  </div>

);
  
}

export default Dashboard;