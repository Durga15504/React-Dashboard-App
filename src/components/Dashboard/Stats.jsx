function Stats({ profile, repositories, favorites }) {

    const repositoryCount = repositories?.length || 0;

    const favoriteCount = favorites.length;

    // const noteCharacters = notes.length;

    // const noteLines = notes.trim() === "" ? 0 : notes.split("\n").length;

    return (
        <div>
            <h2>📊 Dashboard Statistics</h2>
            <p> 👤 User : {profile?.login || "-"} </p>
            <p> 📂 Repositories : {repositoryCount} </p>
            <p> ⭐ Favorites : {favoriteCount} </p>
            <p> 👥 Followers : {profile?.followers ?? 0} </p>

            {/* <p> 📝 Note Characters : {" "} {noteCharacters} </p>
            <p> 📄 Note Lines : {" "} {noteLines} </p>
            <p> 🖥 Window : {" "} {width} {" × "} {height} </p> */}

        </div>

    );

}
export default Stats;

