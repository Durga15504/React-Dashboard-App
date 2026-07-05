import RepositoryCard from "./RepositoryCard";
import Card from "../UI/Card";

function FavoriteRepositories({
    favorites,
    toggleFavorite
}) {

    if (!favorites.length) {
        return (
            <Card className="favorites-empty">
                <p className="muted">No favorites yet — star a repository below to pin it here.</p>
            </Card>
        );
    }
    return (
        <Card label="favorites.star" className="favorites-card">
            <div className="repo-container">
                {
                 favorites.map(repo => ( 
                    <RepositoryCard key={repo.id} repo={repo} favorites={favorites} toggleFavorite={toggleFavorite} />
                ))
                }
            </div>
        </Card>
    );
}

export default FavoriteRepositories;