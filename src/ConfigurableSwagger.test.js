import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Sidebar from './Sidebar';
import APILink from './APILink';
import Config from './organization_config.json';

// Test that the new configuration structure is valid
test('organization config contains swagger URLs', () => {
  expect(Config.swaggerUrls).toBeDefined();
  expect(Array.isArray(Config.swaggerUrls)).toBe(true);
  expect(Config.swaggerUrls.length).toBeGreaterThan(0);
  
  // Test structure of first URL entry
  const firstUrl = Config.swaggerUrls[0];
  expect(firstUrl.name).toBeDefined();
  expect(firstUrl.description).toBeDefined();
  expect(firstUrl.url).toBeDefined();
});

// Test that Sidebar can render with new data structure
test('Sidebar renders with swagger URL list', () => {
  const mockProps = {
    organizationConfig: Config.orgData,
    swaggerUrlList: Config.swaggerUrls,
    updateDefinitionLink: jest.fn(),
    loadSwaggerUrls: jest.fn()
  };
  
  const div = document.createElement('div');
  ReactDOM.render(<Sidebar {...mockProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Test that APILink works with new data structure
test('APILink works with new URL structure', () => {
  const mockApiData = {
    name: "Test API",
    description: "Test Description", 
    url: "https://example.com/swagger.json"
  };
  
  const mockUpdateDefinitionLink = jest.fn();
  
  const div = document.createElement('div');
  ReactDOM.render(
    <APILink 
      apiLinkData={mockApiData}
      updateDefinitionLink={mockUpdateDefinitionLink}
    />, 
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});