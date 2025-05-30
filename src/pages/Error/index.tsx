import Layout from '../../components/containers/Layout';

function Error404() {
    return (
        <Layout page = 'error'>
            <h1 className = 'error-title__h1'>404</h1>
            <h2 
                className = 'error-title__h2 error-title-size__h2'
            >Oups! La page que vous demandez n'existe pas.</h2>
            <a 
                className = 'error__a'
                href = '/' 
                aria-label = "Retourner sur la page d'accueil"
             >Retourner sur la page d'accueil</a>
        </Layout>
    );
}

export default Error404;
