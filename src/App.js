import React, { Component } from 'react';
import SwaggerUI from 'swagger-ui-react';
import Config from './organization_config.json';
import Sidebar from './Sidebar.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        organizationConfig: null,
        swaggerUrlList: null,
        definitionLink: "https://petstore.swagger.io/v2/swagger.json"
      }
      this.loadSwaggerUrls = this.loadSwaggerUrls.bind(this)
      this.updateDefinitionLink = this.updateDefinitionLink.bind(this)
    }

  componentWillMount() {
    this.setState({
      organizationConfig:  Config.orgData,
      swaggerUrlList: Config.swaggerUrls
    })
  }

  loadSwaggerUrls() {
    // URLs are already loaded from config in componentWillMount
    // This method is kept for compatibility with Sidebar component
    return this.state.swaggerUrlList;
  }

  updateDefinitionLink(newLink) {
    this.setState({
      definitionLink: newLink
    })
  }

  render() {
    return (
      <div className="App">
        <Sidebar 
          organizationConfig={this.state.organizationConfig}
          swaggerUrlList={this.state.swaggerUrlList}
          updateDefinitionLink={this.updateDefinitionLink}
          loadSwaggerUrls={this.loadSwaggerUrls}
        />
        
        <div id="api-data">
          <SwaggerUI 
            url={this.state.definitionLink}
            docExpansion="list"
          />
        </div>
      </div>
    );
  }
}

export default App;
