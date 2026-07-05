import './Repository.css'
import Card from '../UI/Card';

const LANGUAGE_COLORS = {
  JavaScript: "#f2c94c",
  TypeScript: "#4f8fe0",
  Python: "#6bbf6b",
  Java: "#e0a04f",
  HTML: "#e0654f",
  CSS: "#8f6be0",
};

function RepositoryCard({ repo, favorites, toggleFavorite }) {

    const isFavorite = favorites.some( favorite => favorite.id === repo.id);
    const langColor = LANGUAGE_COLORS[repo.language] || "var(--text-dim)";

  return (
    <Card className="repo-card">
      <div className="repo-card-head">
        <h3>{repo.name}</h3>
        <button
          className={`repo-star ${isFavorite ? "repo-star-active" : ""}`}
          onClick={() => toggleFavorite(repo)}
          aria-pressed={isFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>

      <p className="repo-desc">{repo.description || "No description available."}</p>

      <div className="repo-info">
        {repo.language && (
          <span className="repo-lang">
            <span className="repo-lang-dot" style={{ background: langColor }} />
            {repo.language}
          </span>
        )}
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
      </div>

      <div className="repo-footer">
        <small className="muted mono-sm">Updated {new Date(repo.updated_at).toLocaleDateString()}</small>
        <a href={repo.html_url} target="_blank" rel="noreferrer">View repo →</a>
      </div>
    </Card>
  );

}

export default RepositoryCard;