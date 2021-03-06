import React from 'react';

import LocationNavButton from '../../ui/components/LocationNavButton.jsx';

export default {
  title: 'Components/LocationNavButton',
  component: LocationNavButton,
};

const Template = (args) => <LocationNavButton {...args} />;

export const Stateless = Template.bind({});
Stateless.args = {
  locationName: 'New York, NY',
};
