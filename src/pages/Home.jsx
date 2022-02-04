
// Components
import UserList from "../components/users/UserList"
import UserSearch from "../components/users/UserSearch"

function Home() {
    return (
        <>
            {/* Search component */}
            <UserSearch />
            <UserList />
        </>
    )
}

export default Home
