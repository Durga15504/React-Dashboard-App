// This component has:
// no useState
// no useEffect
// no custom hooks
// It only receives props and displays UI, which is called a Presentational Component.

import Card from "../UI/Card";

function Profile({ data, loading, error }) {

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  if (!data) {
    return <p>Search a GitHub user.</p>;
  }

  return (
    <Card>
      <img src={data.avatar_url} width="120" alt={data.login}/>
      <h2>{data.name}</h2>
      <p>@{data.login}</p>
      <p>Followers: {data.followers}</p>
      <p>Public Repos: {data.public_repos}</p>
    </Card>
  );
}

export default Profile;