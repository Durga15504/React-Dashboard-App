import RepositoryCard from "./RepositoryCard";
import { useState, useMemo } from "react";
import RepositorySearch from "./RepositorySearch";

function RepositoryList({ repositories, loading, error, favorites, toggleFavorite }) {

  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] = useState("updated");

  const filteredRepositories = useMemo(() => {
    if (!repositories)
      return [];
    const filtered = repositories.filter(repo =>                   //filter
        repo.name.toLowerCase().includes(search.toLowerCase())
    );

    const sorted = [...filtered];                                   //copying the array

    switch (sortBy) {                                                      //sorting
      case "stars":
        sorted.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );
        break;
      case "forks":
        sorted.sort(
          (a, b) => b.forks_count - a.forks_count
        );
        break;
      case "name":
        sorted.sort(
          (a, b) => a.name.localeCompare(b.name)
        );
        break;
      case "updated":
      default:
        sorted.sort(
          (a, b) =>
            new Date(b.updated_at) - new Date(a.updated_at)
        );
    }
    return sorted;
}, [repositories, search, sortBy]);



  if (loading) {
    return <p className="muted section-status">Loading repositories…</p>;
  }
  if (error) {
    return <p className="error-text section-status">{error}</p>;
  }
  if (!repositories) {
    return null;
  }

  return (

    <section className="section">
      <div className="section-head">
        <h2 className="eyebrow">📂 Repositories <span className="eyebrow-count">({filteredRepositories.length})</span></h2>
        <div className="section-controls">
          <RepositorySearch search={search} setSearch={setSearch} />
          <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="updated">Recently updated</option>
            <option value="stars">Most stars</option>
            <option value="forks">Most forks</option>
            <option value="name">Name A–Z</option>
          </select>
        </div>
      </div>

      {filteredRepositories.length === 0 ? (
        <p className="muted section-status">No repositories match “{search}”.</p>
      ) : (
        <div className="repo-container">
          {filteredRepositories.map(repo => (
            <RepositoryCard key={repo.id} repo={repo} favorites={favorites} toggleFavorite={toggleFavorite} />
          ))}
        </div>
      )}
    </section>

  );

}

export default RepositoryList;