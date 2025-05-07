import Layout from '../../components/Layout';

function Error404() {
    return (
        <Layout>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <a href="/" aria-label="Retourner à la page d'accueil" />
        </Layout>
    );
}

export default Error404;
