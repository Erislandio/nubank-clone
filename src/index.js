import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import '~/config/ReactotronConfig';

import Routes from '~/routes';

const App = () => (
	<Fragment>
		<StatusBar barStyle="light-content" backgroundColor="#8810ae" />
		<Routes />
	</Fragment>
);

export default App;
