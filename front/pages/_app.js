import PropTypes from "prop-types";
import 'antd/dist/antd.css'
import Head from 'next/head';
import 'antd/dist/antd.css';

import wrapper from "../store/configureStore";

const App = ({ Component }) => {

    
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>SNS</title>
            </Head>
            <Component  />

        </>)
}

App.prototypes = {
    Component: PropTypes.elementType.isRequired,
}
export default wrapper.withRedux(App);