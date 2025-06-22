import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AppRoutes from './routes/Approutes';




const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Layout>
        <main className="flex-grow">
          <AppRoutes />
        </main>
        </Layout>
      </div>
    </Router>
  );
}

export default App;