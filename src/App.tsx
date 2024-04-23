import React from 'react';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from 'react-query';
import AppNavigator from './navigation/AppNavigator';
import {store} from './redux/store';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppNavigator />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
