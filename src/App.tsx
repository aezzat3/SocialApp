import React from 'react';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from 'react-query';
import AppNavigator from './navigation/AppNavigator';
import {store} from './redux/store';
import {OfflineNotice} from './components/OfflineNotice';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <OfflineNotice />
        <AppNavigator />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
