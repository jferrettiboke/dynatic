import React from 'react';
import Helmet from 'react-helmet';

import DynaticContainer from '../../containers/DynaticContainer';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const App = props => (
  <div>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      link={[
        { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css' }
      ]}
    />
    <Navbar />
    <DynaticContainer {...props} />
    <Footer />
  </div>
);

export default App;
