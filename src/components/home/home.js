import ImportCollection from "../io/import";
import NewList from "../list/NewList";
import Collection from '../collection/Collection';

function home() {
    return (
        <div className='home container'>
            <NewList />
            <Collection />
            <ImportCollection />
        </div>
    )
}

export default home;