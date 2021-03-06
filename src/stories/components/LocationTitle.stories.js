import React from 'react';

import LocationTitle from '../../ui/components/LocationTitle.jsx';

export default {
  title: 'Components/LocationTitle',
  component: LocationTitle,
};

const Template = (args) => <LocationTitle {...args} />;

export const Populated = Template.bind({});
Populated.args = {
  currentLocation: {
    keyName: 'losangeles',
    name: 'Los Angeles',
    state: 'CA',
    country: 'US',
  },
};

export const NotPopulated = Template.bind({});
NotPopulated.args = {};
