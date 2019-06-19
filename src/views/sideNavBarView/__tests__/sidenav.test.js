import React from 'react';
import SideBarComponent from '../sideNavBar';

describe('SideNav', () => {
  let component;

  const props = {
    username: 'mike'
  };

  it('should render side nav items', function () {
    component = mount(<SideBarComponent {...props}/>);
    expect(component.find('.item-div').length).toEqual(6);
  });

  it('should call renderSideNavItems',  () => {
    component = mount(<SideBarComponent {...props}/>);
    component.instance().renderSideNavItems = jest.fn();
    component.update();
    component.find('.side-nav-icon');
    expect(component.instance().renderSideNavItems).toBeTruthy();
  });
});
