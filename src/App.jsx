import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/layout';
import AppRoutes from './routes/Approutes';
import ScrollToTop from './components/common/ScrollTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Layout>
          <main className="flex-grow">
            <AppRoutes />
          </main>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
