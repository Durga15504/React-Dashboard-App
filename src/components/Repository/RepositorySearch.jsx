import Input from "../UI/Input";

function RepositorySearch({
    search,
    setSearch
}){

    return(
        <div className="repo-search">
            <Input placeholder="Filter repositories…" value={search} onChange={(e)=>setSearch(e.target.value)} />
        </div>

    );

}

export default RepositorySearch;