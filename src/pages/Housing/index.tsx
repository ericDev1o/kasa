import Layout from '../../components/containers/Layout';
import Collapse from '../../components/UI/Collapse';

function Housing() {
    return (
        <Layout page = 'housing'>
            <h1>Title</h1>
            <h2>Location</h2>
            <div>tags</div>
            <div>rating</div>
            <div>Host</div>
            <Collapse title='Description' content='' />
            <Collapse title='Équipements' content='' />
        </Layout>
    );
}

export default Housing;
